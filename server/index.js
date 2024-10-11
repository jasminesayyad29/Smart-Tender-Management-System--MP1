const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const usermodel = require('./models/User');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB with error handling
mongoose.connect("mongodb://localhost:27017/Miniproject", { })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => {
        console.error("MongoDB connection error:", err);
        process.exit(1); // Exit the process if the connection fails
    });

app.post('/register', (req, res) => {
    const {username,password} = req.body; 
    usermodel.findOne({username:username})
    .then(user =>{
        if(user){
            if( user.password === password)
               res.json("Success") 
            else
               res.json("The password is incorrect")
        }
        else
        {
            res.json("No Record Found")
        }
    })
    });

app.post('/register', (req, res) => {
    usermodel.create(req.body) 
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
