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
    content: 'Lorem experience dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    title: 'Education',
    content: 'Lorem education dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
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