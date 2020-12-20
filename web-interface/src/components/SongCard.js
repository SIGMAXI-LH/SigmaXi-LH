import React, { Component } from 'react'
import './SongCard.css'
class SongCard extends Component {
    render() {
        return (
            <div class="card" style={{margin:"15px 15px",padding:"20px 20px"}}>
                <div class="container">
                     
                    <a style={{textDecoration:"none",color:"black",fontSize:"20px"}} href={this.props.url}><b>{this.props.name}</b></a> 
                </div>
                </div>
        )
    }
}

export default SongCard
