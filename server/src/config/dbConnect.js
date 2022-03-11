const mongoose = require('mongoose');


const dbConnect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log('DB Connected successfully');
    }
    catch(err){
        console.log(`Error ${err.message}`);
    }
};


module.exports = dbConnect;
