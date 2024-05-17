const express = require('express')
const router = express.Router()
const {
  registerUserController,
  loginUserController,
  dataUserController,
  logoutController,
  dataUserController
} = require('../controllers/authController')
const {
  getService,
  addService,
  editService,
  deleteService
} = require('../controllers/serviceController')
const cookieParser = require('cookie-parser')
router.use(cookieParser())

router.post('/register', registerUserController)
router.post('/login', loginUserController)
router.get('/dataUser', dataUserController)
router.get('/logout', logoutController)

router.get('/', getService)
router.post('/', addService)
router.put('/:id', editService)
router.delete('/:id', deleteService)

module.exports = router
