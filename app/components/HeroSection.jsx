'use client'
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  return ( 
    <div className='grid grid-cols-1 lg:grid-cols-12 pt-32 md:pt-48' id='herosection'> 
    <div className='col-span-8 place-self-center text-center sm:text-left'>
    <section>
         <h1 className="lg:text-6xl sm:text-5xl text-4xl font-extrabold mb-5">
         <span>Hello, I&#39;m {''}</span>
         <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Gopi',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'a Web Developer',
        1000,
        'a Programmer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity} 
        />
         </h1>
         <p className='text-[#717374] text-base sm:text-lg lg:text-xl mb-6'>
         I’m a tech-savvy student specializing in web development and passionate about building innovative digital solutions.
         </p>
         <div>
         <button className="px-4 py-2 w-full sm:w-fit rounded-md border bg-[#ff6262] text-white font-bold text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md mr-4 mb-4 sm:mb-0 md:text-xl">
            Hire Me
         </button>
         <button className="px-4 py-2 w-full sm:w-fit rounded-md border bg-[#ff6262] text-white font-bold text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md md:text-xl"
         onClick={() => window.open('./resume.pdf')}
         >
            Resume
         </button>
         </div>
    </section>
    </div>
    <div className='col-span-4 place-self-center mt-4 lg:mt-0'>
    <div className='relative'>
    <Image
        src='/images/developer.png'
        alt='Hero Image'
        height={500}
        width={500}
    />
    </div>
    </div>
    </div>
  )
}

export default HeroSection
