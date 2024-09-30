import ProjectCard from './cards/ProjectCard'
//import Navbar from './Navbar'

export default function Projects() {
  return (
    <>
        <section id="projects">
            <div className='flex justify-center min-h-screen '>
                <div className='flex flex-wrap justify-center  p-1 mt-[16vh]'>
                    <ProjectCard
                        imgSrc='https://github.com/adammwaniki/SendIT/blob/main/client/src/assets/images/sendit-landscape-blue.jpeg?raw=true'
                        imgAlt='SendIT Courier Service'
                        title='SendIT'
                        description='SendIT is a courier service that helps users deliver parcels to various destinations. The platform provides courier quotes based on weight categories, ensuring efficient and cost-effective delivery solutions.'
                        buttonProject='View Project'
                        buttonPresentation='Watch Presentation'
                        linkProject='https://github.com/adammwaniki/SendIT'
                        linkPresentation='https://www.canva.com/design/DAGNxgniNh4/S13QQ0bHtg9CxkUsXtxaXg/view?utm_content=DAGNxgniNh4&utm_campaign=designshare&utm_medium=link&utm_source=editor'
                    />
                
                    <ProjectCard
                        imgSrc='https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        imgAlt='Ansatsu Kyoshitsu School (AKS)'
                        title='School Management'
                        description="This application's primary purpose is school management. It will primarily serve teachers, providing them with tools to manage classrooms, students, and subjects as efficiently and effectively as possible."
                        buttonProject='View Project'
                        buttonPresentation='Watch Presentation'
                        linkProject='https://github.com/adammwaniki/ansatsu-kyoshitsu-project'
                        linkPresentation='https://drive.google.com/file/d/1YqQDJcuCHQenPFHPeUNDWYxGPQONLNmH/view?usp=drive_link'
                    />
                
                    <ProjectCard
                        imgSrc='https://picsum.photos/id/180/300/200'
                        imgAlt='Task-A the Task Management App'
                        title='Task-A'
                        description='Task-A is a task management app that allows users to alleviate the burden of keeping track of day to day activities. Stress free living is just a click away.'
                        buttonProject='View Project'
                        buttonPresentation='Watch Presentation'
                        linkProject='https://github.com/adammwaniki/Task-Manager---Group-2'
                        linkPresentation='https://www.canva.com/design/DAGEwNSP7MQ/dpNGZ2uM7JE17_E6y3oqng/view?utm_content=DAGEwNSP7MQ&utm_campaign=designshare&utm_medium=link&utm_source=editor'
                    />
                
                    <ProjectCard
                        imgSrc='https://images.unsplash.com/photo-1502740479091-635887520276?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        imgAlt='Hospital Management System'
                        title='Hospital Management'
                        description='The primary purpose of this CLI - based system is to provide hospital management staff with a simple alternative to physical record keeping, minimising wastage of precious time in health management facilities.'
                        buttonProject='View Project'
                        buttonPresentation='Watch Presentation'
                        linkProject='https://github.com/adammwaniki/hospital-management-system-python-sqlite-project'
                        linkPresentation='https://drive.google.com/file/d/1hakb1q9PPrZGe_Y_scy_9TG6Z4Dh_5kX/view?usp=sharing'
                    />
                </div>
            </div>
        </section>
    </>
  )
}
