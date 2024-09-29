//import Navbar from "./Navbar"
import TechStackCard from "./cards/TechStackCard"

export default function About() {
  return (
    <>
    {/* Page container*/}
      <div className="flex flex-col min-h-screen font-display">
        {/* Page subcontainer */}
        <div className="p-10 mt-24">
          {/*just in case I need another subcontainer */}
          <div className="">
            {/*About page text content */}
            <div className="sm:text-[2vw]  xxxxsm:text-base text-[#7B3E19]">
              <p>
                Hi!  I&#39;m <span>Adam Mwaniki.</span> 
              </p>
              <p>
                I develop <span>full-stack</span> applications with a passion for 
                back-end development, particularly with <span>Python</span>, <span>Flask</span>, and <span>PostgreSQL</span>.
              </p>
              <p>
                I enjoy building <span>scalable APIs</span> and secure web applications, focusing on 
                efficient <span>database</span> management and smooth <span>front-end</span> integration.
              </p>
              <p>
                I&#39;m always looking for ways to <span>improve</span> my skills and <span>contribute</span> to 
                the creation of <span>reliable</span>, high-performance solutions that meet 
                business needs and provide a positive user experience.
              </p>
            </div>
            <div className=" font-accents">
              <h2>My Tech Stack</h2>
              <div className="flex flex-wrap gap-[2em] lg:justify-end md:justify-center sm:justify-center ">
                <TechStackCard 
                imgSrc = "src/assets/icons8-figma-48.png"
                imgAlt ="Figma Icon"
                title ="Figma"
                />
                <TechStackCard 
                imgSrc = "src/assets/react.svg"
                imgAlt ="React JS Icon"
                title ="React JS"
                />
                <TechStackCard 
                imgSrc = "src/assets/icons8-javascript-48.png"
                imgAlt ="Javascript Icon"
                title ="JavaScript"
                />
                <TechStackCard 
                imgSrc = "src/assets/icons8-python-48.png"
                imgAlt ="Python Icon"
                title ="Python"
                />
                <TechStackCard 
                imgSrc = "src/assets/icons8-postgresql-48.png"
                imgAlt ="Postgresql Icon"
                title ="PostgreSQL"
                />
                <TechStackCard 
                imgSrc = "src/assets/icons8-git-50.png"
                imgAlt ="Git Icon"
                title ="Git"
                />
                <TechStackCard 
                imgSrc = "src/assets/icons8-flask-50.png"
                imgAlt ="Flask Icon"
                title ="Flask"
                />
              </div>
            </div>
            <div className="font-accents">
              <p>Download My CV</p>
              <p>Check out my Github</p>
              <p>Email Me</p>
              <p>adamndegwa@protonmail.com</p>
            </div>
          </div>
        </div>
      </div>  
    </>
  )
}
