import React from 'react'
import  {CodeBracketIcon}  from '@heroicons/react/24/solid'
import  {EyeIcon} from '@heroicons/react/24/solid'
import Link from 'next/link'

const ProjectCard = ({imgURL, title , description , projectLink , projectCode}) => {
  return (

    <div className='rounded-md border-[#dfdede] border-solid border-2 mb-10'>
        <div style={{background : `url(${imgURL})`, backgroundSize: "cover"}} className='h-52 md:h-72 group border-b-2 border-[#dfdede]'>
            <div className='h-full w-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-md'>
                <Link href={projectLink} className='border-2 border-white rounded-full mr-10 p-3 hover:border-[#dfdede]' target='_blank'>
                        <EyeIcon className='h-8 w-8 md:h-10 md:w-10 text-white hover:text-[#dfdede] '/>
                </Link>
                <Link href={projectCode} className='border-2 border-white rounded-full p-3 hover:border-[#dfdede]' target='_blank'>
                        <CodeBracketIcon className='h-8 w-8 md:h-10 md:w-10 text-white hover:text-[#dfdede]'/>
                </Link>
            </div>
        </div>
        <div className='p-4 h-64'>
            <h3 className='text-lg font-semibold'>{title}</h3>
            <p>{description}</p>
        </div>
    </div>

  )
}

export default ProjectCard