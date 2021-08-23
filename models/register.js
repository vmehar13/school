const mongoose = require('mongoose');

var registerSchema = mongoose.Schema({
    profilePic: {
        type: String  
    },
    field1 : {
        type: String,
        trim: true
    },
    tc: {
        type: String,
        trim: true
    },
    studentName: {
        type: String,
        trim: true
    },
    dob: {
        type: String
    },
    weather: {
        type: String
    },
    applicatIsMy: {
        type: String
    },
    fatherName: {
        type: String,
        trim: true
    },
    fatherQualification: {
        type: String,
        trim: true,
    },
    motherName: {
        type: String,
        trim: true
    },
    motherQualification: {
        type: String,
        trim: true,
    },
    guardianName: {
        type: String,
        trim: true
    },
    guardianQualification: {
        type: String,
        trim: true,
    },
    transportation: {
        type: String,
        trim: true
    },
    occupationOfParets: {
        type: String,
        trim: true
    },
    motherTounge: {
        type: String,
        trim: true,
        maxlength: 32
    },
    religion: {
        type: String,
        trim: true
    },
    town: {
        type: String,
        trim: true
    },
    post: {
        type: String,
        trim: true
    },
    district: {
        type: String,
        trim: true
    },
    state: {
        type: String,
        trim: true
    },
    localAddress: {
        type: String,
        trim: true,
    },
    phone: {
        type: String,
        maxlength: 10,
        trim: true
    },
    gender: {
        type: String,
        trim: true
    },
    nationality:{
        type: String,
        trim: true
    },
    field17: {
        type: String,
        trim: true
    },
    field17Name: {
        type: String,
        trim: true
    },
    field17Class: {
        type: String,
        trim: true
    },
    field17Rollno: {
        type: String,
        trim: true
    },
    aadhar: {
        type: String,
        trim: true
    },
    aadharImg: {
        type: String
    },
    lastSchool: {
        type: String,
        trim: true
    }


})

module.exports = mongoose.model("Register", registerSchema);