// all functions that users can execute 
const User = require('../models/userModel')

const registerUser = async (req, res) => {

const {firstName, LastName, email, phone, password} = req.body

const userExists = await User.findOne({email})

if(userExists){
    return res.status(400).json({message: 'User Already Exists'})
}

const user = await User.create({firstName, LastName, email, phone, password})

 if(user){
    res.status(201).json({message: 'user registered successfully'})
 }
 else{
    res.status(400).json({message: 'invalid user'})
 }
}




const registerAdmin = async (req, res) => {

  const {firstName, lastName, email, phone, password} = req.body
  const userExists = await User.findOne({email})

  if(userExists){
      return res.status(400).json({message: 'User Already Exists'})
  }
  
  const user = await User.create({firstName, lastName, email, phone, password, isAdmin:true})
  
   if(user){
      res.status(201).json({message: 'user registered successfully'})
   }
   else{
      res.status(400).json({message: 'invalid user'})
   }

}

module.exports = {registerUser, registerAdmin}