import React, { Component } from 'react'
import Navgbar from './Navgbar'
import axios from 'axios'
import {Link} from'react-router-dom';
class Upload extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             playlist: ''
        }
    }
    myChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value});
      }

    submitHandler =(event)=>{
        event.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:8080/upload',this.state)
        .then(response => response)
        .then((json) => {
            console.log('parsed json', json)
        })
        .catch((ex) => {
            console.log('parsing failed', ex)
        });
    }
    clickSubmit =() =>{
        console.log("Clicked Submit")
        
    }

    render() {
        return (
            <div style={{height:"100vh",backgroundColor:"aliceblue"}}>
                <Navgbar />
                Upload your playlist here.
                <form onSubmit={this.submitHandler}>
                    <input type='text' name="playlist" value={this.state.playlist} onChange={this.myChangeHandler}  /><br /><br />
                    <Link to="/detect"><button onClick={this.clickSubmit}>Submit</button></Link>
                </form>
            </div>
        )
    }
}

export default Upload
