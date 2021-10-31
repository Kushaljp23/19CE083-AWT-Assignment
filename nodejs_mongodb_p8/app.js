const express =require('express');
const {connection,mongoose}=require('./Database/DBconfig.js');//exported from seperate file.
const tblStudentInfo=require('./Model/Student.js');
const tblFacultyInfo=require('./Model/Faculty.js');
require('dotenv').config();

const app=express();
const PORT=process.env.PORT || 3000;

//Home Route
app.get("/",(req,res)=>{
    res.send("<h1>Hello There! Kushal Panchal Here </h1>")
})

// Route to create db.
app.get("/db-create", (req,res)=>{
   

    connection
    .then(()=>console.log("Mongodb Connected and Created database dbUniversity"))
    .catch(err=>console.error("Could not connect to Mongodb.",err));
    res.send("<h1>Database Using Route.</h1>");

    
});


//Route to create Table.
app.get("/db-create-table", (req,res)=>{


    try {
        var result=tblStudentInfo
        console.log("StudentInfo Table Created",result)        
    } catch (error) {
        console.error("Could not create table StudentInfo",err)
    }

    try {
        var result=tblFacultyInfo
        console.log("FacultyInfo Table Created",result)        
    } catch (error) {
        console.error("Could not create table FacultyInfo",err)
    }

    
    res.send("<h1>Route to create table </h1>")
});

//Route to insert Data.
app.get("/db-insert",(req,res)=>{

    tblStudentInfo.insertMany([{
        studentId:'83',
        fname:'Kushal',
        lname:'Panchal',
        mobileno:'1234567890'
    },{
        studentId:'84',
        fname:'Ayushi',
        lname:'Patel',
        mobileno:'1234567890'
    },{
        studentId:'85',
        fname:'Megh',
        lname:'Patel',
        mobileno:'1234567890'
    },{
        studentId:'86',
        fname:'Rudra',
        lname:'Dev',
        mobileno:'1234567890'
    },{
        studentId:'87',
        fname:'Bhautik',
        lname:'Sudani',
        mobileno:'1234567890'
    }],(err,data)=>{
        if(err!=null){
            return console.error("Error Occured",err);
        }
        else
        console.log("Data inserted\n",JSON.stringify(data));
    });

    tblFacultyInfo.insertMany([{
        facultyId:'80',
        fname:'Mrugendra',
        lname:'Rahevar',
        mobileno:'1234567890'
    },{
        studentId:'81',
        fname:'Martin',
        lname:'Parmar',
        mobileno:'1234567890'
    }
    ],(err,data)=>{
        if(err!=null){
            return console.error("Error Occured",err);
        }
        else
        console.log("Data inserted\n",JSON.stringify(data));
    })

    res.send("<h1>Route to insert Data. </h1>")
});

//Route to update Data.
app.get("/db-update",(req,res)=>{
    
    tblStudentInfo.updateMany({studentId:101},{$set:{fname:'Ranjitsinh'}},(err,data)=>{
        if(!err){
            console.log("Updated Data in StudentInfo:\n",data);
        }
        else
        {
            throw err;
        }
    })

    tblFacultyInfo.updateMany({studentId:102},{$set:{fname:'Martin'}},(err,data)=>{
        if(!err){
            console.log("Updated Data in FacultyInfo:\n",data);
        }
        else
        {
            throw err;
        }
    })

    res.send("<h1>Route to update Data. </h1>")
})

//Route to display data
app.get("/db-display", (req,res)=>{
    tblStudentInfo.find({},(err,docs)=>{
        if(!err){
            console.log("Fetched Data in StudentInfo:\n",docs);
        }
        else{
            throw err;
        }
    })

    tblFacultyInfo.find({},(err,docs)=>{
        if(!err){
            console.log("Fetched Data in FacultyInfo:\n",docs);
        }
        else{
            throw err;
        }
    })

    res.send("<h1>Route to display Data. </h1>")
});

//Route to Delete Data
app.get("/db-delete",(req,res)=>{
    
    tblStudentInfo.deleteOne({studentId:"105"},(err,data)=>{
        if(!err){
            console.log("Deleted Data:\n",data);
        }
        else{
            throw err;
        }
    })

    tblFacultyInfo.deleteOne({studentId:"101"},(err,data)=>{
        if(!err){
            console.log("Deleted Data:\n",data);
        }
        else{
            throw err;
        }
    })

    res.send("<h1>Route to Delete Data </h1>")
})

app.listen(PORT,()=>{
    console.log(`Server is running on port number ${PORT}`)
})