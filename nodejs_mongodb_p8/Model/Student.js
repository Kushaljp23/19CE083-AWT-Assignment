const mongoose=require('mongoose');//exported from seperate file.


const StudentSchema=new mongoose.Schema({
    studentId:{
        type:String,
        require:true,
        unique:true
    },
    fname:{
        type:String,
        require:true
    },
    lname:{
        type:String,
        require:true
    },
    mobileno:{
        type:String,
        require:true,
        maxlength:10
    }
});

const tblStudentInfo=mongoose.model('tblStudentInfo',StudentSchema);

// async function insertStudent(studentId_,fname_,lname_,mobileno_){
//     const StudentObject=new tblStudentInfo({
//         studentId:studentId_,
//         fname:fname_,
//         lname:lname_,
//         mobileno:mobileno_
//     });

//     result= await StudentObject.save();
//     return result;
// }

module.exports=tblStudentInfo;
