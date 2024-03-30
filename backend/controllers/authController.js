const { registerUser, loginUser } = require('../services/authServices');

exports.registerUserController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const result = await registerUser(name, email, password);
    res.status(201).json(result);
  } catch (error) {
    console.error('Erro ao registrar usuário:', error.message);
    next(error);
  }
};

exports.loginUserController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await loginUser(email, password);
    res.json(result);
  } catch (error) {
    console.error('Erro ao fazer login:', error.message);
    next(error);
  }
};
