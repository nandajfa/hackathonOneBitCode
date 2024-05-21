const express = require('express')
const router = express.Router()
const {
  registerUserController,
  loginUserController,
  dataUserController,
  logoutController,
  checkAuthController
} = require('../controllers/authController')
const authenticateToken = require('../middlewares/authMiddleware')

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Registra um novo usuário
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: João da Silva
 *               email:
 *                 type: string
 *                 format: email
 *                 example: joao.silva@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: Senha123!
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso
 *       400:
 *         description: Erro na requisição
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/register', registerUserController)

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Faz login de um usuário
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: joao.silva@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: Senha123!
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 *       401:
 *         description: Credenciais inválidas
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/login', loginUserController)

/**
 * @swagger
 * /auth/dataUser:
 *   get:
 *     summary: Obtém dados do usuário autenticado
 *     tags: [Autenticação]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Dados do usuário retornados com sucesso
 *       401:
 *         description: Não autorizado - O token é inválido ou não foi fornecido
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/dataUser', authenticateToken, dataUserController)

/**
 * @swagger
 * /auth/logout:
 *   get:
 *     summary: Faz logout do usuário
 *     tags: [Autenticação]
 *     responses:
 *       200:
 *         description: Logout bem-sucedido
 *       401:
 *         description: Não autorizado
 */
router.get('/logout', logoutController)

/**
 * @swagger
 * /auth/check-auth:
 *   get:
 *     summary: Verifica se o usuário está autenticado
 *     tags: [Autenticação]
 *     responses:
 *       200:
 *         description: Usuário autenticado
 *       401:
 *         description: Não autorizado
 */
router.get('/check-auth', checkAuthController)

module.exports = router
