const express = require('express');
const {createExpense, fetchAllExpenses, fetchSingleExpense, updateExpense, deleteExpense } = require('../../controllers/expenses/expensesController');


const expenseRoute = express.Router();

expenseRoute.post('/', createExpense);
expenseRoute.get('/', fetchAllExpenses);
expenseRoute.get('/:id', fetchSingleExpense);
expenseRoute.put('/:id', updateExpense);
expenseRoute.put('/:id', deleteExpense);


module.exports = expenseRoute;