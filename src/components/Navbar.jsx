export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className="navbar font-display">
      {/* Home Link */}
      <div className="fixed top-0 left-0 p-4 text-[#7B3E19] font-bold">
        <button onClick={() => scrollToSection('home')}  className="p-2 rounded-lg hover:bg-[#7878804D] transition duration-300 text-[calc(2vw+0.75rem)] font-bold leading-none bg-[rgba(255,255,255,0.15)] backdrop-blur-md border border-[rgba(255,255,255,0.18)] shadow-md w-50% max-w-[20rem]">
          Home
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-center items-center text-[#7B3E19]">
        <div className="flex justify-center items-center bg-[rgba(255,255,255,0.15)] backdrop-blur-md border border-[rgba(255,255,255,0.18)] rounded-lg shadow-md p-3 w-50% max-w-[42rem]">
          <div className="flex flex-wrap lg:gap-24 md:gap-16 sm:gap-12 xsm:gap-10 xxsm:gap-8 xxxsm:gap-4 text-[calc(2vw+0.75rem)] font-bold leading-none whitespace-nowrap">
            <button onClick={() => scrollToSection('about')} className="p-2 rounded-lg hover:bg-[#7878804D] transition duration-300">About</button>
            <button onClick={() => scrollToSection('projects')} className="p-2 rounded-lg hover:bg-[#7878804D] transition duration-300">Projects</button>
            <button onClick={() => scrollToSection('blog')} className="p-2 rounded-lg hover:bg-[#7878804D] transition duration-300">Blog</button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 280px) {
          .navbar div {
            padding: 1.5px; /* Adjust padding for smaller screens */
          }
          .navbar div .flex {
            flex-direction: column; /* Stack items vertically */
            text-[calc(4vw+1rem)]; /* Larger text size for better readability */
          }
        }
      `}</style>
    </nav>
  );
}
