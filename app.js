const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");

const uri ="mongodb+srv://Aakash:Astomartin46@cluster0.cc28fh3.mongodb.net/Shopping";
app.use(bodyParser.urlencoded({ extended: true }));

//schema
const orderschema={
    nameProduct : String,
    userName: String,
    unum : Number,
    select : String,
    quantity : Number,
    userAddress : String
}


const contactschema ={
    fname : String,
    lname : String,
    mail : String,
    phone : Number,
    msg : String
}

const Contact = mongoose.model("Contact",contactschema);
const Order = mongoose.model("Order",orderschema);

//basic
app.listen(3000, () =>{
    console.log("Server is running at 8000");
});


//connecting
async function connect(){
    try{
        await mongoose.connect(uri,{useUnifiedTopology: true});
        console.log("Connected to MongoDB");
    }
    catch(error){
        console.error(error);
    }
}

connect();

//linking html
app.use(express.static('public'));

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname + "/public/test.html"))
});
//app post

app.post("/",(req,res)=>{
    let newOrder = new Order({
        nameProduct : req.body.product,
        userName : req.body.uname,
        unum : req.body.unum,
        select : req.body.select,
        quantity : req.body.quantity,
        userAddress : req.body.uaddress
    });
    newOrder.save();
    res.sendFile(path.join(__dirname + "/public/test.html"));
    let newContact = new Contact({
        fname : req.body.fname,
        lname : req.body.lname,
        mail : req.body.mail,
        phone : req.body.phoneNum,
        msg : req.body.msg
    });
    newContact.save();
    res.sendFile(path.join(__dirname + "/public/test.html"));
});


