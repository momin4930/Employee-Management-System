import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-yellow-600 text-white text-center text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 focus:outline-none'>
        <h2 className='text-3xl font-bold'>{data.taskNumbers.newTask}</h2>
        <h3 className='text-xl font-medium '>New Task</h3>
      </div>

      
      <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-300 text-white text-center text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:bg-blue-500 focus:ring-4 focus:ring-blue-800 focus:outline-none'>
        <h2 className='text-3xl font-bold text-black'>{data.taskNumbers.completed}</h2>
        <h3 className='text-xl font-medium text-black'>Completed Task</h3>
      </div>
      
     
      <div className='rounded-xl w-[45%] py-6 px-9 bg-green-700 text-white text-center text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:bg-green-500 focus:ring-4 focus:ring-green-300 focus:outline-none'>
        <h2 className='text-3xl font-bold'>{data.taskNumbers.active}</h2>
        <h3 className='text-xl font-medium'>Active Task</h3>
      </div>


      {/* <div className='rounded-xl w-[45%] py-6 px-9 bg-red-600'> */}
      <div className='rounded-xl w-[45%] py-6 px-9 bg-red-600 text-white text-center text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:bg-red-500 focus:ring-4 focus:ring-red-300 focus:outline-none'>
        <h2 className='text-3xl font-bold'>{data.taskNumbers.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
