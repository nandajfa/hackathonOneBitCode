const { createUser, findUserByEmail } = require('../db/supabase');
const { generateToken, generateRandomString, hashPassword, comparePasswords } = require('../utils/authUtils');

exports.registerUser = async (name, email, password) => {
  try {
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      throw new Error('O email já está em uso.');
    }

    const hashedPassword = await hashPassword(password);

    await createUser({ name, email, password: hashedPassword });

    return { message: 'Usuário registrado com sucesso.' };
  } catch (error) {
    console.error('Erro ao registrar usuário:', error.message);
    throw new Error('Erro interno do servidor');
  }
};

exports.loginUser = async (email, password) => {
  try {
    const user = await findUserByEmail(email);
    if (!user) {
      throw new Error('Credenciais inválidas');
    }

    const passwordMatch = await comparePasswords(password, user.password);
    if (!passwordMatch) {
      throw new Error('Credenciais inválidas');
    }

    const secret = generateRandomString(32)
    const token = await generateToken({ userId: user.id }, secret, '24h');

    return { token };
  } catch (error) {
    console.error('Erro ao fazer login:', error.message);
    throw new Error('Usuário não encontrado');
  }
};
