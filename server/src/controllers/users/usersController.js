const expressAsyncHandler = require('express-async-handler');
const User = require('../../model/User');

//Register
const registerUser = expressAsyncHandler(
    async (req,res)=>{
        const {email, firstName, lastName, password} = req?.body;
    
        //check if user exists
        const userExists = await User.findOne({email});
        if(userExists) throw new Error('User already exists');
        try{
            
            
            
            const user = await User.create({email,firstName, lastName, password});
            res.status(200).json(user);
        }catch(err){
            res.json(err);
        }
    }
)


//fetch users
const fetchUsers = expressAsyncHandler(
    async(req, res)=>{
        try{
            const users = await User.find({});
            res.json(users);
        }
        catch(error){
            res.json(error);
        }
    }
);

module.exports = {
    registerUser,
    fetchUsers
};
