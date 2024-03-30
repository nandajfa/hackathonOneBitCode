const express = require('express')
const router = express.Router();
const { registerUserController, loginUserController} = require('../controllers/authController');
const { getService, addService, editService, deleteService } = require('../controllers/serviceController')

router.post('/register', registerUserController);
router.post('/login', loginUserController);

router.get('/services', getService);
router.post('/services', addService);
router.put('/services/:id', editService);
router.delete('/services/:id', deleteService);

module.exports = router;
