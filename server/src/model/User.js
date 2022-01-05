const mongoose = require('mongoose'); 


//schema
const userSchema = mongoose.Schema({
    firstName : {
        required: [true, 'Required'],
        type: String
    },
    lastName : {
        required: [true, 'Required'],
        type: String
    },
    email : {
        required: [true, 'Required'],
        type: String
    },
    password : {
        required: [true, 'Required'],
        type: String
    },
    isAdmin : {
        type : Boolean,
        default: false,
    },
}, 
{
    timestamp: true
}
);


//compile schema into model
const User = mongoose.model('User', userSchema);


module.exports = User;