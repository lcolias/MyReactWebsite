import React, {useState, useEffect} from "react";

import "./About.css";

import longBeachLogo from '../../images/longBeachLogo.svg';
import mtSacLogo from '../../images/mtSacLogo.png';

function GitHubUser({login}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(false); 

    useEffect(() => {

      if(!login) return; 

      setLoading(true);

      fetch(`https://api.github.com/users/${login}`)
        .then(res => res.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError);
    }, [login]);

    if(loading) return <h1>loading...</h1>
    if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>
    if(!data) return null;

    if(data) {

      console.log(data);

      return(
        <>
            <div className="main-info-grid">
              <div className="main-info avi" >
                <img alt={data.login} src={data.avatar_url}/>
              </div>

              <div className="main-info fields" >
                <div className="spacing">Name:</div>
                <div className="spacing">Location:</div>
                <div className="spacing">Company:</div>
                <div className="spacing">Motto:</div>
                <div> </div>
              </div>

              <div className="main-info data" >
                <div className="spacing"><em>{data.name}</em></div>
                <div className="spacing">{data.location}</div>
                <div className="spacing">{data.company}</div>
                <div className="spacing">{data.bio}</div>
              </div>
            </div>

        </>
      );
    }

    return(
      <>
          <div>No User Available</div>
      </>
    );
}

function About({login}) {

    return(
      <>
        <section className="section-content-wrapper">

          <GitHubUser login={login}/>

          <div className="section-content-background">

            <h2>a bit about me!</h2>

              <div className="section-content-flex ">

                <p className="section-content-item p-text-format">
                  Hello World, my name is <em>Lucas</em>, but I usually go by Luke. I am currently working as a Software Engineer at Northrup Grumman. 
                  My role there involves supporting the Joint Strike Fighter (JSF) program. My favorite moments when working 
                  on any project happen when I’m able to develop Simple and Effective code. I also understand that sometimes things are complicated 
                  and those are the times I use all of resources afforded to me to figure out a solution. I’m a simple man who appreciates simple things, 
                  and I try to maintain that mindset with everything I do. Please checkout my “Contact” page for info on how to get in touch!
                </p>
                    
                <p className="section-content-item p-text-format">
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
        <section className="section-content-wrapper">
          
          <div className="section-content-background">
              
              <h2>education</h2>

              {/*<!-- Copy this whole <section> block to add more schools. -->*/}
              <div >
              <img src={longBeachLogo} alt='Long Beach State Logo' />
                <h3>California State University of Long Beach - Long Beach, CA</h3>
                <p>Bachelor of Science - Computer Science, 2019-21</p>
              </div>
                    
              <div>
              <img src={mtSacLogo} alt='Mount San Antionio College Logo' />
                <h3>Mount San Antionio College - Walnut, CA</h3>
                <p>Associate of Science for Transfer - Mathematics, 2014-18</p>
              </div>

              <div>
                <img alt='Ayala High School Logo' />
                <h3>Ruben S. Ayala High School - Chino Hills, CA</h3>
                <p>High School Diploma, 2010-14</p>
              </div>

            </div>

          </section>
        
        {/*<!-- End of education block. -->*/}   
        
        </>
    );
}

export default About;