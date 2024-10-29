import React from 'react'

const Footer = () => {
  return (
    <div data-scroll data-scroll-speed="0.2" className='flex gap-[2vw] w-full h-screen bg-zinc-900 p-[4vw] -mt-[10vw]'>

        <div className='w-1/2 h-full flex flex-col justify-between'>
            <div className="heading">
                <h1 className='mt-[15vw] text-[7vw] uppercase leading-none -mb-[1vw] font-bold'>Con-Nect</h1>
            </div>
            <h1>Nishant Chamate</h1>
            
        </div>

        <div className='w-1/2'>
        <h1 className='ml-[25vw] mt-[10vw] text-[6vw] uppercase leading-none font-bold'>Links</h1>
        <div className='ml-[26vw] details font-["Neue_Montreal"] mt-[4vw]'>
            {["Instagram", "Linkedin", "Facebook", "Twitter"].map((item, index) => (
                <a key={index} className=' block text-[1.5vw] font-light' href="#">{item}</a>
            ))}
        </div>
        <h2 className='ml-[30vw] mt-[12vw] text-zinc-400'>&copy;Nishant Chamate 2024</h2>
        </div>
    </div>
  )
}

export default Footer