import NavBar  from './header';
import React, { useEffect, useState } from 'react';
import {Row, Col, Table} from 'reactstrap';
import axios from 'axios';
import Footer from './footer';
import Logo from './logo.jpg'


function Viewmarks(){

    const[data, setdata] = useState([]);

    useEffect(()=>{
        getmarks();
    },[]);

    const getmarks=()=>{
        
        axios.get("http://localhost:3000/teacher/marks").then((respose)=>{

            const data = respose.data;
            setdata(data)
            console.log(data)

        }).catch(()=>{
            console.log("unable to recieve data")
        });
    }

    return(
        <div>
        <NavBar/>
        <div className="container-fluid">
        <Row>
            <Col sm='12'>
                <Col sm='12 offset-4'>
                <Row>
            <Col sm='4 mt-5' style={{textAlign:"end"}}>
                <h3>View Marks according to Students</h3>
            </Col>
            <Col sm="4 mt-3" style={{textAlign:"end"}}>
            <img width="100px" src={Logo}/>
            </Col>
            </Row>
                </Col>
                <hr/>
                <Table striped className="container-fluid mt-5">
                    <thead style={{background:"black", color:"white"}}>
                        <tr>
                        <th>&nbsp;</th>
                        <th>Student Name</th>
                        <th>Student Rollno</th>
                        <th>Item</th>
                        <th>&nbsp;</th>

                        <th>Student Marks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(items=>{
                            return(
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>
                                        {items.student.name}
                                    </td>
                                    <td>
                                        {items.student.rollno}
                                    </td>
                                    <td>
                                        {items.name}
                                    </td>
                                    <td>&nbsp;</td>
                                    <td>
                                        {items.marks}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Col>
        </Row>

        </div>
<Footer/>
        </div>
    )
}

export default Viewmarks