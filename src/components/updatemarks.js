import NavBar  from './header';
import React, { useEffect, useState } from 'react';
import {Row,Form,Label,Input, FormGroup, Button, Col} from 'reactstrap';
import axios from 'axios';
import Footer from './footer';
import Logo from '../logo.jpg'

function Updatemarks(){
    
    const [markstudents, setmarkstudents] = useState([]);
    const [selectedstudent, setselectedstudent] = useState("");
    const [updatedmarks, setupdatedmarks] = useState("");

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

        axios.put("http://localhost:3000/teacher/marks/"+selectedstudent+"/number/"+updatedmarks).then(()=>{
            window.alert("updated")
        }).catch(()=>{
            console.log("unable to update")
        })
        
        setselectedstudent("");
        setupdatedmarks("");

    }
    
    return(
        <div>
        <NavBar/>
        <Row>
            <Col sm='7 mt-5' style={{textAlign:"end"}}>
                <h3>Update Marks Here</h3>
            </Col>
            <Col sm="5 mt-3" style={{textAlign:"end"}}>
            <img width="100px" src={Logo}/>
            </Col>
        </Row>
        {/* <h3 className="mt-5 offset-5">Update Marks Here</h3> */}
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
            <FormGroup>
                <Label for="marks" className="mb-3"><b>Enter Updated Marks:</b></Label>
                <Input type="number" name="marks" id="marks" placeholder="Enter Updated Marks" value={updatedmarks} onChange={(e)=>{setupdatedmarks(e.target.value); }}/>
            </FormGroup>
            <br></br>
            <Button className="mt-5" color="primary" className="offset-5"  onClick={(e)=>{submission(e)}}>Submit</Button>
                </Form>
                </Col>
        <Footer/>
        </div>
    )
}

export default Updatemarks