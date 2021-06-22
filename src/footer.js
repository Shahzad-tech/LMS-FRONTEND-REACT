import {Row, Col} from 'reactstrap';

function Footer(){
    return(
    <footer class="footer bg-primary" style={{color:"silver",position:"fixed",
    bottom:"0", width:"100%"}}>
    <div class="container">
    <Row sm="12" class="d-flex justify-content-between"> 
    <Col sm="3" className="mt-3">
            <h5>Links</h5>
            <ul class="list-unstyled">
                <li><a routerLink="/">Home</a></li>
                <li><a routerLink="concepts">Students</a></li>
                <li><a routerLink="addclass">Teachers</a></li>
            </ul>
    </Col>
    <Col sm="3" className="mt-3 offset-2">
    <h5>Our Address</h5>
    <address>
    COMSATS University<br/>
              Park Road<br/>
              Islamabad<br/>
              Phone: -----------<br/>
              Fax: --------------<br/>
    </address>
    </Col>
   
    <Col sm="3" className="mt-3 offset-1">
        <div class="">
            <p>© Copyright 2020 COMSATS University Islamabad</p>
        </div>
    </Col> 
    </Row>       
    </div>
    </footer>
    )}
export default Footer