import Card from 'react-bootstrap/Card';
import { val } from './Todo'; 
import { useContext } from 'react';
import { RxCross2 } from "react-icons/rx";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Edit() { 
    let context=useContext(val)
    
    let{showpatch,editing,edic,setshowpatch,setedits}=context 
    console.log(context)
  return (
    <div style={{
      display:"flex",
      width:"100%",
      justifyContent:"center",
    }}>
    
        {showpatch===true && <Card
          bg="info"

          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header style={{
            color:"white" ,
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center"

          }}> <h1 style={{
            marginTop:"5px"
          }}>Edit</h1> 
          <RxCross2 style={{
            color:"red" ,
            fontSize:"25px"
          }} 
          onClick={()=>setshowpatch(false)}/>
          </Card.Header>
          <Card.Body>
            <Card.Title style={{
                color:"white"
            }}>Task</Card.Title>
            <h3 style={{
              fontSize:"20px"
            }}>{edic[0]}</h3> 
         
        <Form.Control
          placeholder='enter the task'
          aria-label="Username"
          aria-describedby="basic-addon1" 
          onChange={(e)=>setedits(e.target.value)}
        />
      
           
            <Button variant="primary"
            onClick={()=>editing()} style={{
              marginTop:"10px"
            }}>Edit</Button>
          </Card.Body>
        </Card>}
     
    </div>
  );
}

export default Edit;