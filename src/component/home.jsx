import React, { Component } from 'react';
import './home.css'

class Home extends Component {
    render() { 
        return (
            <><div className="containerCard">
                    <div className="container">
                        <div className="box">100's of employees placed in jobs every month</div>
                    </div>
                <div className="text-bg">
                        <h1>Whatever you're looking for, we've got it.</h1>
                        <h3>Our Passion World of Work</h3>
                        <p>
                        We are a Recruitment Firm with an objective to serve clients with a personalized approach. At the same time, we are career builders of our candidates. We started in 2006 with an insight to make a difference in the world of work. We have established ourselves as preferred Recruitment partners wherever we have worked. Our capabilities and perseverance makes us the reliable search partners to work closely with. We work within timelines, deliver meticulously and have a very good understanding of market landscape. We have to-do spirit in the organization which makes us do things to the core.
                        <br></br>
                        We started in 2006 with 2 people and a vision to make a difference. Our founding mission has remained unchanged to bring the world’s best companies and brightest professionals together, helping each side reach their maximum potential and capabilities. We offer a unique, consultative approach to recruitment, tailoring every solution to specific requirements and offering long-term support. Our knowledge, skill and continuous endeavour to improve make us forward looking and innovative organisation.
                        </p>
                </div>
            </div>
            <div className='containerCard2'>
                <h2><hr style={{height:5}}/>DOMAINS WE SERVE<hr style={{height:5}}/></h2>
                <div className='card'>
                    <p>Information Technology</p>
                    <p>IT infrastructure and support</p>
                    <p>Sales and consulting</p>
                    </div>

                    <div className='card'>
                    <p>BFSI</p>
                    <p>Pharma</p>
                    <p>Medical Devices</p>
                    </div>

                    <div className='card'> 
                    <p>Manufacturing</p>
                    <p>Automobile</p>
                    <p>Pharmacovigilanc</p>
                </div>
            </div>
            <div className='containerCard2' >
            <h2><hr style={{height:5}}/>Recent News<hr style={{height:5}}/></h2>
                <button> .</button><button>. </button><button>. </button>
            </div>
            </>
      );
    }
}
 
export default Home;