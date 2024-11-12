import ProjectCard from './cards/ProjectCard'
import { useState, useRef } from 'react'
import bullFlexing from '../assets/images/bull-flexing-animation.json';  

export default function Projects() {
  const [, setCurrentIndex] = useState(0)
  const scrollRef = useRef(null)
  
  const projects = [
    {
        imgSrc: bullFlexing,
        imgAlt: 'Lawnbull Limited',
        title: 'Lawnbull Limited',
        description: "This is a marketing agency that empowers clients to highlight their products and services by offering customisable marketing solutions that attract potential customers. ",
        buttonProject: 'View Project',
        buttonPresentation: 'Watch Presentation',
        linkProject: 'https://lawnbull.com',
        linkPresentation: 'https://lawnbull.com',
        isLottie: true
    },
    {
      imgSrc: 'https://github.com/adammwaniki/SendIT/blob/main/client/src/assets/images/sendit-landscape-blue.jpeg?raw=true',
      imgAlt: 'SendIT Courier Service',
      title: 'SendIT',
      description: 'SendIT is a courier service that helps users deliver parcels to various destinations. The platform provides courier quotes based on weight categories, ensuring efficient and cost-effective delivery solutions.',
      buttonProject: 'View Project',
      buttonPresentation: 'Watch Presentation',
      linkProject: 'https://github.com/adammwaniki/SendIT',
      linkPresentation: 'https://www.canva.com/design/DAGNxgniNh4/S13QQ0bHtg9CxkUsXtxaXg/view?utm_content=DAGNxgniNh4&utm_campaign=designshare&utm_medium=link&utm_source=editor'
    },
    {
      imgSrc: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imgAlt: 'Ansatsu Kyoshitsu School (AKS)',
      title: 'School Management',
      description: "This application's primary purpose is school management. It will primarily serve teachers, providing them with tools to manage classrooms, students, and subjects as efficiently and effectively as possible.",
      buttonProject: 'View Project',
      buttonPresentation: 'Watch Presentation',
      linkProject: 'https://github.com/adammwaniki/ansatsu-kyoshitsu-project',
      linkPresentation: 'https://drive.google.com/file/d/1YqQDJcuCHQenPFHPeUNDWYxGPQONLNmH/view?usp=drive_link'
    },
    {
      imgSrc: 'https://picsum.photos/id/180/300/200',
      imgAlt: 'Task-A the Task Management App',
      title: 'Task-A',
      description: 'Task-A is a task management app that allows users to alleviate the burden of keeping track of day to day activities. Stress free living is just a click away.',
      buttonProject: 'View Project',
      buttonPresentation: 'Watch Presentation',
      linkProject: 'https://github.com/adammwaniki/Task-Manager---Group-2',
      linkPresentation: 'https://www.canva.com/design/DAGEwNSP7MQ/dpNGZ2uM7JE17_E6y3oqng/view?utm_content=DAGEwNSP7MQ&utm_campaign=designshare&utm_medium=link&utm_source=editor'
    },
    {
      imgSrc: 'https://images.unsplash.com/photo-1502740479091-635887520276?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imgAlt: 'Hospital Management System',
      title: 'Hospital Management',
      description: 'The primary purpose of this CLI - based system is to provide hospital management staff with a simple alternative to physical record keeping, minimising wastage of precious time in health management facilities.',
      buttonProject: 'View Project',
      buttonPresentation: 'Watch Presentation',
      linkProject: 'https://github.com/adammwaniki/hospital-management-system-python-sqlite-project',
      linkPresentation: 'https://drive.google.com/file/d/1hakb1q9PPrZGe_Y_scy_9TG6Z4Dh_5kX/view?usp=sharing'
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 4 ? 0 : prevIndex + 1
    )
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollRef.current.offsetWidth / 4
    }
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 4 : prevIndex - 1
    )
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= scrollRef.current.offsetWidth / 4
    }
  }

  return (
    <section id="projects" className="relative z-0">
      {/* Mobile View */}
      <div className="md:hidden flex flex-col gap-4 p-4 pt-20">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {/* Desktop Carousel */}
      <div className="hidden md:flex justify-center min-h-screen relative z-0">
        <div className="flex items-center pointer-events-auto">
          <button
            onClick={prevSlide}
            className="flex justify-center content-center absolute left-4 z-10 bg-gray-800/50 p-2 rounded-full text-white hover:bg-gray-800"
          >
            <span className="material-icons">skip_previous</span>
          </button>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto overflow-y-hidden p-1 mt-[16vh] xl:mt-[6vh] no-scrollbar pointer-events-auto"
            style={{ scrollBehavior: 'smooth' }}
          >
            <div className="flex">
              {projects.map((project, index) => (
                <div key={index} className="w-1/4 flex-shrink-0 px-2">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="flex justify-center content-center absolute right-4 z-10 bg-gray-800/50 p-2 rounded-full text-white hover:bg-gray-800"
          >
            <span className="material-icons">skip_next</span>
          </button>
        </div>
      </div>
    </section>
  )
}

