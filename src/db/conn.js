const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Student_Data",{

}).then(()=>{
    console.log("Connection is successful");
}).catch((err)=>{
    console.log("No Connection");
})