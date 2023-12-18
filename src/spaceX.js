import React from 'react';
import './sapceX.css';
import Image1 from './spacex.png'
import Image2 from './bgspacex5.jpg'
import Image3 from './bgspacex4.jpg'
import Image4 from './bgspacex10.jpg'




function SpaceX() {


    return (

        <>
        <div id='totaldiv'>
            <div id="bgSpaceX">
                <div id="fixed">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <div class="container-fluid">
                            <img id="spacexImg" src={Image1} class="image" alt="jg" />
                            <nav class="nav">
                                <a class="nav-link" style={{color:"white"}} href="">FALCON 9</a>
                                <a class="nav-link" style={{color:"white"}} href="">FALCON HEAVY</a>
                                <a class="nav-link" style={{color:"white"}} href="">DRAGON</a>
                                <a class="nav-link" style={{color:"white"}} href="">STARSHIELD</a>
                                <a class="nav-link" style={{color:"white"}} href="">STARLINK</a>
                                <a class="nav-link" style={{color:"white"}} href="">RIDESHARE</a>
                                
                            </nav>
                            
                        </div>
                    </nav>
                </div>

                <div class="card" style={{ width: "20rem" }}>
                    <img src={Image2} class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">COMPLETED MISSION</h5>
                        <p class="card-text">DRAGON AND CREW-6 RETURN TO EARTH</p>
                        <a href="" class="btn btn-primary">LEARN MORE</a>
                    </div>
                </div>

            </div>

            <div id="bgSpaceX1">
                <div class="card" style={{ width: "20rem" }}>
                    <img src={Image3} class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">RECENT LAUNCH</h5>
                        <p class="card-text">STARLINK MISSION</p>
                        <a href="./innerspaceX1" class="btn btn-primary">LEARN MORE</a>
                    </div>
                </div>
            </div>
            <div id="bgSpaceX2">
                <div class="card" style={{ width: "20rem" }}>
                    <img src={Image4} class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">TESTING</h5>
                        <p class="card-text">STARSHIP FLIGHT TEST</p>
                        <a href="./innerspaceX1" class="btn btn-primary">LEARN MORE</a>
                    </div>
                </div>
            </div>
            </div>

        </>
    )
}

export default SpaceX