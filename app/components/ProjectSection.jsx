import React from 'react'
import ProjectCard from './ProjectCard'


const projects = [
    {
        imgURL: '/images/projects/p2.png',
        title: 'Gaming Forum',
        description: 'This website is built with Node.js, Express, EJS, and PostgreSQL. It features secure password hashing, nested comments for threaded discussions, and an integrated rich text editor for enhanced post formatting. The platform ensures both security and a dynamic user experience.',
        projectLink: 'https://gamesphere-ahm7.onrender.com/home',
        projectCode: 'https://github.com/wanderer1011/gamesphere'
    },
    {
        imgURL: '/images/projects/p1_resize.png',
        title: 'Personal Portfolio',
        description: 'Portfolio website is crafted using React.js, offering a sleek and responsive design. It showcases my skills, projects, and experience with interactive elements and dynamic content. The React framework ensures a smooth, fast-loading user experience, making my portfolio both visually appealing and technically robust.',
        projectLink: 'https://www.google.com',
        projectCode: 'https://github.com/wanderer1011/portofolio-website'
    },
    {
        imgURL: '/images/projects/p3.png',
        title: 'Todist Clone',
        description: 'In progress...',
        projectLink: 'https://www.google.com',
        projectCode: 'https://www.google.com'
    },
]


const ProjectSection = () => {
  return (
    <div className='mx-auto pt-28' id='projectsection'>
        <h2 className='text-3xl font-semibold mb-12 text-center'>My Projects</h2>
        <div className='md:flex md:justify-center md:items-center md:gap-16 md:flex-wrap'>
            {projects.map((project) => (
                <div className='w-96'>
                <ProjectCard key={project.title} {...project}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProjectSection