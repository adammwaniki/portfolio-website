export default function HomePage() {
  return (
    <>
      <div className="flex flex-col min-h-screen font-display">
        {/* Section for Name and Title */}
        <div className="flex font-bold lg:justify-start md:justify-center sm:justify-center xsm:justify-center xxsm:justify-center xxxsm:justify-center items-center" style={{ minHeight: '50vh' }}>
          <div className="flex flex-col lg:justify-center lg:items-start mx-auto lg:ml-[129px] md:ml-[50px] sm:ml-[20px]">
            <h1 className="text-center" style={{ fontSize: '6vw', color: '#40240B', lineHeight: '0.5' }}>
              Mwaniki
              <br />
              <span style={{ fontSize: '2.85vw', color: '#7B3E19', lineHeight: '0.75' }}>
                <span className="font-semibold">the</span> <br /> Software Engineer
              </span>
            </h1>
          </div>
        </div>

        {/* Section for Description */}
        <div className="flex justify-center items-center font-semibold" style={{ height: '10vh' }}>
          <p className="text-[1.8vw] text-[#C2714F] text-left px-[5vw]">
            Harnessing the power of <span className="text-[#7B3E19]">code</span> to <br />
            make <span className="text-[#7B3E19]">software magic</span> happen -- 
            <br />
            <span>one spell at a time</span>
          </p>
        </div>

        {/* Section for Image and Name */}
        <div className="flex lg:flex-row flex-col items-center justify-between lg:w-full">
          <div className="hidden lg:flex lg:w-6/12"></div>
          <div className="flex flex-col items-end lg:w-6/12 w-full relative">
            <img
              loading="lazy"
              src="src/assets/1_Clipped_image_20240920_165434.png"
              className="object-right w-[27%] h-[29%]  mr-[20%]" // Adjust max-width as needed
              style={{ maxHeight: '100%', height: 'auto' }}
            />
            {/* Name positioned at the bottom right of the image */}
            <div className="absolute bottom-0 right-0 text-[2.4vw] font-bold leading-0 text-yellow-900 mt-2 lg:mt-0 mr-[13%]">
              <p>Adam</p>
              <p>Mwaniki</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
