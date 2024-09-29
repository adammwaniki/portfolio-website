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
      <div className='flex flex-col p-[2em] font-display'>
        <div className="rounded-xl overflow-hidden">
            {imgSrc && imgAlt && (<img src={imgSrc} alt={imgAlt}/>)} 
        </div>
        <div className='blog-card-body'>
            {title && (<h3 className='text-[#7B3E19] text-2xl md:text-3xl font-bold mt-3'>{title}</h3>)}
            {description && (<p className='text-[#7B3E19] text-lg mt-3 text-wrap max-w-80'>{description}</p>)}
            {buttonText && link && (<a href={link} className='text-center flex justify-center text-[#7B3E19] bg-[#7878801F] py-2 rounded-lg
            font-bold mt-4 hover:bg-[#D4CB92] focus:scale-95 transition-all duration-300 ease-in-out '>{buttonText}</a>)}
        </div>
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