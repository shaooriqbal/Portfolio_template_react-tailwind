import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";



export default function HomeComponent() {
  return (
  
    <main className='bg-white px-10'>
      <section className='min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl font-extralight'>Codifying</h1>
          <ul className='flex'>
            <li className='cursor-pointer text-2xl mt-2'><BsFillMoonStarsFill/></li>
            <li className= 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg py-2 px-4 ml-8 bg-cyan-500 '><a href="#">Resume</a></li>
          </ul>
        </nav>

        <div className='text-center p-10 '>
          <h2 className='text-5xl text-teal-600 font-medium'>Shaoor Shah</h2>
          <h3 className= 'text-2xl py-4'>Developer & Designer</h3>
          <p className='text-md leading-6 text-gray-800'> Freelancer provide the services for programmer and design content needs. Join me down below and let's get cracking.</p>
        </div>   
        <div className='flex text-3xl justify-center gap-16 py-2 text-gray-600'>
          <AiFillTwitterCircle />
          <AiFillYoutube />
          <AiFillLinkedin/>
         </div>
        <div>
          <img src="dev-ed-wave.png" alt="" />
        </div>
     </section>

    </main>
    )
}
