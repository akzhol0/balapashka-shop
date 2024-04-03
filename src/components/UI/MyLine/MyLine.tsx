import React from 'react';

interface MyLineProps {
    children: React.ReactNode;
}

function MyLine({children} : MyLineProps) {
  return (
    <div className='w-full h-[150px] flex justify-center items-center text-white font-Alumni text-4xl md:text-6xl'>
        <div className="w-full h-[1px] bg-[#ed802e]"></div>
        <p className='cursor-default px-[30px]'>{children}</p>
        <div className="w-full h-[1px] bg-[#ed802e]"></div>
    </div>
  )
}

export default MyLine;