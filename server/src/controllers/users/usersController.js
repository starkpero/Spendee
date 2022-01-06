const User = require('../../model/User');

//Register
const registerUser = async (req,res)=>{
    const {email, firstName, lastName, password} = req?.body;
    try{
        //check if user exists
        const userExists = await User.findOne({email});
        if(userExists){
            res.json("User Exist");
        }
        const user = await User.create({email,firstName, lastName, password});
        res.status(200).json(user);
    }catch(err){
        res.json(err);
    }
}; 


module.exports = {
    registerUser
};
