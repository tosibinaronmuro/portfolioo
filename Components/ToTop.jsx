import React from 'react'
import {Link} from 'next/link'
import {useRouter} from 'next/router'

function ToTop() {
    const router=useRouter()
    return (
         
            <div className='absolute animate-bounce bottom-0 right-0 m-5' ><button onClick={()=>{
                router.push('#home')
            }} type="button" className="text-yellow-700 border border-yellow-700 hover:bg-white-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1.5 text-center inline-flex items-center dark:border-yellow-500 dark:text-yellow-500 dark:hover:text-white dark:focus:ring-yellow-800">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
      <span className="sr-only">Icon description</span>
    </button>
            </div>
        
      )
}

export default ToTop
 
