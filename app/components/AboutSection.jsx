'use client'

import React,{useTransition,useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'


const tabData = [
  {
    title: 'Skills',
    content: (
      <ul className='list-disc pl-2'>
        <li>HTML,CSS,JS</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Golang</li>
      </ul>
    )
  },
  {
    title: 'Experience',
    content: (
      <div>
      <h1 className='font-semibold'>Self-Taught Web Developer</h1>
      <p>June 2024 – Present</p>
      <ul className='list-disc'>
        <li>Developed a personal portfolio website using Next.js and Tailwind CSS</li>
        <li>Created a full-stack gaming forum using EJS, Node.js, Express, and PostgreSQL</li>
        <li>Successfully gained entry into the Dev Club at IIT Hyderabad through the quality of my projects and dedication to learning.</li>
      </ul>
      </div>
    )
  },
  {
    title: 'Education',
    content: (
      <div>
      <h1 className='font-semibold'>Indian Institute of Technology Hyderabad</h1>
      <p>Btech in Mathematics and Computing</p>
      <p>July 2023 – Present</p>
      <ul className='list-disc'>
        <li>Relevant Coursework: Data Structures and Algorithms, Linear Algebra, Probability and Statistics, Real Analysis.</li>
      </ul>
      </div>
    )
  }
]


const AboutSection = () => {
  const [tab, setTab] = useState('Skills');
  const [isPending,startTransition] = useTransition();

  const handleTabChange = (tab) => {
    startTransition(() => {
      setTab(tab);
    });
  };
  return (
    <section id='aboutsection' className='pt-20'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16  xl:px-16'>
           <div className='hidden md:flex place-self-center'>
                <Image src='/images/coding.png' alt='about' width={600} height={600} className='rounded-lg'/>
           </div>
           <div className='mt-10 md:mt-0 flex flex-col h-full'>
              <h2 className='text-4xl font-bold mb-4'>About Me</h2>
            <p className='text-base lg:text-lg'>
            I’m Gopi, a sophomore at IIT Hyderabad pursuing Btech in Mathematics and Computing. Passionate about web development and competetive programming, I actively contribute to the Dev Club at my college. Outside of tech, I enjoy painting, playing video games, volleyball.
            </p>
            <div className='flex flex-row mt-8'>
                <TabButton active={tab === 'Skills'} selectTab={() => handleTabChange('Skills')}>Skills</TabButton>
                <TabButton active={tab === 'Experience'} selectTab={() => handleTabChange('Experience')}>Experience</TabButton>
                <TabButton active={tab === 'Education'} selectTab={() => handleTabChange('Education')}>Education</TabButton>
            </div>
            <div className='mt-5'>
                {isPending ? 'Select a tab' : tabData.find((data) => data.title === tab).content}
            </div>
           </div>
        </div>
    </section>
  )
}

export default AboutSection