const express = require('express')
const router = express.Router()

const {
  getService,
  addService,
  editService,
  deleteService
} = require('../controllers/serviceController')

/**
 * @swagger
 * components:
 *   schemas:
 *     Service:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - duration
 *         - price
 *         - location
 *         - link
 *       properties:
 *         id:
 *           type: string
 *           description: O ID do serviço
 *         name:
 *           type: string
 *           description: O nome do serviço
 *         description:
 *           type: string
 *           description: A descrição do serviço
 *         duration:
 *           type: integer
 *           description: A duração do serviço em minutos
 *         price:
 *           type: number
 *           description: O preço do serviço
 *         location:
 *           type: string
 *           description: O local onde a reunião é realizada. Ex Zoom
 *         link:
 *           type: string
 *           description: O link para a reunião, caso seja online
 */

/**
 * @swagger
 * /services:
 *   get:
 *     summary: Retorna a lista de todos os serviços
 *     tags: [Serviços]
 *     responses:
 *       200:
 *         description: Lista de serviços
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Service'
 */
router.get('/', getService)

/**
 * @swagger
 * /services:
 *   post:
 *     summary: Adiciona um novo serviço
 *     tags: [Serviços]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Service'
 *     responses:
 *       201:
 *         description: Serviço adicionado com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/', addService)

/**
 * @swagger
 * /services/{id}:
 *   put:
 *     summary: Edita um serviço existente
 *     tags: [Serviços]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do serviço
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Service'
 *     responses:
 *       200:
 *         description: Serviço editado com sucesso
 *       404:
 *         description: Serviço não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.patch('/edit', editService)

/**
 * @swagger
 * /services/{id}:
 *   delete:
 *     summary: Deleta um serviço existente
 *     tags: [Serviços]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do serviço
 *     responses:
 *       204:
 *         description: Serviço deletado com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.delete('/:id', deleteService)

module.exports = router
