'use client'

import React from 'react'
import Image from 'next/image'

const handleSubmit = (e) => {
    e.preventDefault()
    const data  = [
        {
            name: e.target.name.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        }
    ]
    console.log(data)
    alert('Form Submitted')
}


const Contactsection = () => {
  return (
    <div className='grid md:grid-cols-12 grid-cols-1 mb-32 px-10 my-14 pt-24' id='contactsection'>
        <div className='md:col-span-6 col-span-12'>
            <h1 className='text-3xl font-semi-bold text-center'>Contact Me</h1>
            <form className='mt-4' onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 gap-4'>
                    <input type='text' placeholder='Full Name' className='border p-2 rounded-md' name='name'/>
                    <input type='email' placeholder='Email' className='border p-2 rounded-md' name='email'/>
                    <input type='text' placeholder='Subject' className='border p-2 rounded-md'name='subject'/>
                    <textarea placeholder='Message' className='border p-2 h-24 rounded-md' name='message'></textarea>
                    <button className="px-6 py-2 w-fit rounded-md border bg-[#ff6262] text-white font-bold text-base hover:-translate-y-1 transform transition duration-200 hover:shadow-md place-self-center">
                      Send Message
                    </button>
                </div>
            </form>
        </div>
        <div className='md:col-span-6 col-span-12 flex justify-center ml-10 my-10 md:my-0'>
            <Image
                src='/images/contact-us.webp'
                alt='Contact Image'
                width={400}
                height={400}
            />
        </div>      
    </div>
  )
}

export default Contactsection