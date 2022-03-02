const express = require('express');
require("./db/conn");
const Student = require('./models/Student');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());


//POST Method for Creating and Storing a Student data

app.post("/students",(req, res) => {
    console.log(req.body);
    const user = new Student(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((err) => {
        res.status(400).send(err);
    });
})

//GET Method for Extracting the all Students Data from our Database

app.get("/students",async(req, res) => {
    try {
        const studentsData = await Student.find();
        res.send(studentsData);
    }
    catch(err) {
        res.send(e);
    }
})

//delete Student Data From Collection Using Unique ID

app.delete("/students/:id", async(req, res) => {
    try{
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if(!req.params.id)
        {
            return res.status(400).send();
        }
        res.send(deleteStudent);
    }
    catch(e) {
        res.status(500).send(e);
    }
})

//Handling PUT requests For update Data

app.put("/students/:id", async(req, res)=>{
    try {
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {new : true});
        res.send(updateStudent);
    }
    catch(e){
        res.status(400).send(e);
    }
})


app.listen(port, ()=>{
    console.log(`Connection established at ${port}`);
})