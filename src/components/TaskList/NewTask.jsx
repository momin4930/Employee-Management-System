import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className=' flex-shrink-0 h-full w-[300px] p-5  bg-yellow-500 rounded-xl'>
    <div className='flex justify-between items-center'>
        <h3 className='bg-green-700 text-sm px-3 py-1 rounded-xl'>{data.category}</h3>
        <h4 className='text-sm'>{data.date}</h4>
    </div>

    <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
    <p className='text-sm mt-2'>
        {data.description}  </p>
    <div className='mt-4'>
        <button className='bg-blue-500 py-1 px-2 text-sm rounded-xl'>Accept Task</button>
    </div>
</div>
  )
}

export default NewTask
