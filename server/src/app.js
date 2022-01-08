const express = require('express');
const dbConnect = require('./config/dbConnect');
const {errorHandler} = require('./middlewares/errorMiddleware');
const userRoute = require('./routes/users/usersRoute');


const app = express();


const logger = (res,req,next)=>{
    console.log("Middleware");
    next();
}

app.use(logger);

//DB connection
dbConnect();


//Middlewares
app.use(express.json());

//routes
app.use("/",userRoute);
//app.post("/login", loginUser);

//error
app.use(errorHandler);


module.exports = app;