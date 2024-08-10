import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='bg-[#f7f7f7] p-10 text-center'>
        <p className='text-xl'>© 2024 All Rights Reserved</p>
        <div>
            <p>Designed and Developed by <span className='font-bold'>Gopi</span></p>
            <button className='px-5'><FaGithub className='text-3xl inline-block mt-4 hover:text-[#a3a2a2]'/></button>
            <button className='px-5'><FaTwitter className='text-3xl inline-block mt-4 hover:text-[#a3a2a2]'/></button>
            <button className='px-5'><FaInstagram className='text-3xl inline-block mt-4 hover:text-[#a3a2a2]'/></button>
            <button className='px-5'><FaLinkedin className='text-3xl inline-block mt-4 hover:text-[#a3a2a2]'/></button>
        </div>
    </div>

  )
}

export default Footer