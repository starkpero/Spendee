const express = require('express');
const {createExpense, fetchAllExpenses, fetchSingleExpense, updateExpense, deleteExpense } = require('../../controllers/expenses/expensesController');
const authMiddleware = require("../../middlewares/authMiddleware");

const expenseRoute = express.Router();

expenseRoute.post('/', authMiddleware, createExpense);
expenseRoute.get('/', authMiddleware, fetchAllExpenses);
expenseRoute.get('/:id', authMiddleware, fetchSingleExpense);
expenseRoute.put('/:id', authMiddleware, updateExpense);
expenseRoute.put('/:id', authMiddleware, deleteExpense);


module.exports = expenseRoute;