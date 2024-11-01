import { motion, useAnimation } from 'framer-motion';
import React from 'react'

const Features = () => {

  const cards = [useAnimation(), useAnimation()]

  const handleHover = (index) => {
    cards[index].start({y: "0"})
  }

  const handleHoverEnd = (index) => {
    cards[index].start({y: "100%"})
  }
  
  return (
    <div className='w-full py-[1vw] mb-[2vw]'>
        <div className='w-full px-[3vw] border-b-[1px] border-zinc-700 pb-[1vw]'>
            <h1 className='text-[7vw] font-["Neue_Montreal"] tracking-tight'>Featured projects</h1>
        </div>

        {/* cards */}
        <div className='px-[5vw]'>
            <div className="cards w-full flex gap-[4vw] mt-[7vw]">

            {/* 1st card */}
              <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={() => handleHoverEnd(0)} className='relative cardcontainer w-1/2 h-[75vh] '>
                <h1 className='absolute flex right-0 z-[9] text-[7vw] overflow-hidden leading-none tracking-tighter translate-x-1/2 top-1/2 -translate-y-1/2 text-[#fff9]'>
                  {"VoteINDIA".split("").map((item, index) => (
                    <motion.span initial={{y: "100%"}} animate={cards[0]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*0.05}} className='inline-block font-bold' key={index}>{item}</motion.span>
                ))}</h1>
                <div className='card w-full h-full rounded-xl overflow-hidden'>
                    <img className='w-full h-full bg-cover ' src="https://www.svgrepo.com/show/449452/vote.svg" alt="" />
                </div>
              </motion.div>

              {/* 2nd card */}
              <motion.div onHoverStart={() => handleHover(1)} onHoverEnd={() => handleHoverEnd(1)}  className='relative cardcontainer w-1/2 h-[75vh] '>
                <h1 className='absolute flex overflow-hidden right-full z-[9] text-[6vw] leading-none tracking-tighter translate-x-1/2 top-1/2 -translate-y-1/2 text-[#fff9]'>{"CCFD".split("").map((item, index) => (
                    <motion.span initial={{y: "100%"}} animate={cards[1]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*0.05}} className='inline-block font-bold' key={index}>{item}</motion.span>
                ))}</h1>
                <div className='card w-full h-full rounded-xl overflow-hidden'>
                    <img className='w-full h-full bg-cover mt-[7vw]' src="https://www.svgrepo.com/show/485094/credit-card-part-2.svg" alt="" />
                </div>
              </motion.div>
             
            </div>
        </div>
        
    </div>
  )
}

export default Features;