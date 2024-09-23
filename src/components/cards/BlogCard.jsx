import PropTypes from 'prop-types';

export default function BlogCard({
    imgSrc,
    imgAlt,
    title,
    description,
    buttonText,
    link,
}) {
  return (
    <div className='blog-card-container'>
        <div className='blog-card-img'>
            {imgSrc && imgAlt && (<img src={imgSrc} alt={imgAlt}/>)} 
        </div>
        <div className='card-body'>
            {title && (<h1 className='blog-card-title'>{title}</h1>)}
            {description && (<p className='blog-card-description'>{description}</p>)}
            {buttonText && link && (<a href={link} className='blog-card-btn'>{buttonText}</a>)}
        </div>
    </div>
  )
}
BlogCard.propTypes = {
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    buttonText: PropTypes.string,
    link: PropTypes.string,
  };