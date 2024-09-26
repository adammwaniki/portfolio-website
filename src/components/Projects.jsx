import ProjectCard from './cards/ProjectCard'
//import Navbar from './Navbar'

export default function Projects() {
  return (
    <>
        <div className='projects-page'>
            <div className='projects'>
                <ProjectCard
                    imgSrc='https://picsum.photos/id/1005/300/200'
                    imgAlt='SendIT Courier Service'
                    title='SendIT'
                    description='SendIT is a courier service that helps users deliver parcels to various destinations. The platform provides courier quotes based on weight categories, ensuring efficient and cost-effective delivery solutions.'
                    buttonProject='View Project'
                    buttonPresentation='Watch Presentation'
                    linkProject='https://github.com/adammwaniki/SendIT'
                    linkPresentation='https://github.com/adammwaniki/SendIT'
                />
            
                <ProjectCard
                    imgSrc='https://picsum.photos/id/1002/300/200'
                    imgAlt='SendIT Courier Service'
                    title='SendIT'
                    description='SendIT is a courier service that helps users deliver parcels to various destinations. The platform provides courier quotes based on weight categories, ensuring efficient and cost-effective delivery solutions.'
                    buttonProject='View Project'
                    buttonPresentation='Watch Presentation'
                    linkProject='https://github.com/adammwaniki/SendIT'
                    linkPresentation='https://github.com/adammwaniki/SendIT'
                />
            
                <ProjectCard
                    imgSrc='https://picsum.photos/id/1008/300/200'
                    imgAlt='SendIT Courier Service'
                    title='SendIT'
                    description='SendIT is a courier service that helps users deliver parcels to various destinations. The platform provides courier quotes based on weight categories, ensuring efficient and cost-effective delivery solutions.'
                    buttonProject='View Project'
                    buttonPresentation='Watch Presentation'
                    linkProject='https://github.com/adammwaniki/SendIT'
                    linkPresentation='https://github.com/adammwaniki/SendIT'
                />
            
                <ProjectCard
                    imgSrc='https://picsum.photos/id/1009/300/200'
                    imgAlt='SendIT Courier Service'
                    title='SendIT'
                    description='SendIT is a courier service that helps users deliver parcels to various destinations. The platform provides courier quotes based on weight categories, ensuring efficient and cost-effective delivery solutions.'
                    buttonProject='View Project'
                    buttonPresentation='Watch Presentation'
                    linkProject='https://github.com/adammwaniki/SendIT'
                    linkPresentation='https://github.com/adammwaniki/SendIT'
                />
            </div>
        </div>
        
    </>
  )
}
