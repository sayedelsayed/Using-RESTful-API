require('dotenv').config();
const express=require('express');
const bodyParser = require("body-parser");
const app=express();
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)


port=process.env.PORT||2000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const studentRouter=require('./src/student/routes')
app.use("/api/v1/students",studentRouter);

app.listen(port,()=>console.log(port))



const getStudentById= (req,res)=>{
    const id = parseInt(req.params.id)
    pool.query('SELECT * FROM students WHERE id = $1', [id], (error, results) => {
       if(error) throw error;
        res.status(200).json(results.rows)
    })

}