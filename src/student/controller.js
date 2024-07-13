const pool=require("../../db")
const query=require("./queries");
//app.use(express.urlencoded({extended:true}));
const  getStudents=(req,res)=>{
    console.log("sayed");
    pool.query(query.getStudents,(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows)
    })
    }
const getStudentById= (req,res)=>{
    const id=parseInt(req.params.id);
    console.log(id)

    pool.query(query.getStudentById,[id],(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows)
    })

}


const addStudent=(req,res)=>{
    const {name , email, age, dob }=req.body;
    //check if email is exists
    console.log("add saayed")
    pool.query(query.checkEmailExists,[email],(error,results)=>{
        if (results.rows.length) {
            res.send('Email is already exists .');
            
        }
        //add students for db
        pool.query(query.addStudent,[name , email, age, dob],(error,results)=>{
            console.log("aaa7a")
            if (error) throw error 
            res.status(201).send("Student Created Succesfully !")
    

    })
    })

}




    
const deleteStudentById = (req,res)=>{

    const id=parseInt(req.params.id);
    console.log(id)

    
    pool.query(query.getStudentById,[id],(error,results)=>{
        const noStudentfound=!results.rows.length;
        if (noStudentfound) {
            res.send('STUDENTS ISNOT FOUNT  .');
        }
        {
            pool.query(query.deleteStudentById,[id],(error,results)=>{
                console.log("aaa7a")
                if (error) throw error 
                res.status(201).send("Student DELETE  Succesfully !")
        
    
        })


            
        }

    })

    
}


const updateStudent=(req,res)=>{

    const id=parseInt(req.params.id);
   // console.log(id)
    const {name}=req.body
    
    pool.query(query.getStudentById,[id], (error,results)=>{
        const noStudentfound=!results.rows.length;
        if (noStudentfound)
    {
            res.send('STUDENTS ISNOT FOUNT  .');
    }
    
    pool.query(query.udateStudentById,[name,id],(error,results)=>{
        
        if (error) throw error 
        res.status(200).send("Student UPDATE Succesfully !")


})

    }
)
}

module.exports={getStudents,  getStudentById,addStudent, deleteStudentById, updateStudent}; 