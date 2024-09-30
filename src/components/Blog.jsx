import BlogCard from './cards/BlogCard'

export default function Blog() {
  return (
    <>
        <section id="blog">
            <div className='flex justify-center min-h-screen'>
                <div className='flex flex-wrap justify-center  p-1 mt-[16vh]'>
                    <BlogCard
                        imgSrc='https://picsum.photos/id/10/300/200'
                        imgAlt='This Website'
                        title="Mwaniki's Website"
                        description='Join me on my journey of building this website from scratch! Discover how I harnessed the power of React JS and Tailwind CSS to create a stunning, user-friendly experience that marries sleek design with dynamic functionality. '
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
        </section>
        
    </>
  )
}
