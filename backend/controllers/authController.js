const {
  registerUser,
  loginUser,
  dataUser,
  logoutUser,
  checkAuth
} = require('../services/authServices')

exports.registerUserController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body
    const result = await registerUser(name, email, password)
    res.status(201).json(result)
  } catch (error) {
    console.error('Erro ao registrar usuário:', error.message)
    next(error)
  }
}

exports.loginUserController = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const result = await loginUser(req, res, email, password)
    res.status(200).json(result)
  } catch (error) {
    console.error('Erro ao fazer login:', error.message)
    next(error)
  }
}

exports.dataUserController = async (req, res, next) => {
  try {
    const result = await dataUser(req, res)
    res.status(200).json(result)
  } catch (error) {
    console.error('Erro ao acessar perfil:', error.message)
    next(error)
  }
}

exports.logoutController = async (req, res, next) => {
  try {
    const result = await logoutUser(req, res)
    res.status(200).json(result)
  } catch (error) {
    console.error('Erro ao fazer logout:', error.message)
    next(error)
  }
}

exports.checkAuthController = async (req, res, next) => {
  try {
    const result = await checkAuth(req)
    res.status(200).json(result)
  } catch (error) {
    console.error('Erro ao verificar autenticação:', error.message)
    next(error)
  }
}
