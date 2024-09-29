export default function HomePage() {
  return (
    <>
    <section id="home">
      {/* Homepage container */}
      <div className="flex font-display min-h-screen max-h-svh justify-center w-full ">  
        {/* subcontainer for all */}
        <div className="flex flex-wrap xxxxsm:h-svh sm:gap-[0.8vh] xsm:gap-[3vh] xxsm:gap-[7vh] xxxsm:gap-[12vh] xxxxsm:gap-[30vw] sm:justify-evenly sm:flex-row xxxxsm:flex-col xxxxsm:justify-center xxxxsm:content-center  font-bold w-11/12 pt-[17.6vh] md:pb-[11.7vh] ">
          {/* Container for Name, Title and Description */}
          <div className="flex flex-col 2xl:gap-32 xl:gap-24 lg:gap-20 md:gap-20 sm:gap-14  xxsm:gap-10 xxxsm:gap-6 xxxxsm:gap-4 ">
            {/* Section for Name and Title */}
              <div className=" lg:flex lg:justify-start mt-10 ">
                <h1 className="text-center xsm:text-[6vw] xsm:leading-[0.5] xxxxsm:text-5xl xxxxsm:leading-7 text-[#40240B]">
                  Mwaniki
                  <br />
                  <span className="xsm:text-[2.85vw] xsm:leading-[0.75] xxxxsm:text-2xl xxxxsm:leading-[1rem] text-[#7B3E19] ">
                    <span className="font-semibold">the</span> <br /> Software Engineer
                  </span>
                </h1>
              </div>

            {/* Section for Description */}
            <div className="font-semibold flex sm:text-left xxxxsm:justify-center">
              <p className=" sm:text-[2vw]  xxxxsm:text-base  text-[#C2714F]  px-[5vw]">
                Harnessing the power of <span className="text-[#7B3E19]">code</span> to <br />
                make <span className="text-[#7B3E19]">software magic</span> happen -- 
                <br />
                <span>one spell at a time</span>
              </p>
            </div>
          </div>
            {/* Section for Image and Name */}
            <div className="flex  ">      
                <img
                  loading="lazy"
                  src="src/assets/1_Clipped_image_20240920_165434.png"
                  className="  w-auto  md:h-[70vh] sm:h-[60vh] xxsm:h-[50vh] xxxxsm:h-[30vh]  "  
                />
                {/* I shall fix this image shortly*/}
                
                {/* Name positioned at the bottom right of the image */}
                  <p className="grid place-items-end leading-[1.08] md:text-[1.3rem] xxxsm:text-[1.15rem] font-bold  text-yellow-900">Adam 
                    <br/>
                  Mwaniki</p>
            </div>
        </div>
      </div>
    </section>
    </>
  );
}
