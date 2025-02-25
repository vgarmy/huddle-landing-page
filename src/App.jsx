
import "./App.css";
import logo from "./assets/logo.svg";
import mockup from "./assets/illustration-mockups.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full relative text-white" role="main">
      <div className="w-full max-w-[1440px] flex flex-col items-center md:items-start md:flex-col px-6 md:px-0">
        <div className="w-full flex justify-start mb-[6rem] md:mt-0 mt-[2rem]">
          <img src={logo} alt="Huddle Logo" className="w-[150px] md:w-[180px]" />
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start w-full">
          <div className="flex w-full md:w-[55%] md:mb-0 mb-[2rem]">
            <img src={mockup} alt="Mockup" className="w-full object-contain" />
          </div>
          <div className="flex flex-col pt-0 md:pt-[2rem] gap-[2rem] w-full md:w-[45%] text-center md:text-left">
            <h1 className="text-[2rem] md:text-[2.5rem] md:text-[3rem] font-bold leading-tight">
              Build The Community Your Fans Will Love
            </h1>
            <p className="text-[1.2rem]">
              Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
              Create connections with your users as you engage in genuine discussion.
            </p>
            <button className="w-[200px] mx-auto md:mx-0 px-6 py-4 bg-white text-[var(--Violet)] text-xl shadow-lg rounded-full hover:text-white hover:bg-[var(--Soft-Magenta)] transition duration-300">
              Register
            </button>
          </div>
        </div>
        <div className="flex gap-4 justify-center md:justify-end w-full mt-8 mb-8 md:mb-0">
          <div className="h-12 w-12 border border-white rounded-full flex items-center justify-center hover:bg-[var(--Soft-Magenta)] cursor-pointer">
            <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
          </div>
          <div className="h-12 w-12 border border-white rounded-full flex items-center justify-center hover:bg-[var(--Soft-Magenta)] cursor-pointer">
            <FontAwesomeIcon icon={faGithub} className="text-xl" />
          </div>
          <div className="h-12 w-12 border border-white rounded-full flex items-center justify-center hover:bg-[var(--Soft-Magenta)] cursor-pointer">
            <FontAwesomeIcon icon={faInstagram} className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
