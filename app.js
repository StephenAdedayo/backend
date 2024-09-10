// importing express
const express = require("express")  

// intializing express and storing it in a variable called app
const app = express()

require('dotenv').config()
const PORT = process.env.PORT || 5000

// import database connection 
const connectDB = require('./db/db')

// execute database connection
connectDB()

// importing user route
const userRoute = require('./routes/userRoute')


// middleware
app.use(express.json())

app.use('/api/users', userRoute)








// testing general route
app.get('/api', (req, res) => {
      res.json({message: 'welcome to my server'})
})



// listen for request
app.listen(PORT, () => {
    console.log('server started successfully');
    
})




