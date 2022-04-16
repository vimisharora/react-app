import React, { Component } from 'react';
import './employer.css'

class Employer extends Component {
    render() { 
        return (
            <><div className="containerCard">
                    <div className="container">
                        <div className="box">Recruting?<br />We're on the job</div>
                    </div>
                <div className="text-bg">
                        <h3>We are experienced in mid to senior level hiring. </h3>
                        
                        <p>
                        We are team of highly networked recruiters.We are effective and accountable in high-profile executive roles - We help you overcome complex business challenges and make high-stakes decisions using experience-backed judgment 
                        We consistently deliver mission-critical results - driven by need for strategy, to innovate, and operationally drive it. We have  vision, determination, and skills needed for high-level revenue-building and growth strategies.
                        </p><p>
                        We have rich and progressive experience on Organizational Development & Change Management, Talent Management, Business Development, Staffing & Recruitments and Large Account Management.
                        We work extensively on new age technologies like Artificial Intelligence, Machine Learning, Robotics, Fullstack, Cloud, Service Now, ECM, SAP, Oracle Apps etc.    
                        </p>
                </div>
            </div>
            <div className='containerCard2'>
                <h2><hr style={{height:5}}/>Few of our notable Clients<hr style={{height:5}}/></h2>
                <div className='card'>
                    <img src="src/component/clients.png"  />
                    </div>
                    </div>
            <div className='containerCard2'>
                <h2><hr style={{height:5}}/>Testimonials<hr style={{height:5}}/></h2>
                <div className='card'>
                    <p>RajatAdhikari <button>.</button></p>
                    <p>Amit kahtri <button>.</button></p>
                    </div>
                    
            </div>
            
            </>
      );
    }
}
 
export default Employer;