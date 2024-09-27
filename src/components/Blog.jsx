import BlogCard from './cards/BlogCard'

export default function Blog() {
  return (
    <>
        <div className='blog-page'>
            <div className='flex flex-wrap justify-center justify-items-center align-items: center;'>
                <BlogCard
                    imgSrc='https://picsum.photos/id/10/300/200'
                    imgAlt='The Lazy Blog'
                    title='The Lazy Blog'
                    description='Being lazy is fun when done well'
                    buttonText='View Blog'
                    link='https://github.com/adammwaniki/SendIT'
                />
            
                <BlogCard
                    imgSrc='https://picsum.photos/id/10/300/200'
                    imgAlt='The Lazy Blog'
                    title='The Lazy Blog'
                    description='Being lazy is fun when done well'
                    buttonText='View Blog'
                    link='https://github.com/adammwaniki/SendIT'
                />
            
                <BlogCard
                    imgSrc='https://picsum.photos/id/10/300/200'
                    imgAlt='The Lazy Blog'
                    title='The Lazy Blog'
                    description='Being lazy is fun when done well'
                    buttonText='View Blog'
                    link='https://github.com/adammwaniki/SendIT'
                />
            
                <BlogCard
                    imgSrc='https://picsum.photos/id/10/300/200'
                    imgAlt='The Lazy Blog'
                    title='The Lazy Blog'
                    description='Being lazy is fun when done well'
                    buttonText='View Blog'
                    link='https://github.com/adammwaniki/SendIT'
                />
            </div>
        </div>
        
    </>
  )
}
