const express = require('express');
const dotenv = require('dotenv');
const dbConnect = require('./config/dbConnect');
const {errorHandler, notFound } = require('./middlewares/errorMiddleware');
const userRoute = require('./routes/users/usersRoute');
const incomeRoute = require('./routes/income/incomeRoute');
const expenseRoute = require('./routes/expenses/expenseRoute');


const app = express();

//environment variable env
dotenv.config();

const logger = (res,req,next)=>{
    console.log("Middleware");
    next();
}

app.use(logger);

//DB connection
dbConnect();


//Middlewares
app.use(express.json());


app.get("/",(req,res)=>{
    res.json({msg : "Welcome to Spendee api"});
});
// user routes
app.use("/api/users",userRoute);
// income routes
app.use("/api/income", incomeRoute);
//expenses routes
app.use("/api/expenses",expenseRoute);

//error
app.use(notFound);
app.use(errorHandler);



module.exports = app;