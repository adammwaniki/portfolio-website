import Navbar from "./Navbar"

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col">
        <div className="home-page-text-content">
          <h1>Mwaniki</h1>
          <h2>the Software Engineer</h2>
          <p>
            Harnessing the power of code to make software magic happen -- 
            <br/>
            one spell at a time
          </p>
        </div>
        <div className="flex flex-wrap flex-row-reverse h-auto max-w-lg ms-auto pr-[4em]">
          <img src="src/assets/1_Clipped_image_20240920_165434.png" alt="Adam MWaniki Picture" />
          <p className="font-bold">Adam Mwaniki</p>
        </div>
      </div>
      <Navbar/>
    </>
  )
}
