import React, { Component } from 'react';
import './about.css'

class About extends Component {
    render() { 
        return (
            <><div className="containerCard">
                    <div className="container">
                        <div className="box">It's our job to help you!</div>
                    </div>
                <div className="text-bg">
                        <h1>Why choose our services?</h1>
                        <h3>Our Passion World of Work</h3>
                        <p >
                        We are a Recruitment Firm with an objective to serve clients with a personalized approach. At the same time, we are career builders of our candidates. We started in 2006 with an insight to make a difference in the world of work. We have established ourselves as preferred Recruitment partners wherever we have worked. Our capabilities and perseverance makes us the reliable search partners to work closely with. We work within timelines, deliver meticulously and have a very good understanding of market landscape. We have to-do spirit in the organization which makes us do things to the core.
                        <br></br>
                        We started in 2006 with 2 people and a vision to make a difference. Our founding mission has remained unchanged to bring the world’s best companies and brightest professionals together, helping each side reach their maximum potential and capabilities. We offer a unique, consultative approach to recruitment, tailoring every solution to specific requirements and offering long-term support. Our knowledge, skill and continuous endeavour to improve make us forward looking and innovative organisation.
                        </p>
                </div>
            </div>
            <div className='containerCard2'>
                <div className='card'>
                    <p>
                        <h3>Our process finds the candidates No One Else Can.</h3>
                        <br/>
                        We have designed a dynamic framework that is result oriented and caters to the most complex demands of our client. Through extensive use of technology we are evolving the workforce dynamics to provide cutting-edge consulting solutions.
                        We are consistantly rated number 1 or number 2 by our clients in their quaterly reviews.These companies set a very high bar in their hiring. We consistantly clear that bar. We have the best in class tools, techniques and databases required to source the talent you are looking for.    

                    </p>
                    <p>
                        <h3>Our Reach</h3>
                        <br/>
                        We do not rely on candidates to apply for the job, we search all our resources to identify the best candidates and then contact them to screen them for the job. Our candidate reach is extensive. We have an extensive database of candidates, a significant number of whom we have an established track record and have assisted in securing jobs. We constantly promote our clients to a vast network of passive candidates.
                    </p>
                    <p>
                        <h3>Our Expertise</h3>
                        <br/>
                        HReSource provides specialised recruitment services for professionals at middle management to leadership levels, along with highly specialised technical positions.  The world is changing technologically. Technology is making lot of difference in the way work is done. Old technology is becoming redundant. Newer technologies are coming in the market. We are the ones who are working, mapping and delivering on new technology requirements. We bring here expertise to deliver on new generation technologies.
                    </p>
                    </div>

            </div>
            <div className='containerCard2'>
                <div className='card'>
                <div className='container' style={{color:(1,0,0),fontsize:10 }}>
                <button > looking to hire?</button>
                </div>
                <div className='container' style={{color:(0,0,1),fontsize:10}}>
                <button > Looking for a Job? </button>
                </div>
                <div className='container' >
                    <button>. </button>
                </div>
                </div>
            </div>
            </>
      );
    }
}
 
export default About;