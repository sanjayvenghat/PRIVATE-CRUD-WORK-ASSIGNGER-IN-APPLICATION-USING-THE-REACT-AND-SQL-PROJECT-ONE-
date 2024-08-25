import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { RxCross1 } from "react-icons/rx";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useContext } from 'react'; 
import { val } from './Todo';
function Notification() { 
  let contextval=useContext(val)
    let {adds:adding,validate:validating,settask,task,edit,closingcontent,settype,setprio,type,prio,submitrequest}=contextval  
   console.log(adding,validating) 
   console.log(type)
  return (  
    
    <div style={{
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }}>  
    {edit===true &&
    <Card style={{
        width: "400px",
        height:"400px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        borderRadius:"10px"
    }}> 
    <div style={{
        display: "flex",
        width:"100%",
        justifyContent:"space-between", 
        alignItems:"center",
        backgroundColor:"rgba(245, 245, 245, 0.671)"
    }}> 
    <h4>Add Task</h4>   
    <div style={{
        height:"40px",
        width:"40px",
        backgroundColor:"red",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }}> 
    <RxCross1 
    style={{
        fontSize:"30px", 
        color:"white"
      }}
      role='button'
      onClick={()=>closingcontent()}/>
    </div>
      
    </div>
      <Card.Body>
        <Card.Title>Task</Card.Title> 
       
        <InputGroup className="mb-3">
    
        <Form.Control
          placeholder="Enter the task"
          aria-label="Enter the task"
          aria-describedby="Enter the task" 
          onChange={(e)=>settask(e.target.value)}
        />
      </InputGroup>  
     <p>{task}</p>
        <div style={{
            display:"flex",
            justifyContent:"space-evenly"
        }}>
        <Button variant="primary" 
        value="public"
        onClick={(e)=>settype(e.target.value)}>Public</Button>
        <Button
         variant="success"
         value="private"
         onClick={(e)=>settype(e.target.value)}>Private</Button>
        </div>   
        <div> 
        <p>{type}</p>
        </div>
        <div style={{
            marginTop:"20px",
            display:"flex",
            justifyContent:"space-around",
            alignItems:"center",
            height:"10vh"
           
        }}>   
        <div style={{
            marginTop:"10px"
        }}>
        <p>less priority</p>
        <input 
        type='checkbox'
        value="lesspriority"
        checked={prio==="lesspriority"?true:false}
        onClick={(e)=>setprio(e.target.value)}></input> 
        <p>{prio}</p>
        </div> 
        <div style={{
           position:"relative",
           bottom:"15px"
        }}>
        <p>more priority</p>
        <input 
        type='checkbox'
        value="morepriority" 
        checked={prio==="morepriority"?true:false}
        onClick={(e)=>setprio(e.target.value)}>
        </input>
        </div>
        </div>
        <div style={{
            marginTop:"30px"
        }}> 
        <div style={{
            marginTop:"10px"
        }}>
        <Button variant="success" onClick={()=>submitrequest()} >Add Task</Button>
        </div> 
        
        </div>
       
      </Card.Body>
    </Card>
      }
    </div>
    
  );
}

export default Notification;