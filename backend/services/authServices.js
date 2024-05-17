const { createUser, findUserByEmail, findUserById } = require('../db/supabase')
const {
  generateToken,
  generateRandomString,
  hashPassword,
  comparePasswords
} = require('../utils/authUtils')
// const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const secretManager = require('../utils/secretManager')

exports.registerUser = async (name, email, password) => {
  try {
    const existingUser = await findUserByEmail(email)
    if (existingUser) {
      throw new Error('O email já está em uso.')
    }
    const hashedPassword = await hashPassword(password)

    await createUser({ name, email, password: hashedPassword })

    return { message: 'Usuário registrado com sucesso.' }
  } catch (error) {
    console.error('Erro ao registrar usuário:', error.message)
    throw new Error('Erro interno do servidor')
  }
}

exports.loginUser = async (req, res, email, password) => {
  try {
    const user = await findUserByEmail(email)
    if (!user) {
      throw new Error('Credenciais inválidas')
    }

    const passwordMatch = await comparePasswords(password, user.password)
    if (!passwordMatch) {
      throw new Error('Credenciais inválidas')
    }

    const secret = generateRandomString(32)
    await secretManager.setSecret(secret)
    const token = await generateToken({ userId: user.id }, secret, '24h')

    if (!token) {
      return 'Fail'
    } else {
      res.cookie('token', token, { httpOnly: true, secure: true })
      return 'Success'
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error.message)
    throw new Error('Usuário não encontrado')
  }
}

exports.dataUser = async (req, res) => {
  const token = req.cookies.token

  if (token) {
    try {
      const secret = await secretManager.getSecret()
      const decodedToken = jwt.verify(token, secret)

      let data = await findUserById(decodedToken.userId)

      return data
    } catch (error) {
      console.error('Erro ao verificar o token:', error.message)
      res.sendStatus(401)
    }
  } else {
    res.sendStatus(401)
  }
}

exports.logoutUser = (req, res) => {
  res.cookie('token', '', {
    expires: new Date(0),
    httpOnly: true,
    secure: true
  })
  res.send('Token de autenticação removido com sucesso.')
}
