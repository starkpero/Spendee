const expressAsyncHandler = require("express-async-handler");
const Income = require("../../model/Income");

//create
const createIncome = expressAsyncHandler(async (req, res) => {
  const { title, amount, description } = req.body;
  try {
    const income = await Income.create({
      title,
      amount,
      description,
      user: req?.user?._id,
    });
    res.json(income);
  } catch (error) {
    res.json(error);
  }
});


module.exports = {createIncome};