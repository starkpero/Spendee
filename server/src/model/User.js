const mongoose = require('mongoose'); 
const bcrypt = require('bcryptjs');


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

//hashing passwords
userSchema.pre('save', async function(next){
    //if the password is modified then move it to next middleware
    if(this.modified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});



//compile schema into model
const User = mongoose.model('User', userSchema);


module.exports = User;