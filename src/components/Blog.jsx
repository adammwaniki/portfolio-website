import BlogCard from './cards/BlogCard'
import { useState, useRef } from 'react'

export default function Blog() {
  const [, setCurrentIndex] = useState(0)
  const scrollRef = useRef(null)

  const blogs = [
    {
      imgSrc: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ix7zmK2zTyCTKiWQQR_Gdg.png',
      imgAlt: 'A Blog About This Portfolio Website',
      title: "Mwaniki's Website",
      description: 'Join me on my journey of building this website from scratch! Discover how I harnessed the power of React JS and Tailwind CSS to create a stunning, user-friendly experience that marries sleek design with dynamic functionality.',
      buttonText: 'View Blog',
      link: 'https://medium.com/@adamndegwa/my-journey-to-building-a-portfolio-website-from-scratch-2559c7211528'
    },
    {
    imgSrc: 'https://picsum.photos/id/10/300/200',
    imgAlt: 'The Lazy Blog',
    title: 'The Lazy Blog',
    description: 'Being lazy is fun when done well',
    buttonText: 'View Blog',
    link: 'https://github.com/adammwaniki/SendIT'
    },
    {
    imgSrc: 'https://picsum.photos/id/10/300/200',
    imgAlt: 'The Lazy Blog',
    title: 'The Lazy Blog',
    description: 'Being lazy is fun when done well',
    buttonText: 'View Blog',
    link: 'https://github.com/adammwaniki/SendIT'
    },
        {
    imgSrc: 'https://picsum.photos/id/10/300/200',
    imgAlt: 'The Lazy Blog',
    title: 'The Lazy Blog',
    description: 'Being lazy is fun when done well',
    buttonText: 'View Blog',
    link: 'https://github.com/adammwaniki/SendIT'
    },
    {
    imgSrc: 'https://picsum.photos/id/10/300/200',
    imgAlt: 'The Lazy Blog',
    title: 'The Lazy Blog',
    description: 'Being lazy is fun when done well',
    buttonText: 'View Blog',
    link: 'https://github.com/adammwaniki/SendIT'
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === blogs.length - 4 ? 0 : prevIndex + 1
    )
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollRef.current.offsetWidth / 4
    }
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? blogs.length - 4 : prevIndex - 1
    )
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= scrollRef.current.offsetWidth / 4
    }
  }

  return (
    <section id="blog">
      {/* Mobile View */}
      <div className="md:hidden flex flex-col gap-4 mt-[16vh] p-4">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
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
              {blogs.map((blog, index) => (
                <div key={index} className="w-1/4 flex-shrink-0 px-2">
                  <BlogCard {...blog} />
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
