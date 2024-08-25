import { FaRegShareSquare } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { val } from './Todo';
const Maper = () => {  
    const {data,deling,chooser,share} = useContext(val)

   console.log(data)
  return (
    <div style={{
        marginTop:"30px"
    }}> 
{ 
    data.length? data.map((val,index)=>(
    <Card> 
      <Card.Body>
        <Card.Title>Task {index+1}</Card.Title>
        <Card.Text style={{
          display:"flex",
          width:"100%",
          height:"5vh",
          justifyContent:"space-between",
          alignItems:"center"
        }}>
        <p >{val.task}</p> 
        <p style={{
          color:val.type==="public"?"green":"red"
        }}>{val.type}</p>
        <p style={{
          color:val.type==="public"?"red":"green"
        }}>{val.what}</p>
        </Card.Text>  
        <div style={
          {
            marginTop:"10px", 
            fontSize:"20px",
            color:"green",
          }
        }> 
        <FaRegShareSquare 
        onClick={()=>share([val.task,val.id])}
        role="button"/>
        </div>
        <div style={{
            marginTop:"40px"
        }}>
        <Button 
        variant="danger"
        onClick={()=>deling(val.id)}>Delete</Button>
        <Button 
        variant="warning"
         style={{
            marginLeft:"20px"
        }}
        onClick={()=>chooser([val.task,val.id])}>update</Button>
        </div>
      </Card.Body>
    
    </Card>)):<h2 style={{
      textAlign:"center",
      color:"yellow"
    }} 
    >Please enter the data to make changes</h2>
}
    </div>
  ) 
}

export default Maper