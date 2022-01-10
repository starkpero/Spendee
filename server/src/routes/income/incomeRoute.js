const express = require('express');
const {createIncome, fetchIncome, fetchSingleIncome, updateIncome, deleteIncome } = require('../../controllers/income/incomeController');


const incomeRoute = express.Router();

incomeRoute.post('/', createIncome);
incomeRoute.get('/', fetchIncome);
incomeRoute.get('/:id', fetchSingleIncome);
incomeRoute.put('/:id', updateIncome);
incomeRoute.put('/:id', deleteIncome);


module.exports = incomeRoute;