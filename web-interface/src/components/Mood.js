import React, { Component } from 'react'
import Navgbar from './Navgbar'
import SongCard from './SongCard'
import './Mood.css'
import {Link} from 'react-router-dom'
class Mood extends Component {
    render() {
        return (
            // <div style={{height:"100vh",backgroundColor:"aliceblue"}}>
            //     <Navgbar />
            //     <p style={{fontSize:"50px"}}>Your Detected Mood is</p><br />
            //     <p style={{fontSize:"35px",fontWeight:"600"}}><b>HAPPY</b></p>
            //     <br />
            //     <br />
            //     <p style={{fontSize:"40px"}}>You may listen to these songs.</p><br />
            //     <div className="container">
            //             <div className="d-flex align-items-center justify-content-center">
            //                 <SongCard name="Can We Kiss Forever?" url="https://open.spotify.com/track/58wyJLv6yH1La9NIZPl3ne"/><br /><br />
            //                 <SongCard name="Marappadhilai Nenje" url="https://open.spotify.com/track/4Ndcwn2iAt1MdU6lpw24ZQ"/><br /><br />
            //                 <SongCard name="Seramal Ponal" url="https://open.spotify.com/track/0FTPiuMAGuvXVjeXh7g8ot"/><br /><br />
                            
            //             </div>
            //     </div>
            //     <br /><br /><br />
               
            //     <Link to="/"><button class="button">Detect Again</button></Link>
            // </div>
            <div style={{height:"100vh",backgroundColor:"aliceblue"}}>
            <Navgbar />
            <p style={{fontSize:"50px"}}>Your Detected Mood is</p><br />
            <p style={{fontSize:"35px",fontWeight:"600"}}><b>SAD</b></p>
            <br />
            <br />
            <p style={{fontSize:"40px"}}>You may listen to these songs.</p><br />
            <div className="container">
                    <div className="d-flex align-items-center justify-content-center">
                        <SongCard name="Pistah" url="https://open.spotify.com/track/4oWyW7U9YVox9jqTar9k0V"/><br /><br />
                        <SongCard name="Nenjukulla Nee" url="https://open.spotify.com/track/1VBkQidkoJXhQPJsAvSkNP"/><br /><br />
                        <SongCard name="Chellamma " url="https://open.spotify.com/track/0fGclndst25Qqy8j4u5De5"/><br /><br />
                        
                    </div>
            </div>
            <br /><br /><br />
                <Link to="/"><button class="button">Detect Again</button></Link>

            
        </div>
        )
    }
}

export default Mood
