import React, { useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import code from '../imgs/code.png';
import profile from '../imgs/dev-ed-wave.png';
import design from '../imgs/design.png';
import consult from '../imgs/consulting.png';
import w1 from '../imgs/web1.png';
import w2 from '../imgs/web2.png';
import w3 from '../imgs/web3.png';
import w6 from '../imgs/web6.png';
import w5 from '../imgs/web5.png';


export default function HomeComponent() {
 
  const [darkMode, setDarkmode] = useState(false); 
 
  return (  
    <div className={darkMode ? "dark":""}>
    <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-slate-400'>
      <section className='min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-2xl'>Shaoor</h1>
          <ul className='flex'>
            <li className='cursor-pointer text-2xl mt-2'><BsFillMoonStarsFill onClick={() => setDarkmode(!darkMode) }/></li>
            <li className= 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg py-2 px-4 ml-8 bg-cyan-500 '><a href="#">Resume</a></li>
          </ul>
        </nav>

        <div className='text-center p-10 '>
          <h2 className='text-5xl text-teal-600 font-medium md:text-6xl'>Shaoor Shah</h2>
          <h3 className= 'text-2xl py-4 md:text-3xl'>Developer & Designer</h3>
          <p className='text-md leading-6 text-gray-800 md:text-xl mx-auto max-w-lg'> Freelancer provide the services for programmer and design content needs. Join me down below and let's get cracking.</p>
        </div>   
        <div className='flex text-3xl justify-center gap-16 py-2 text-gray-600'>
          <AiFillTwitterCircle />
          <AiFillYoutube />
          <AiFillLinkedin/>
         </div>
        
        <div className='mx-auto my-10 bg-gradient-to-b from-teal-500 rounded-full h-60 w-60 md:w-80 md:h-80 lg:w-100 lg:h-100 '>
  <img src={profile} alt="Developer" />
</div>
 </section>
      <section>
        
        <div>
          <h3 className='text-3xl py-2'>Services I offer </h3>
          <p className='text-md py-2 leading-8 text-gray-800'>
            🚀 <span className='font-bold text-teal-500'>Mobile App Development with Flutter: </span>
Harness the power of Flutter for cutting-edge, cross-platform mobile applications. I specialize in crafting visually stunning and high-performance mobile apps that deliver a seamless user experience on both iOS and Android platforms.
          </p>
          <p className='text-md py-2 leading-8 text-gray-800'>
            🚀 <span className='font-bold text-teal-500'>🌐 Web Development with React: </span>
Transform your ideas into engaging and dynamic web applications with React. I bring creativity and functionality together to build responsive and user-friendly web solutions that captivate your audience.          </p>
        <p className='text-md py-2 leading-8 text-gray-800'>
            🚀 <span className='font-bold text-teal-500'>🌐 REST API Development: </span>

Need a powerful and secure API to fuel your applications? I specialize in designing and implementing RESTful APIs that enable seamless communication between your front-end and back-end systems, ensuring smooth data flow.          </p>
        <p className='text-md py-2 leading-8 text-gray-800'>
            🚀 <span className='font-bold text-teal-500'>🛠️ Full-Stack Development with Node.js and Express: </span>
As a full-stack developer, I leverage the versatility of Node.js and the simplicity of Express to create robust and scalable server-side applications. From database design to server deployment, I handle it all.          </p>
        </div>

       <div className='lg:flex gap-10'>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <img src={design} alt="design logo" className='h-30 w-30 mx-auto' />
            <h3 className='text-lg font-medium pt-8 pb-2'>Eye capturing Designs</h3>
            <p className='py-2 '>Creating elegant , industry specific , customer centric designs for you business.</p>
            <h4 className='text-teal-500 py-4'>Font End Frameworks I use</h4>
            <p className='py-1 text-gray-900'>Flutter</p>
          <p className='py-1 text-gray-900'>React</p>
          <p className='py-1 text-gray-900'>Tailwind</p>
        </div>
        
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <img src={code} alt="design logo" className='h-30 w-30 mx-auto' />
            <h3 className='text-lg font-medium pt-8 pb-2'>Clean Coding</h3>
            <p className='py-2 '>Creating elegant , industry specific , customer centric designs for you business.</p>
            <h4 className='text-teal-500 py-4'>Font End Frameworks I use</h4>
            <p className='py-1 text-gray-900'>Flutter</p>
          <p className='py-1 text-gray-900'>React</p>
          <p className='py-1 text-gray-900'>Node</p>
          
          
        </div>
        
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <img src={consult} alt="design logo" className='h-30 w-30 mx-auto' />
            <h3 className='text-lg font-medium pt-8 pb-2'>Purpose Centric Consultation</h3>
            <p className='py-2 '>Creating elegant , industry specific , customer centric designs for you business.</p>
            <h4 className='text-teal-500 py-4'>Font End Frameworks I use</h4>
            <p className='py-1 text-gray-900'>Web Apps</p>
            <p className='py-1 text-gray-900'>Mobile Apps</p>
          </div>
</div>
        <div>
          <h3 className='text-3xl py-2'>Portfolio</h3>
           <p className='text-md py-2 leading-8 text-gray-800'>
             <span className='font-bold text-teal-500'>✨ Flutter & React Magic:</span>

Crafting captivating cross-platform mobile apps with Flutter and dynamic web solutions using the power of React.

<span className='font-bold text-teal-500'>🚀 Node.js Alchemy:</span>
Transforming ideas into scalable, secure, and efficient full-stack applications with Node.js and Express.

<span className='font-bold text-teal-500'>🌐 API Architect:</span>
Architecting seamless REST APIs to fuel robust communication between front-end and back-end systems for unparalleled digital experiences.          </p>
        </div>
        <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
          <div className="basis-1/3 flex-1"><img className='round-lg object-cover h-100% w-100%' src={w1} alt="w1" /></div>
          <div className="basis-1/3 flex-1"><img className='round-lg object-cover h-100% w-100%' src={w2} alt="w2" /></div>
          <div className="basis-1/3 flex-1"><img className='round-lg object-cover h-100% w-100%' src={w3} alt="w3" /></div>
          <div className="basis-1/3 flex-1"><img className='round-lg object-cover h-100% w-100%' src={w5} alt="w5" /></div>
          <div className="basis-1/3 flex-1"><img className='round-lg object-cover h-100% w-100%' src={w6} alt="w6" /></div>
          <div className="basis-1/3 flex-1"><img className='round-lg object-cover h-100% w-100%' src={w2} alt="w6" /></div>
          
        </div>
</section>
      </main>
    </div>
      
    )
}
