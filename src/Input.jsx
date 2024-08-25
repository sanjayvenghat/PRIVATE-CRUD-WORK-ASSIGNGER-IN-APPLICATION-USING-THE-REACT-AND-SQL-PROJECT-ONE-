import { useContext } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

import { val } from "./Todo";
function Input() {  
  let contextval=useContext(val)
   let{addingcontent}=contextval
  return (
    <div>
     <div style={{
      height:"10vh",
      width:"100%",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
      
     }}> 
     <IoAddCircleOutline 
     onClick={()=>addingcontent()} style={{
      fontSize:"50px",
      color:"green" 
     }} 
     
     /> 
    
     
     </div>
   </div>
  );
}

export default Input;