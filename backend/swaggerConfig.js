const swaggerJSDoc = require('swagger-jsdoc')

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Minha API',
    version: '1.0.0',
    description: 'Documentação da API com Swagger'
  },
  components: {
    securitySchemes: {
      BearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  },
  security: [
    {
      BearerAuth: []
    }
  ],
  servers: [
    {
      url: 'http://localhost:3003'
    }
  ]
}

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js']
}

const swaggerSpec = swaggerJSDoc(options)

module.exports = swaggerSpec
