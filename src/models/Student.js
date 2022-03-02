const mongoose = require('mongoose');
const validator = require('validator');

const StudentSchema = new mongoose.Schema({
    rollNumber :{
        type: 'number',
       required: true,
        length:3,
        unique: true
    },
    Fname :{
        type : 'string',
        required : true,
        minLength : 3
    },
    dob :{
        type: 'string',
        required : true
    },
    email :{
        type: 'string',
        unique : [true,"Email Already Registered"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email");
            }
        }
    },
    phone :{
        type: 'number',
        required: true,
        unique: true
    },
    address :{
        type: 'string',
        required: true
    }
})

const Student = new mongoose.model('Student', StudentSchema);

module.exports = Student;