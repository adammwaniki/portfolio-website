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
    <div className='project-card-container'>
        <div className='project-card-img'>
            {imgSrc && imgAlt && (<img src={imgSrc} alt={imgAlt}/>)} 
        </div>
        <div className='project-card-body'>
            {title && (<h1 className='project-card-title'>{title}</h1>)}
            {description && (<p className='project-card-description'>{description}</p>)}
            {buttonProject && linkProject && (<a href={linkProject} className='project-card-btn'>{buttonProject}</a>)}
            {buttonPresentation && linkPresentation && (<a href={linkPresentation} className='project-card-btn'>{buttonPresentation}</a>)}
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
