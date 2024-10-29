import React from 'react'

const Cards = () => {
  return (
    <div data-scroll data-scroll-speed="0.4" className='w-full h-screen bg-zinc-100 flex items-center px-[5vw] gap-[3vw]'>

        <div className='cardcontainer w-1/2 h-[25vw]'>
            <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
                <img className='w-[10vw]' src="https://www.svgrepo.com/show/512317/github-142.svg" alt="" />
                <button className='absolute left-[2vw] bottom-[2vw] px-[1vw] py-[0.5vw] border-2 rounded-full text-[#CDEA68] border-[#CDEA68]'>Github ↗</button>
            </div>
        </div>

        {/* 2nd card */}
        <div className='cardcontainer flex gap-[3vw] w-1/2 h-[25vw]'>
            <div className="card relative rounded-xl w-1/2 h-full bg-[#14332f] flex items-center justify-center">
            <img className='mt-[8vw] w-[10vw] -translate-y-[50%]' src="https://www.svgrepo.com/show/341985/leetcode.svg" alt="" />
            <button className='absolute left-[1vw] bottom-[1vw] px-[0.8vw] py-[0.3vw] border-[1px] rounded-full uppercase text-[1vw]'>Leetcode ↗ </button>
            </div>

            <div className="card relative rounded-xl w-1/2 h-full bg-[#14332f] flex items-center justify-center">
            <img className='mt-[5vw] w-[10vw] -translate-y-[40%]' src="https://www.svgrepo.com/show/512419/linkedin-161.svg" alt="" />
            <button className='absolute left-[1vw] bottom-[1vw] px-[0.8vw] py-[0.3vw] border-[1px] rounded-full uppercase text-[1vw]'>LinkedIn ↗</button>
            </div>
        </div>

    </div>
  )
}

export default Cards