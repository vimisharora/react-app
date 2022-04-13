import React, { Component } from 'react';
import './employer.css'

class Home extends Component {
    render() { 
        return (
            <><div className="containerCard">
                    <div className="container">
                        <div className="box">LOOKING FOR EMPLOYMENT?<br /> WE'RE ON THE JOB!</div>
                    </div>
                <div className="text-bg">
                        <h1>Job Seekers</h1>
                        <h3>We are into permanent hiring. We work for Tier-1 companies. </h3>
                        <ol>
                            <li>We have a team of highly networked recruters for senior and middle level hiring.</li>
                            <li>We consistantly deliver mission critical results for the organisations of repute.</li>
                            <li></li>
                        </ol>
                        <p>
                            
                            <br />
                        We started in 2006 with 2 people and a vision to make a difference. Our founding mission has remained unchanged to bring the world’s best companies and brightest professionals together, helping each side reach their maximum potential and capabilities. We offer a unique, consultative approach to recruitment, tailoring every solution to specific requirements and offering long-term support. Our knowledge, skill and continuous endeavour to improve make us forward looking and innovative organisation.
                        </p>
                </div>
            </div>
            <div className='containerCard2'>
                <h2><hr style={{height:5}}/>Testimonials<hr style={{height:5}}/></h2>
                <div className='card'>
                    <p>RajatAdhikari</p>
                    <p>Amit kahtri</p>
                    <p>Sales and consulting</p>
                    </div>
                    
            </div>
            
            </>
      );
    }
}
 
export default Home;