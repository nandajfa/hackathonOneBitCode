const express = require('express')
const router = express.Router();
const { registerUserController, loginUserController} = require('../controllers/authController');
const { getService, addService, editService, deleteService } = require('../controllers/serviceController')

router.post('/register', registerUserController);
router.post('/login', loginUserController);

router.get('/', getService);
router.post('/', addService);
router.put('/:id', editService);
router.delete('/:id', deleteService);

module.exports = router;
