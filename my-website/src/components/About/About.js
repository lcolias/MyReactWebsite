import React, {useState, useEffect, useReducer} from "react";

import "./About.css";

function About() {

    const [checked, toggle] = useReducer(
        (checked) => !checked, 
        false
    );

    return(
        <>

            <header>
                <div class="section-content-wrapper">
                    <h1>Lucas Colias</h1>
                    <h2>Software Engineer and Spirited Geek</h2>
                    
                    <h1>I've never been one for comprehensively cocky characterizations of myself... </h1>
                    <h3>... but a little bit of flashiness never hurt nobody  </h3>


                    <p>I graduated as a Computer Science major from California State University, Long Beach. At University, I gained a thorough understanding of programming data structures and algorithms in Java and C++. In addition, I have a solid foundation in AI and Android mobile application development both from University and personal projects. As a software engineering intern I had hands-on experience developing client and server code as well as full-stack web applications. I am adaptable, excited, and motivated when working with new technologies. I love stepping outside of my comfort zone to produce work that I am proud of.</p>
                </div>
            </header>

            {/*<!-- ******************  EDUCATION & CERTIFICATIONS ****************** -->*/}
      <section class="education">
        <div class="section-content-wrapper">
          <h2>Education</h2>

          {/*<!-- Copy this whole <section> block to add more schools. -->*/}
          <section>
            <h3>California State University of Long Beach - Long Beach, CA</h3>
            <p>Bachelor of Science - Computer Science, 2019-21</p>
            <p>General Education in the field of Computer Science. Focused on the core education cirriculum </p>
          </section>
                  
          <section>
            <h3>Mount San Antionio College - Walnut, CA</h3>
            <p>Associate of Science for Transfer - Mathematics, 2014-18</p>
            <p>Completed the transfer requirements for students going to engineering college.</p>
          </section>

          <section>
            <h3>Ruben S. Ayala High School - Chino Hills, CA</h3>
            <p>High School Diploma, 2010-14</p>
          </section>
        </div>
      {/*<!-- End of education block. -->*/}
      </section>
            
            <label htmlFor="checkbox">{checked ? "Checked" : "Not Checked"}</label>
            <input 
                id="checkbox"
                type="checkbox"     
                value={checked} 
                onChange={toggle}
            />
            
        </>
    );
}

export default About;