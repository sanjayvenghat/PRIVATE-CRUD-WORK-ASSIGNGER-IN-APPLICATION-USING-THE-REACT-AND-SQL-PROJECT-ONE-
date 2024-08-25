import Input from "./Input" 
import Mapertwo from "./Mapertwo"
import Notification from "./Notification"
import { createContext } from "react"  
import { useEffect } from "react"
import axios from "axios" 
import Share from "./Share" 
import Maper from './Maper'
import Edit from "./Edit"
export let val=createContext() 
const Todo = ({validate,adds,settask,task,addingcontent,add,edit,closingcontent,settype,setprio,data,setdata,type,prio,submitrequest,deling,patching,showpatch,setshowpatch,editing,chooser,edic,setedits,setcontain,contain,share,show,setshow,originalshare,senderinfo,setsenderinfo,nextdata,setnextdata,sharedelete}) => { 
  
   useEffect(()=>{
function main()
{
  axios.get("http://localhost:8000/checkauth",{
    headers:{
      'access-token':localStorage.getItem("token")
    }
  })
  .then(val=>{
    console.log(val.data)
    setdata(val.data)
})
  .catch(val=>console.log(val)) 
  axios.get("http://localhost:8000/checkauthnext",{
    headers:{
      'access-token':localStorage.getItem("token")
    }
  }).
  then(val=>setnextdata(val.data)) 
  .catch(val=>console.log(val))

} 
main()
   },[])  
   console.log(nextdata)
   console.log(data)
  return (
    <div>   
    <val.Provider value={{adds,validate,settask,task,addingcontent,add,edit,closingcontent,settype,setprio,data,setdata,type,prio,submitrequest,deling,patching,showpatch,setshowpatch,editing,chooser,edic,setedits,setcontain,contain,setdata,share,show,setshow,originalshare,setsenderinfo,nextdata,setnextdata,sharedelete}}> 
    <Input/>   
    <Notification data={data}/>  
    <Share/>
    <Edit/>
    <Maper/> 
    <Mapertwo/>

  
    </val.Provider>
    
    </div>
  )
}

export default Todo