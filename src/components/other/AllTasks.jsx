import React from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { useContext } from 'react'

const AllTasks = () => {

   const [userData,setUserData]= useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5  '>
      
      <div className='bg-purple-400 mb-2 px-2 py-4 flex justify-between rounded-lg'>
        <h2 className='text-lg font-medium w-1/5 '>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5 '>New Task</h3>
        <h5 className='text-lg font-medium w-1/5 '>Active</h5>
        <h5 className='text-lg font-medium w-1/5 '>Completed</h5>
        <h5 className='text-lg font-medium w-1/5 '>Failed</h5>
        </div>

    <div className=' overflow-auto'>
    {userData.map(function(elem,idx){
        return <div key={idx} className='border-2 border-emerald-700 mb-2 px-2 py-4 flex justify-between rounded'>
        <h2 className='text-lg font-medium w-1/5 '>{elem.firstname}</h2>
        <h3 className='text-lg font-medium w-1/5 text-blue-400'>{elem.taskNumbers.newTask}</h3>
        <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskNumbers.active}</h5>
        <h5 className='text-lg font-medium w-1/5 text-green-600'>{elem.taskNumbers.completed}</h5>
        <h5 className='text-lg font-medium w-1/5 text-red-400'>{elem.taskNumbers.failed}</h5>
        </div>
      })}
    </div>
      

        {/* <div className='bg-green-400 mb-2 px-2 py-4 flex justify-between rounded'>
        <h2>Momin</h2>
        <h3>Make a Ui design</h3>
        <h5>Status</h5>
        </div>

        <div className='bg-yellow-400 mb-2 px-2 py-4 flex justify-between rounded'>
        <h2>Momin</h2>
        <h3>Make a Ui design</h3>
        <h5>Status</h5>
        </div>

        <div className='bg-purple-400 mb-2 px-2 py-4 flex justify-between rounded'>
        <h2>Momin</h2>
        <h3>Make a Ui design</h3>
        <h5>Status</h5>
        </div> */}
    </div>
  )
}

export default AllTasks
