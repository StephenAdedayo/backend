// all user endpoint will be defined here

const express = require('express')

const {registerUser, registerAdmin} = require('../controllers/userController')

const router = express.Router()

// userRoute
router.post('/register', registerUser)

// adminRoute
router.post('/admin', registerAdmin)


module.exports = router