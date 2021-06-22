import React, { useEffect, useState } from 'react';
import NavBar  from './header';
import {Row,Col} from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import Footer from './footer';
import Logo from '../logo.jpg'


function Addmarks(){

    const [students, setstudents] = useState([]);
    const [student , setstudent] = useState("");
    const [itemname, setitemname] = useState("");
    const [marks, setmarks] = useState("");

    useEffect(()=>{
        getstudents();
    },[])

    const getstudents=()=>{
        
        axios.get("http://localhost:3000/admin/students").then((response)=>{
            const data = response.data;
            setstudents(data);
            console.log(data)
        }).catch(()=>{
            console.log('unable to load data')
        });
    }

    const submission=(e)=>{

        e.preventDefault();
        
        let data={
            name:itemname,
            marks:marks,
            student:student
          };

        axios.post("http://localhost:3000/teacher/createmarks", data).then(response=>{
            alert("Created");
        });

        setstudent("");
        setmarks("");
        setitemname("");

    }

    return(
        <div>
        <NavBar/>
        
        <Row>
            <Col sm='8 mt-5' style={{textAlign:"end"}}>
                <h3 className="offset-5">Create Marks according to Students</h3>
            </Col>
            <Col sm="4 mt-3" style={{textAlign:"end"}}>
            <img width="100px" src={Logo}/>
            </Col>
        </Row>
        <hr></hr>
        <Col md="6" className="mx-auto">
        <Form className="mt-5"> 
            <FormGroup>
                <Label for="students" className="my-3"><b>Select Student from list:</b></Label>
                <Input type="select" name="students" id="students" onChange={(e)=>{setstudent(e.target.value);}}>
                {students.map(student=>{
                    return(
                        <option value={student._id}>{student.rollno}{'    '}{student.name}</option>
                    )
                })}
                </Input>
            </FormGroup>
            <br></br>
            <FormGroup>
                <Label for="itemname" className="mb-3"><b>Item Name:</b></Label>
                <Input type="text" name="itemname" id="itemname" placeholder="Enter Quiz or Assignment Name" value = {itemname} onChange={(e)=>{setitemname(e.target.value);}}/>
            </FormGroup>
            <br></br>
            <FormGroup>
                <Label for="marks" className="mb-3"><b>Marks:</b></Label>
                <Input type="number" name="marks" id="marks" placeholder="Enter Marks" value={marks} onChange={(e)=>{setmarks(e.target.value); }}/>
            </FormGroup>
            <br></br>
            <Button color="primary" className="offset-5"  onClick={(e)=>{submission(e)}}>Submit</Button>
    </Form>
    </Col>
    <Footer/>
        </div>
    )
}
export default Addmarks