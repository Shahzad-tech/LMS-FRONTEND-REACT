import NavBar  from './header';
import React, { useEffect, useState } from 'react';
import {Row,Form,Label,Input, FormGroup, Button, Col} from 'reactstrap';
import axios from 'axios';
import Footer from './footer';
import Logo from './logo.jpg'


function Deletemarks(){

    const [markstudents, setmarkstudents] = useState([]);
    const [selectedstudent, setselectedstudent] = useState("");
 
    useEffect(()=>{
        getstudent()
    },[])

    const getstudent=()=>{
        axios.get("http://localhost:3000/teacher/marks").then((response)=>{
            const data = response.data;
            setmarkstudents(data)
            console.log("data recieved")
        }).catch(()=>{
            console.log("unable to recieve data")
        })

    }

    const submission=(e)=>{
        
        e.preventDefault();

        axios.delete("http://localhost:3000/teacher/deletemarks/"+selectedstudent).then(()=>{
            window.alert("record deleted")
        }).catch(()=>{
            console.log("record can't be deleted")
        })
       
        
        setselectedstudent("");
        getstudent()
     
    }
    


    return(
        <div>
        <NavBar/>
        <Row>
            <Col sm='7 mt-5' style={{textAlign:"end"}}>
                <h3>Delete Marks Here</h3>
            </Col>
            <Col sm="5 mt-3" style={{textAlign:"end"}}>
            <img width="100px" src={Logo}/>
            </Col>
        </Row>
        {/* <h3 className="mt-5 offset-5">Delete Marks Here</h3> */}
        <hr/>
        <Col md="6" className="mx-auto">
        <Form className="mt-5"> 
            <FormGroup className="my-3">
                <Label for="students" className="my-3"><b>Select Student from list:</b></Label>
                <Input type="select" name="students" id="students" onChange={(e)=>{setselectedstudent(e.target.value);}}>
                {markstudents.map(student=>{
                      {console.log(selectedstudent)}
                    return(
                        <option value={student._id}>{student.student.rollno}{'    '}{student.name}</option>
                    )
                })}
                </Input>
            </FormGroup>
            <br/>
            <br></br>
            <Button className="mt-5" color="danger" className="offset-5"  onClick={(e)=>{submission(e)}}>Delete Record</Button>
                </Form>
                </Col>
                <Footer/>
    
        </div>
    )
}

export default Deletemarks