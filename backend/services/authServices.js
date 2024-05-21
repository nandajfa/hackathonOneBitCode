const { createUser, findUserByEmail, findUserById } = require('../db/supabase')
const {
  generateToken,
  hashPassword,
  comparePasswords
} = require('../utils/authUtils')
const jwt = require('jsonwebtoken')

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

    const secret = process.env.JWT_SECRET

    const token = await generateToken({ userId: user.id }, secret, '24h')

    if (!token) {
      return { message: 'Fail' }
    } else {
      res.cookie('token', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'Strict'
      })
      return {
        message: 'Success',
        user: { name: user.name, email: user.email }
      }
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
      const secret = process.env.JWT_SECRET
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
  res.clearCookie('token')
  return 'Token de autenticação removido com sucesso.'
}

exports.checkAuth = async req => {
  const token = req.cookies.token

  if (!token) {
    return { authenticated: false }
  }

  try {
    const secret = process.env.JWT_SECRET
    return new Promise((resolve, reject) => {
      jwt.verify(token, secret, (err, decoded) => {
        if (err) {
          console.error('Erro ao verificar o token:', err)
          resolve({ authenticated: false })
        } else {
          resolve({ authenticated: true })
        }
      })
    })
  } catch (error) {
    console.error('Erro ao obter o segredo:', error)
    return { authenticated: false }
  }
}
