let express=require('express')  
let jwt=require('jsonwebtoken')
let cors=require('cors')  
let sql=require('mysql2')
let app=express() 
app.use(cors())
app.use(express.json()) 
app.use(express.urlencoded({extended:true})) 
let db=sql.createConnection(({
    host:'localhost',
    user:'root',
    password:"",
    database:'crud'
})) 
var val; 
let nameing;
app.post('/register',(req,res)=>{
let{name,pass}=req.body 
let query="INSERT INTO userlogin(name,password) VALUES (?,?)"
db.query(query,[name,pass],(err,data)=>{
    if(err)
    {
        console.log(err)
    }
    else  
   { 
    
      res.send(data)
   }
})
})  
app.post('/login',(req,res)=>{
    let{name,pass}=req.body 
    let query="SELECT * FROM userlogin WHERE name=? AND password=?"
    db.query(query,[name,pass],(err,data)=>{
        if(err) 
        {
            res.json(err) 
        }
        else 
        {   
            
            if(data.length>0)
            { 
                console.log(data)
            let id=data[0].id; 
            console.log(id+"is my id")
            val=id  
            nameing=name
             console.log(nameing+"is my name")
            console.log(name)
            let token=jwt.sign({id},"jwtkey",{expiresIn:10000}) 
            return res.json({login:true,token})
            } 
            else
            {
                return res.json("enter a valid username and password")
            }
           
           
       
        }
    })
})  
app.delete('/deleting/:id',(req,res)=>{ 
    let paramsid= req.params.id 
     let query="DELETE FROM taskgather WHERE uid=?"
     db.query(query,[paramsid],(err,data)=>{
         if(err)
             res.json(err)
         else
         res.json({message:"deleted successfully"})
     })
 
 })
app.post("/adding",(req,res)=>{ 
    let query="INSERT INTO taskgather(id,task,type,important,work) VALUES (?,?,?,?,?)"
    console.log(req.body)
    console.log(val+"validate") 
    db.query(query,[val,req.body.task,req.body.prio,req.body.type,nameing],(err,data)=>{ 
        if(err)
            console.log(err)
        else 
         {
            res.json(data)
         }
    })
}) 

app.patch('/posh/:id',(req,res)=>{ 
    
    console.log(req.params.id+"its ok")
    console.log(req.body) 
    let query="UPDATE taskgather SET task=? WHERE uid=?"
    db.query(query,[req.body.task,req.params.id],(err,data)=>{ 
        if(err)
            res.send("error occoured") 
        else 
        res.send("content updated")
    })
}) 
app.patch('/poshs/:id',(req,res)=>{ 
    let id=req.params.id
    console.log(req.body)
    console.log(id)
    let query="UPDATE sharedtask SET taskinformation=? WHERE mainid=?"
    db.query(query,[req.body.task,id],(err,data)=>{
        if(err)
            res.send("eror occoured")
        res.send("insertion success")
    })
    
}) 
app.post('/sharecontext',(req,res)=>{
  console.log(req.body)
    let query="SELECT * FROM userlogin WHERE name=?"  
    let query2="INSERT INTO sharedtask (name,taskinformation,sharedtask,mainid) VALUES (?,?,?,?)" 
    db.query(query,[req.body.information],(err,data)=>{
        if(err)
        {
            console.log(err)
        } 
        else 
        {     
            
            if(data.length>0)
            {
                   db.query(query2,[req.body.information,req.body.taskdone,"sharedtask",req.body.ids],(err,data)=>{
                    if(err)
                    {
                        res.send("the error is occoured")
                    } 
                    else 
                    { 
                        
                        
                        console.log(nameing+"is my great and great")
                        res.send("data send successfully")
                    }
                   })
            }
        }
    })
    db.query(query,[req.body.information],)
}) 
app.delete("/nextdelss/:id",(req,res)=>{
    console.log(req.params.id+"is the value that needed to be deleted") 
    let query="DELETE FROM sharedtask WHERE id=?" 
    db.query(query,[req.params.id],(err,data)=>{ 
        if(err)
        {
            res.send(err)
        } 
        else 
        {
            res.send("the data send successfully")
        }
    })
})
const verifyjwt=(req,res,next)=>{
    let token=req.headers['access-token'] 
   
 
    if(!token)
    {
       return res.json("we need tokens please provide it next time")
    } 
    else 
    {
        jwt.verify(token,"jwtkey",(err,decoded)=>{
            if(err)
            { 
                console.log(err)
                res.json("Not authenticated")
            } 
            else 
            {
                
                
                req.id=decoded.id 
                console.log(req.body.length+"is the signature")
              
                next()
            }
        })
    }
}

app.get('/checkauth',verifyjwt,(req,res)=>{  
    let query="Select * From taskgather where id=? OR important=?"   
    db.query(query,[req.id,"public"],(err,data)=>{
    if(err)
    {
        res.json(err)
    }
    else 
     {      
          
            let filter=data.map(val=>{
                return {task:val.task,id:val.uid,type:val.important,what:val.type}
               })  
              
              
             res.json(filter)
           
          
     }
    })

}) 
app.get('/checkauthnext', verifyjwt, (req, res) => {
   

    const query = `
        SELECT sharedtask.id, sharedtask.taskinformation,sharedtask.mainid
FROM sharedtask
INNER JOIN userlogin ON userlogin.name = sharedtask.name
WHERE sharedtask.name = ?`;

    db.query(query, [nameing], (err, data) => {
        if (err) {
            console.error('Error:', err);
            res.status(500).send("An error occurred while fetching data");
        } else {
            console.log(data+"is my data"); 
            res.json(data); 
        }
    });
});
app.listen(8000,()=>{
    console.log("server is listining")
})