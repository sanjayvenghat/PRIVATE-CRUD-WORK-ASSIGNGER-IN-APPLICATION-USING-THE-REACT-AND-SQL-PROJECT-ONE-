import './App.css'
import Register from './Register'; 
import { Routes } from 'react-router-dom'; 
import { Route } from 'react-router-dom'; 
import './App.css'  
import Todo from './Todo';
import Login from './Login'; 
import { useState } from 'react'; 
import axios from 'axios' 
import { useNavigate } from 'react-router-dom';  
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {  
  let[regname,setregname]=useState('')
  let[regpass,setregpass]=useState('')
  let[user,setuser]=useState('')
  let[pass,setpass]=useState('')  
  let[contain,setcontain]=useState("all")
  let[data,setdata]=useState([])
  let[task,settask]=useState('') 
  let[add,setadds]=useState(false)
  let[edit,setedit]=useState(false)  
  let[type,settype]=useState('public')
  let[prio,setprio]=useState('lesspriority') 
  let[showpatch,setshowpatch]=useState(false) 
  let[edic,setedic]=useState('')  
  let[show,setshow]=useState(false)
  let[edits,setedits]=useState('') 
  let[senderinfo,setsenderinfo]=useState('')
  let[nextdata,setnextdata]=useState([])
  let navigate=useNavigate() 
  let navigate2=useNavigate() 


  function login()
  {
    axios.post("http://localhost:8000/register",{
      name:user,
      pass:pass
    })
    .then(val=>{   
      console.log(val)
         navigate2('/')
    })
    .catch(val=>console.log(val))
  } 
 function register()
 {
    axios.post("http://localhost:8000/login",{
      name:regname,
      pass:regpass
    })
    .then(val=>{ 
      
        if(val.data.login)
        {
        console.log(val.data.Login===true) 
        localStorage.setItem("token",val.data.token)
    
      navigate("/todo")
        }  
        else 
        {
          alert("invalid username or password")
        }
      
      
    })
    .catch(val=>alert(val)) 
 }  
 function adds() 
 {
axios.get("http://localhost:8000/checkauth")
.then(val=>console.log(val))
.catch(val=>console.log(val))
 } 
 function addingcontent()
 { 
   
  setedit(true) 
  setadds(false)
 } 
 function closingcontent()
 {
  setedit(false)
 } 
function submitrequest()
{ 
  let tasking={
    task:task,
    prio:prio,
    type:type
  }  
  let adding;
if(data.length===1)
{
  let count=0;
  count++
  if(count===1)
  {
    window.location.reload()
  }
} 
let lengthcheck=data.length?[...data,{...tasking,id:data[data.length-1].id+1}]:[{...tasking,id:adding}]
setdata(lengthcheck) 
axios.post("http://localhost:8000/adding",tasking)
.then(val=>{
  console.log(val) 
  alert(val.data) 
  setedit(false)
})
.catch(val=>{
  alert(val.message)
})
}
function deling(vals)
{  

  let id=vals 

  let filter=data.filter(val=>{
    return val.id!==vals
  }) 
  
  setdata(filter) 
  alert("THE ITEM DELETED SUCCESS FULLY")
axios.delete("http://localhost:8000/deleting/"+id)
.then(val=>{
  console.log(val)
})
.catch(val=>console.log(val))

}  
function patching(vals)
{
   
  let id=vals;
  axios.patch("http://localhost:8000/patching/"+id) 
  .then(val=>console.log(val))
  .catch(val=>console.log(val)) 
  alert(vals)
} 
function editing(vals)
{ 
  alert(edic[1]+"ois the patch")
setshowpatch(false) 
let patch={
  task:edits
}  
let id=edic[1] 
let finalfilter=data.map(val=>{
  return val.id===id?{...val,task:edits}:val
}) 
setdata(finalfilter)
axios.patch("http://localhost:8000/posh/"+id,patch)
.then(val=>console.log(val))
.catch(val=>console.log(val))
axios.patch("http://localhost:8000/poshs/"+id,patch)
.then(val=>console.log(val))
.catch(val=>console.log("eror has been occoured"))
alert(edits)

} 
function chooser(vals)
{

  setshowpatch(true) 
  setedic(vals) 
 
  
} 
function share(vals)
{
setshow(true)  
console.log(vals+"is the perfect share")
setedic(vals) 
} 
let originalshare=()=>{

setshow(false)   
let shareblecontent={
  information:senderinfo,
  taskdone:edic[0],
  ids:edic[1]
}
axios.post("http://localhost:8000/sharecontext",shareblecontent)
.then(val=>alert("its successfully"))
.catch(val=>alert("some error has been occoured unexpected"))
} 
function sharedelete(vals)
{
let filter2=nextdata.filter(val=>{
  return val.id!==vals
}) 
setnextdata(filter2) 
axios.delete("http://localhost:8000/nextdelss/"+vals)
.then(val=>console.log(val))
.catch(val=>console.log(val))
}
  return (
    <div>  
<Routes> 
<Route path="/" element={<Register 
  setregname={setregname}
  setregpass={setregpass}
  register={register} 
  />}/>
<Route path="/login" element={<Login 
   setuser={setuser}
   setpass={setpass}
   login={login}/>}/> 
   <Route 
   path='/todo'
   element={<Todo 
    
    adds={adds}
    settask={settask}
    task={task} 
    addingcontent={addingcontent} 
    add={add}
    edit={edit}
    closingcontent={closingcontent}
    settype={settype}
    setprio={setprio}
    type={type} 
    data={data}
    setdata={setdata}
    prio={prio} 
   submitrequest={submitrequest}
   deling={deling}
   patching={patching} 
   showpatch={showpatch}
   setshowpatch={setshowpatch}
   editing={editing}
   chooser={chooser}
 edic={edic}
 setedits={setedits}
 setcontain={setcontain}
 contain={contain}
 share={share}
 show={show}
 setshow={setshow}
 originalshare={originalshare}
 senderinfo={senderinfo}
 setsenderinfo={setsenderinfo} 
 nextdata={nextdata}
 setnextdata={setnextdata}
 sharedelete={sharedelete}
    />
 }
   />
</Routes>
    </div>
  )
}

export default App