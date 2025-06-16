import React from "react"
import "./Home.css"
import hero from "../pic/realhero.jpg"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import skill4 from "../pic/skill4.png"
import skill5 from "../pic/skill5.png"
import skill6 from "../pic/skill6.png"
import mypdf from '../pic/N.Shahriar.pdf';
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>HEY! MY NAME IS</h3>
            <h2>
              <span style={{ color: 'gray', fontWeight: 'bold' }}>MD NADIM SHAHRIAR APURBO</span>
            </h2>
            <h2>
              <span style={{ color: '', fontWeight: 'bold' }}>I SPECIALIZE IN </span>
              <Typewriter
                words={[
                  "Robotics",
                  // "Mechanical Design & CAD Modeling.",
                  // "PCB Design & Embedded Hardware.",
                  // "Embedded Systems & IoT Solutions.",
                  // "Advanced Research & Development.",
                  "Programming",
                  "UAV Technologies.",
                  // "3D Printing & Rapid Prototyping.",
                  // "Electronics Engineering & Circuit Design.",
                  // "Technical Consulting & Innovation Strategy."
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>
            <p>
              {/* I am an experienced Robotics Engineer, Embedded Systems Developer, and Software Engineer with a demonstrated history of working in the research and development industry. Skilled in Robotics, Embedded Systems, PCB Design, Mechanical Design, Software Development, and Algorithm Design. Strong engineering professional with a Bachelor of Science (B.Sc.) focused in Electical and Electronics Engineering. */}
              I'm Md. Nadim Shahriar Apurbo, a tech enthusiast with a passion for innovation and problem-solving. I love exploring new ideas, especially when it comes to making roads safer with smart technology. Finding creative solutions to realworld problems excites me, and I’m always eager to learn and grow. I believe that technology has the power to create a better, safer future for everyone. My goal is to keep innovating and making a meaningful impact.
            </p>
            <div className='hero_btn'>
              <a href={mypdf} download>
                <button className='btn_shadow'>Download CV</button>
              </a>
            </div>
            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND ME WITH </h4>
                <div className='button'>
                  <a href="https://www.linkedin.com/in/nadim-shahriar-apurbo-9508692a9/" target="_blank" rel="noopener noreferrer">
                    <button className='btn_shadow'>
                      <i class='fab fa-linkedin-in'></i>
                    </button>
                  </a>
                  <a href="https://www.facebook.com/ERROR.Hiii" target="_blank" rel="noopener noreferrer">
                    <button className='btn_shadow'>
                      <i class='fab fa-facebook-f'></i>
                    </button>
                  </a>
                  <a href="https://www.instagram.com/nadim_shahriar_apurbo/" target="_blank" rel="noopener noreferrer">
                    <button className='btn_shadow'>
                      <i class='fab fa-instagram'></i>
                    </button>
                  </a>
                  <a href="https://github.com/nadim-shahriar-apurbo" target="_blank" rel="noopener noreferrer">
                    <button className='btn_shadow'>
                      <i class='fa-brands fa-github'></i>
                    </button>
                  </a>
                </div>
              </div>

              <div className='col_1'>
                <h4>Which Tols I use</h4>
                <a href="https://www.altium.com/" target="_blank" rel="noopener noreferrer">
                  <button className='btn_shadow'>
                    <img src={skill3} alt='' />
                  </button>
                </a>
                <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
                  <button className='btn_shadow'>
                    <img src={skill2} alt='' />
                  </button>
                </a>
                <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                  <button className='btn_shadow'>
                    <img src={skill6} alt='' />
                  </button>
                </a>
                <a href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer">
                  <button className='btn_shadow'>
                    <img src={skill5} alt='' />
                  </button>
                </a>
                <a href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer">
                  <button className='btn_shadow'>
                    <img src={skill1} alt='' />
                  </button>
                </a>
                <a href="https://www.arduino.cc/" target="_blank" rel="noopener noreferrer">
                  <button className='btn_shadow'>
                    <img src={skill4} alt='' />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section >
    </>
  )
}

export default Home
