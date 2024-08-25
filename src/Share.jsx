import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { RxCross2 } from "react-icons/rx";
import { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { val } from './Todo';
function Share() { 
    let showingval=useContext(val)
    let{show,setshow,edic,originalshare,setsenderinfo}=showingval 
    console.log(edic)
  return (
    <div>
    { 

    show && <Card className="text-center">
      <Card.Header style={{
        display:"flex",
        flexDirection:"flex-start" ,
        justifyContent:"space-between"
      }}> 
      <p style={{
        color:"green"
      }}>Share Data</p> 
    <RxCross2 
    role='button'
    style={{
        fontSize: '1.5rem',
        color:"red"
    }}
    onClick={()=>setshow(false)}
    />
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <p>With supporting share which helps in sharing the task together</p>
          <p><span><p>ShareableContent</p></span><h3 style={{
            color:"orange"
          }}>{edic}</h3></p>
          <Form.Control
          placeholder="Enter the username to send the data"
          onChange={(e)=>setsenderinfo(e.target.value)}
        />
          
        </Card.Text>
        <Button variant="success"
        onClick={()=>originalshare()}>Share</Button>
      </Card.Body>
   
    </Card>
}
    </div>
  );
}

export default Share;