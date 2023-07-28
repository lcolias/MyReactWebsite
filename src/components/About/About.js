import React, {useState, useEffect} from "react";

import "./About.css";
import GitHubUser from "../External-Data/GitHubUser";

import longBeachLogo from '../../images/longBeachLogo.svg';
import mtSacLogo from '../../images/mtSacLogo.png';
import ayalaLogo from '../../images/rubenayala.png';



function About({login}) {

    return(
      <>
        <section className="section-content-container">

          <GitHubUser login={login}/>

          <div className="section-content-background about-me">

            <h2>a bit about me!</h2>

              <div className="flex">

                <p className="p-format">
                  Hello World, my name is <em>Lucas</em>, but I usually go by Luke. I am currently working as a Software Engineer at Northrup Grumman. 
                  My role there involves supporting the Joint Strike Fighter (JSF) program. My favorite moments when working 
                  on any project happen when I’m able to develop Simple and Effective code. I also understand that sometimes things are complicated 
                  and those are the times I use all of resources afforded to me to figure out a solution. I’m a simple man who appreciates simple things, 
                  and I try to maintain that mindset with everything I do. Please checkout my “Contact” page for info on how to get in touch!
                </p>
                    
                <p className="p-format">
                  I graduated as a Computer Science major from California State University, Long Beach. At University, I gained a thorough understanding 
                  of programming data structures and algorithms in Java and C++. In addition, I have a solid foundation in AI and Android mobile application 
                  development both from University and personal projects. As a software engineering intern I had hands-on experience developing client and 
                  server code as well as full-stack web applications. I am adaptable, excited, and motivated when working with new technologies. I love 
                  stepping outside of my comfort zone to produce work that I am proud of.
                </p>

              </div>

          </div>

        </section>

        {/*<!-- ******************  EDUCATION & CERTIFICATIONS ****************** -->*/}
        <section className="section-content-container">
          
          <div className="section-content-background education">
              
            <h2>my education</h2>

            {/*<!-- Copy this whole <section> block to add more schools. -->*/}
            <div className="school-grid">
              <div className='school-img'>
                <img className='img-sml' src={longBeachLogo} alt='Long Beach State Logo' />
              </div>
              <div>
                <h3>Bachelor of Science in Computer Science, California State University of Long Beach - Long Beach, CA</h3>
                <ul className='school-details'>
                  <li>introduced to lower level programming applications: operating systems, compilers, malware</li>
                  <li>challenged with contemporary computer science topics: artifical intelligence, machine learning</li>
                  <li>joined the liquid fuel rocket team(BLT), started development on their onboard avionics system</li>
                  <li>strengthened my fundamentals ofdd data structures and algorithms</li>
                </ul>
              </div>

              <div className='school-img'>
                <img className='img-lg' src={mtSacLogo} alt='Mount San Antionio College Logo' />
              </div>
              <div>
                <h3>Associate of Science for Transfer in Mathematics, Mount San Antionio College - Walnut, CA</h3>
                <ul className='school-details'>
                  <li>introduced to programming</li>
                  <li>challenged with familiarizing myself with different programming languages and applying them to different applications</li>
                  <li>joined the solid fuel rocket team, developed a basic real-time onboard avionics system</li>
                  <li>strengthened my mathematical and logical arithmatic</li>
                </ul>
              </div>

              <div className='school-img'>
                <img className='img-lg' src={ayalaLogo} alt='Ayala High School Logo' />
              </div>
              <div>
                <h3>High School Diploma, Ruben S. Ayala High School - Chino Hills, CA</h3>
              </div>

            </div>

          </div>

        </section>
        
        {/*<!-- End of education block. -->*/}   
        
        </>
    );
}

export default About;