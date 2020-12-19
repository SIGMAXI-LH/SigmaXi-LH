import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col } from 'react-bootstrap';
import Navgbar from './Navgbar'
import { Link} from "react-router-dom";
import './Detect.css'
import WebcamStreamCapture from './VideoElement'

class Detect extends Component {
    render() {
        return (
            <div style={{backgroundColor:"aliceblue",height:"100vh"}}>
                <Navgbar />
                <div class="container" style={{marginTop:"120px"}}>
                    <WebcamStreamCapture />
                    
                </div>
            </div>
        )
    }
}

export default Detect
