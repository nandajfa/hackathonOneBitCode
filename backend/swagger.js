/**
 * @swagger
 * info:
 *   title: Minha API
 *   description: Documentação da minha API
 *   version: 1.0.0
 */
/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Registrar um novo usuário
 *     parameters:
 *       - name: name
 *         in: formData
 *         required: true
 *         type: string
 *       - name: email
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso
 *       400:
 *         description: O email já está em uso
 *       500:
 *         description: Erro interno do servidor
 */
