const expressAsyncHandler = require("express-async-handler");
const Expense = require("../../model/expenses");

//create
const createExpense = expressAsyncHandler(async (req, res) => {
  console.log(req.user);
  const { title, amount, description } = req.body;
  try {
    const expense = await Expense.create({
      title,
      amount,
      description,
      user: req?.user?._id,
    });
    res.json(expense);
  } catch (error) {
    res.json(error);
  }
});


//fetch all income
const fetchAllExpenses = expressAsyncHandler(async (req, res) => {
  const { page } = req?.query;
  try {
    const expense = await Expense.paginate(
      {},
      { limit: 10, page: Number(page), populate: "user" }
    );
    res.json(expense);
  } catch (error) {
    res.json(error);
  }
});



//fetch single income
const fetchSingleExpense = expressAsyncHandler(async (req, res) => {
  const { id } = req?.params;

  try {
    const expense = await Expense.findById(id);
    res.json(expense);
  } catch (error) {
    res.json(error);
  }
});



//update
const updateExpense = expressAsyncHandler(async (req, res) => {
  const { id } = req?.params;
  const { title, amount, description } = req.body;
  try {
    const expense = await Expense.findByIdAndUpdate(
      id,
      {
        title,
        description,
        amount,
      },
      { new: true }
    );
    res.json(expense);
  } catch (error) {
    res.json(error);
  }
});



//delete
const deleteExpense = expressAsyncHandler(async (req, res) => {
  const { id } = req?.params;

  try {
    const expense = await Expense.findByIdAndDelete(id);
    res.json(expense);
  } catch (error) {
    res.json(error);
  }
});

module.exports = {
  createExpense,
  fetchAllExpenses,
  fetchSingleExpense,
  updateExpense,
  deleteExpense
};