const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

const generateRandomString = length => {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .slice(0, length)
}

const generateToken = (payload, secret, expiresIn) => {
  const token = jwt.sign(payload, secret, {
    expiresIn: expiresIn
  })
  return token
}

const hashPassword = async password => {
  try {
    const hashedPassword = await bcrypt.hash(password, 15)
    return hashedPassword
  } catch (error) {
    throw new Error('Erro ao gerar hash da senha')
  }
}

const comparePasswords = async (password, hashedPassword) => {
  try {
    const match = await bcrypt.compare(password, hashedPassword)
    return match
  } catch (error) {
    throw new Error('Erro ao comparar senhas')
  }
}

module.exports = {
  generateRandomString,
  generateToken,
  hashPassword,
  comparePasswords
}
