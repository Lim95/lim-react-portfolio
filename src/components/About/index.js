import React from 'react';

function About() {
    return(
    <section className="title">
      <h1 class="name">about: Richard Lim</h1>
      <hr></hr>
      
      <div className="row justify-content-center">
        <div className="col-10" id="about-section">
            <img class="mb-5" src="https://github.com/lim95/lim-react-portfolio/raw/master/src/assets/images/profile.PNG" alt="Richard Lim"/>
            <p>
                Some stuff about me
            </p>
            <p>
                View full <a href="#/resume" class="link">resume</a>
            </p>
        </div>  
      </div>
    </section> 
)}
  
export default About;