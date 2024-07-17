import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import eurologo from "../assets/img/euro_logo.png";
import { FaTrophy } from "react-icons/fa";
import { FaHome } from "react-icons/fa";


function Header() {
  const navigate = useNavigate();
  const [trophy, setTrophy ] = useState(false);
  const handlePage = () => {
    setTrophy(!trophy);
  }

  useEffect(() => {
    if(trophy) {
      navigate("/hall-of-fame");
    } else {
      navigate("/")
    }
  }, [trophy])
  
  return (
    <div className='h-20 bg-euro-blue flex items-center justify-between px-3 md:h-28 lg:h-36'>
      <div className='h-full w-1/4 flex items-center ml-3'>
        <img className="h-auto w-12 md:w-20 lg:w-24" src={eurologo} alt="eurologo" />
      </div>
      <div className='w-2/4 flex-grow flex justify-center items-center'>
        <span className='text-white text-3xl md:text-3xl lg:text-4xl font-bold'>EUROSINDIC</span>
      </div>
      <div className='w-1/4 md:w-16 lg:w-20 flex justify-center' onClick={handlePage}>
        {
            !trophy ? 
            <FaTrophy className="text-2xl text-white" /> :
            <FaHome className='text-2xl text-white' />
        }
      </div>
    </div>
  )
}

export default Header