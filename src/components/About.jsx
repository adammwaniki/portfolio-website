import { useState } from 'react';
import EmailCard from './EmailCard';
import TechStackCard from "./cards/TechStackCard"
import cvFile from '../assets/not-images/Adam-Mwaniki-Resume.pdf';
import figmaIcon from '../assets/images/icons8-figma-48.png';
import reactIcon from '../assets/images/react.svg';
import javascriptIcon from '../assets/images/icons8-javascript-48.png';
import pythonIcon from '../assets/images/icons8-python-48.png';
import postgresqlIcon from '../assets/images/icons8-postgresql-48.png';
import gitIcon from '../assets/images/icons8-git-50.png';
import flaskIcon from '../assets/images/icons8-flask-50.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'



export default function About() {
  const [showEmailCard, setShowEmailCard] = useState(false);

  const handleEmailClick = () => {
    setShowEmailCard(true);
  };

  const handleCloseEmailCard = () => {
    setShowEmailCard(false);
  };  

  return (
    <>
      <section id="about" className={showEmailCard ? 'blur-sm' : ''}>
      {/* Page container*/}
        <div className="flex min-h-screen justify-center font-display ">
          {/* Page subcontainer */}
          <div className="p-16 mt-16 flex self-center ">
            {/*just in case I need another subcontainer */}
            <div className="flex flex-wrap justify-evenly  sm:flex-row xxxxsm:flex-col sm:gap-0 xxxxsm:gap-[8vh] ">
              {/*About page text content */}
              <div className=" flex flex-col sm:items-start xxxxsm:items-center text-left gap-[4vh] sm:basis-1/2 sm:text-[2vw] xxxxsm:text-base font-semibold text-[#7B3E19]">
                <p >
                  Hi!  I&#39;m <span className="text-[#007AFF] font-bold">Adam Mwaniki.</span> 
                </p>
                <p >
                  I develop <span className="text-[#007AFF]">full-stack</span> applications with a <br/> passion for 
                  back-end development, <br/> particularly with <span className="text-[#007AFF]">Python</span>, <span className="text-[#007AFF]">Flask</span>, and <br/> <span className="text-[#007AFF]">PostgreSQL</span>.
                </p>
                <p>
                  I enjoy building <span className=" text-[#289661]">scalable APIs</span> and <br/> secure web applications, focusing on <br/>
                  efficient <span className="text-[#289661]">database</span> management and <br/> smooth <span className="text-[#289661]">front-end</span> integration.
                </p>
                <p>
                  I&#39;m always looking for ways to <span className="text-[#C2714F]">improve</span> <br/> my skills and <span className="text-[#C2714F]">contribute</span> to 
                  the creation <br/> of <span className="text-[#C2714F]">reliable</span>, high-performance solutions <br/> that meet 
                  business needs and provide a <br/> positive user experience.
                </p>
              </div>
              {/* Tech Stack and Contacts div */}
              <div className="sm:basis-1/2 font-accents flex flex-col items-center gap-[2vh] sm:text-[1.6vw] xxxxsm:text-base">
                <h2 className="flex justify-between items-center w-full text-[#8E6E53] gap-2.5 px-3 py-1.5 whitespace-nowrap rounded-md bg-zinc-500 bg-opacity-10 hover:bg-opacity-40 transition duration-300 ease-in-out">My Tech Stack</h2>
                <div className="flex flex-wrap gap-[2em]">
                  <TechStackCard 
                  imgSrc = {figmaIcon}
                  imgAlt ="Figma Icon"
                  title ="Figma"
                  />
                  <TechStackCard 
                  imgSrc = {reactIcon}
                  imgAlt ="React JS Icon"
                  title ="React JS"
                  />
                  <TechStackCard 
                  imgSrc = {javascriptIcon}
                  imgAlt ="Javascript Icon"
                  title ="JavaScript"
                  />
                  <TechStackCard 
                  imgSrc = {pythonIcon}
                  imgAlt ="Python Icon"
                  title ="Python"
                  />
                  <TechStackCard 
                  imgSrc = {postgresqlIcon}
                  imgAlt ="PostgreSQL Icon"
                  title ="PostgreSQL"
                  />
                  <TechStackCard 
                  imgSrc = {gitIcon}
                  imgAlt ="Git Icon"
                  title ="Git"
                  />
                  <TechStackCard 
                  imgSrc = {flaskIcon}
                  imgAlt ="Flask Icon"
                  title ="Flask"
                  />
                </div>
                <div className="font-accents font-medium flex flex-col gap-[2vh]">
                  <div className="flex gap-2">
                      <a 
                        href={cvFile}
                        download="Adam_Mwaniki_CV.pdf"
                        className="flex justify-center w-full text-[#007AFF] gap-2.5 px-3 py-1.5 whitespace-nowrap rounded-md bg-zinc-500 bg-opacity-10 hover:bg-opacity-40 transition duration-300 ease-in-out"
                      >
                        Download CV
                      </a>
                      <a 
                        href={cvFile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center w-full text-[#007AFF] gap-2.5 px-3 py-1.5 whitespace-nowrap rounded-md bg-zinc-500 bg-opacity-10 hover:bg-opacity-40 transition duration-300 ease-in-out"
                      >
                        View CV
                      </a>
                  </div>

                  <button id="github-link" className="flex justify-center content-center w-full text-[#007AFF] gap-2.5 px-3 py-1.5 whitespace-nowrap rounded-md bg-zinc-500 bg-opacity-10 hover:bg-opacity-40 transition duration-300 ease-in-out">
                  <FontAwesomeIcon icon={faGithub} style={{color: "#000000",}} />
                    <a href="https://github.com/adammwaniki">Check out my Github</a>
                    </button>
                  <button id="email-link" onClick={handleEmailClick} className="flex justify-center w-full text-[#007AFF] gap-2.5 px-3 py-1.5 whitespace-nowrap rounded-md bg-zinc-500 bg-opacity-10 hover:bg-opacity-40 transition duration-300 ease-in-out"><FontAwesomeIcon icon={faComment} style={{ color: "#63E6BE" }} />Let&apos;s chat!</button>
                  <p className="flex justify-between items-center w-full text-[#C2714F] gap-2.5 px-3 py-1.5 whitespace-nowrap rounded-md bg-zinc-500 bg-opacity-10 ">adamndegwa@protonmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </section>
      {showEmailCard && <EmailCard onClose={handleCloseEmailCard} />}
    </>
  )
}
