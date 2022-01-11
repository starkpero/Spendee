const express = require('express');
const {createIncome, fetchIncome, fetchSingleIncome, updateIncome, deleteIncome } = require('../../controllers/income/incomeController');
const authMiddleware = require("../../middlewares/authMiddleware");

const incomeRoute = express.Router();

incomeRoute.post('/', authMiddleware, createIncome);
incomeRoute.get('/', authMiddleware, fetchIncome);
incomeRoute.get('/:id', authMiddleware, fetchSingleIncome);
incomeRoute.put('/:id', authMiddleware, updateIncome);
incomeRoute.put('/:id', authMiddleware, deleteIncome);


module.exports = incomeRoute;