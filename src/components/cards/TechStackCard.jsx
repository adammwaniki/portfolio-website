import PropTypes from 'prop-types';

export default function TechStackCard({
    imgSrc,
    imgAlt,
    title,
}) {
  return (
    <div className='techstack-card-container font-display'>
        <div className='techstack-card-img'>
            {imgSrc && imgAlt && (<img src={imgSrc} alt={imgAlt}/>)} 
        </div>
        <div className='techstack-card-body'>
            {title && (<h1 className='techstack-card-title'>{title}</h1>)}
        </div>
    </div>
  )
}
TechStackCard.propTypes = {
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    title: PropTypes.string,
  };