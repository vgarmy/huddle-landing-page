import { useState } from 'react'
import './App.css'
import logo from './assets/logo.svg'
import mockup from './assets/illustration-mockups.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

function App() {

  return (
    <div className='flex justify-center items-center h-screen' role="main">
      <div className='w-[1440px] flex flex-col'>
        <div className='mb-[6rem]'>
          <img src={logo} />
        </div>
        <div className="flex flex-row gap-[1rem] items-start">
          <div className="flex h-full w-[55%]">
            <img src={mockup} alt="Mockup" />
          </div>
          <div className="flex flex-col gap-4 w-[45%] pt-[3rem] text-start">
            <h1 className="text-[3rem] font-bold text-white">Build The Community Your Fans Will Love</h1>
            <p className="text-[1.2rem] text-white">
              Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
              Create connections with your users as you engage in genuine discussion.
            </p>
            <button className="w-[200px] px-6 py-4 bg-white text-[var(--Violet)] text-xl shadow-2xl rounded-full hover:text-white hover:bg-[var(--Soft-Magenta)]">
              Register
            </button>
          </div>
        </div>
        <div className='flex flex-row justify-end gap-4 mb-[2.5rem]'>
          <div className="h-12 w-12 border border-white rounded-full flex items-center justify-center hover:bg-[var(--Soft-Magenta)] text-white hover:text-white cursor-pointer">
            <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
          </div>
          <div className="h-12 w-12 border border-white rounded-full flex items-center justify-center hover:bg-[var(--Soft-Magenta)] text-white hover:text-white cursor-pointer">
            <FontAwesomeIcon icon={faGithub} className="text-xl" />
          </div>
          <div className="h-12 w-12 border border-white rounded-full flex items-center justify-center hover:bg-[var(--Soft-Magenta)] text-white hover:text-white cursor-pointer">
            <FontAwesomeIcon icon={faInstagram} className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
