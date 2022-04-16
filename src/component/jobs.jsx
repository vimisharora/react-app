import React, { Component } from 'react';
import './jobs.css'

class Jobs extends Component {
    render() { 
        return (
            <><div className="containerCard">
                    <div className="container">
                        <div className="box">LOOKING FOR EMPLOYMENT <br />WE'RE ON THE JOB!</div>
                    </div>
                <div className="text-bg">
                        <h1>Job Seekers</h1>
                        <h3>We are into permanent hiring. We work for Tier 1 companies.</h3>
                        <ol>
                            <li>We have a team of highly networked  recruiters for senior and middle level hiring.</li>
                            <li>We  consistently deliver mission-critical results for the organisations of repute. </li>
                            <li>We help you choosing the right organisation with our insights of the clients. We guide you for cultural fitment and help you having long term stay in the company.</li>
                        </ol>

                        <h3>Technology Recruitment expertise</h3>
                        <div className='rows'>
                            <p>
                                <ul>
                                    <li>Analytics</li>
                                    <li>Finance and accounting</li>
                                    <li>Engineering and manufacturing</li>
                                    <li>Human resources</li>
                                    <li>Marketing</li>
                                    <li>Retail</li>
                                </ul>
                            </p>
                            <p>
                            
                                <ul>
                                    <li>Banking and finance services</li>
                                    <li>Consultancy, Strategy and Change</li>
                                    <li>Heahthcare and life sciences</li>
                                    <li>Legal</li>
                                    <li>Procurement and supply chain</li>
                                    <li>Sales</li>
                                </ul>
                            </p>
                        </div>
                </div>
            </div>

            <div className='containerCard2' >
                <p>
                    <h4>We provide solutions in permanent hiring</h4>
                    <ul>
                        <li>Long Term Placement</li>
                        <li>Direct Placement</li>
                    </ul>
                </p>
                <p>
                    <h4>Submit your application form and resume to begin your job search today</h4>
                    
                    Download and fill out the  form bellow and send with your resume to <a href="mailto:saurabh@hresource.co.in">saurabh@hresource.co.in</a>
                    <br />
                    Once submitted, one of our recruiters will contact you to advance with the process.
                    <br />
                    <button onClick={null}>DOWNLOAD APPLICATION FORM</button>
                    </p>
            </div>
            <div className='containerCard2'>
                <h2><hr style={{height:5}}/>Testimonials<hr style={{height:5}}/></h2>
                <div className='card'>
                    <p><button>.</button></p>
                    <p><button>.</button></p>
                    </div>
            </div>
            </>
      );
    }
}
 
export default Jobs;