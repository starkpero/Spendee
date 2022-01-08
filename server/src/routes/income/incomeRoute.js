const express = require('express');
const {createIncome } = require('../../controllers/income/incomeController');


const incomeRoute = express.Router();

incomeRoute.post =('/', createIncome);


module.exports = incomeRoute;