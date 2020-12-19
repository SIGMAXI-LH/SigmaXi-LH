import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navgbar.css'
import { Link} from "react-router-dom";

class Navgbar extends Component {
    render() {
        return (
            <div className="navbar" >
               <Link to="/" style={{color:"white",textDecoration:"none"}}>MOODWICK</Link> 
            </div>
        )
    }
}

export default Navgbar
