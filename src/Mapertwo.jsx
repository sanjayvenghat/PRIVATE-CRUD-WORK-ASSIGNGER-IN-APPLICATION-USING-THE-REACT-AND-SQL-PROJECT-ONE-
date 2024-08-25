import { FaRegShareSquare } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react'
import { val } from './Todo'
const Mapertwo = () => {  
    let contenting=useContext(val)
    console.log(contenting) 
    let {nextdata,share,data,sharedelete}=contenting 
    console.log(nextdata)

  return (
    <div> 
    {
     nextdata.map((val,id)=>(

     
        <Card> 
          <Card.Body>
            <Card.Title>Task {data.length+id+1}</Card.Title>
            <Card.Text style={{
              display:"flex",
              width:"100%",
              height:"5vh",
              justifyContent:"space-between",
              alignItems:"center"
            }}>
            <p >{val.taskinformation}</p> 
            <p style={{
              color:val.type==="public"?"green":"red"
            }}>{val.type}</p>
            <p style={{
              color:val.type==="public"?"red":"green"
            }}>{val.what}</p> 
            <p style={{
              color:"green"
            }}>Shared Content</p>
            </Card.Text>  
            <div style={
              {
                marginTop:"10px", 
                fontSize:"20px",
                color:"green",
              }
            }> 
            <FaRegShareSquare 
             onClick={()=>share([val.taskinformation,val.mainid])}
            role="button"/> 
            <p>{val.sharedtask}</p>
            </div>
            <div style={{
                marginTop:"40px"
            }}>
            <Button 
            variant="danger"
            onClick={()=>sharedelete(val.id)}>Delete</Button>
            
            </div>
          </Card.Body>
        
        </Card>))
    }
    
               
    </div>
  )
}

export default Mapertwo