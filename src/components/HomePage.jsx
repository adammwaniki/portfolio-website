import adamImage from '../assets/images/adam-image-full.svg';

export default function HomePage() {
  return (
    <>
    <section id="home">
      {/* Homepage container */}
      <div className="flex font-display min-h-[100svh] justify-center w-full ">  
        {/* subcontainer for all */}
        <div className="flex flex-col lg:flex-row w-11/12 sm:gap-[0.8vh] xsm:gap-[3vh] xxsm:gap-[7vh] xxxsm:gap-[12vh] xxxxsm:gap-[30vw] justify-center items-center pt-[17.6vh] md:pb-[11.7vh]">
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
            <div className="flex ml-16 md:ml-0 mb-12 md:mb-0 xxxxsm:-mt-10 md:mt-20 lgs:-mt-1">      
                <img
                  loading="lazy"
                  src={adamImage}
                  className="  w-auto  md:h-[35vh] lgs:h-[70vh] sm:h-[60vh] h-[30vh]  "  
                />
                
                
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
