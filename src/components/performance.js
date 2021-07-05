import React, { useEffect, useState } from 'react';
import NavBar  from './header';
import {Row,Col} from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import Footer from './footer';
import Logo from '../logo.jpg'


function viewperformance(){

    const [grades, setgrades] = useState([]);

    useEffect(()=>{
        getperformance();
    },[])

    const getstudents=()=>{
        
        axios.get("http://localhost:3000/perform/reviews").then((response)=>{
            const data = response.data;
            setstudents(data);
            console.log(data)
        }).catch(()=>{
            console.log('unable to load data')
        });
    }


    return(
        <div>
        <NavBar/>
        
    
        <hr></hr>
        
                <Label for="students" className="my-3"><b>Select Student from list:</b></Label>
                <p>
                {students.map(student=>{
                    return(
                        <option value={grades.assignedbywhom}>{grades.}{'    '}{grades.grading}</option>
                    )
                })}
                </p>
         

        </div>
    )
}
export default Addmarks