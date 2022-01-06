const express = require('express');
const {registerUser} = require('../../controllers/users/usersController');

const userRoute = express.Router();

userRoute.post("/register",registerUser);

module.exports = userRoute;