import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-red-600 rounded-xl transition-all duration-300 transform hover:scale-105 hover:bg-red-500 focus:ring-4 focus:ring-red-400 focus:outline-none shadow-md hover:shadow-lg'>
    <div className='flex justify-between items-center'>
        <h3 className='bg-green-800 text-sm px-3 py-1 rounded-xl'>{data.category}</h3>
        <h4 className='text-sm'>{data.date}</h4>
    </div>

    <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
    <p className='text-sm mt-2'>
       {data.description}   </p>
    <div className="mt-2">
        <button className=' bg-red-300 rounded-xl text-black  py-1 px-2 text-sm'>Failed</button>
    </div>
</div>
  )
}

export default FailedTask
