import PropTypes from 'prop-types'

export default function ProjectCard({
    imgSrc,
    imgAlt,
    title,
    description,
    buttonProject,
    buttonPresentation,
    linkProject,
    linkPresentation,
}) {
  return (
    <div className='project-card-container ' >
        <div className='flex flex-col p-8 font-display'>
          <div className='rounded-xl overflow-hidden max-w-[300px] max-h-[171.3px]'>
            {imgSrc && imgAlt && (<img src={imgSrc} alt={imgAlt}/>)} 
          </div>
          <div className='project-card-body max-w-[300px] max-h-[284px] '>
              {title && (<h1 className='text-[#7B3E19] text-2xl md:text-3xl font-bold mt-3'>{title}</h1>)}
              {description && (<p className='text-[#7B3E19] text-lg mt-3 text-wrap max-w-72 sm:min-h-[168px]'>{description}</p>)}
              <div className='flex flex-row justify-between'>
              {buttonProject && linkProject && (<a href={linkProject} className='text-center text-[#7B3E19] bg-[#7878801F] py-2 rounded-lg
              font-bold mt-4 hover:bg-[#D4CB92] focus:scale-95 transition-all duration-300 ease-in-out '>{buttonProject}</a>)}
              {buttonPresentation && linkPresentation && (<a href={linkPresentation} className='text-center text-[#7B3E19] bg-[#7878801F] py-2 rounded-lg
              font-bold mt-4 hover:bg-[#D9A441] focus:scale-95 transition-all duration-300 ease-in-out '>{buttonPresentation}</a>)}
              </div>
          </div>
        </div>
    </div>
  )
}
ProjectCard.propTypes = {
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    buttonProject: PropTypes.string,
    buttonPresentation: PropTypes.string,
    linkProject: PropTypes.string,
    linkPresentation: PropTypes.string,
  };
