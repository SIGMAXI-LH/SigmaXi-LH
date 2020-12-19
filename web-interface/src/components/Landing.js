import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col } from 'react-bootstrap';
import Navgbar from './Navgbar'
import './Landing.css'
import { Link} from "react-router-dom";
class Landing extends Component {
    render() {
        return (
            <div style={{height:"100vh",backgroundColor:"aliceblue"}}>
                <Navgbar />
                <div className="container jumbotron" style={{width:"800px",marginTop:"150px",height:"400px",paddingTop:"0px",backgroundColor:"aliceblue"}}>
                   <p style={{fontSize:"80px",marginBottom:"0px"}}>MoodWick</p>
                   <p style={{fontSize:"18px"}}>An intuitive Mood detecting Music Recommender System</p>
                   <br />
                   <div>
                       
                            <Link to="/detect"><button class="button">Detect Mood</button></Link><br /><br />
                            <p>OR</p>
                            <Link to="/upload"><button class="button">Upload Playlist</button></Link>


                        </div>

                </div>
            </div>
        )
    }
}

export default Landing
