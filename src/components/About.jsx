import React from 'react'

const About = () => {
  return (
    <div className='w-full p-[5vw] bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4vw] tracking-tight'>I am Nishant Chamate, a B.Tech student at SPIT with skills in C++, Python, SQL, Node.js, MongoDB, Express.js and React.js. I’ve developed real-time apps, secure voting systems, and data dashboards. With hands-on internship experience and a LeetCode peak rating of 1543, I’m driven by problem-solving and building impactful tech solutions.</h1>

        <div className='flex gap-5 w-full border-t-[1px] pt-[3vw] border-[#99aa5d] mt-[4vw]'>
            <div className='flex  ml-[22vw] center'>
                <h1 className='text-[5vw] flex'>My Approach: </h1>
                <button className='flex gap-10 items-center px-[2vw] py-[1vw] bg-zinc-900 mt-[0.8vw] ml-[3vw] rounded-full text-white uppercase'>Read More 
                <div className='flex w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default About