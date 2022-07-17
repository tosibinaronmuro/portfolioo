import React from 'react'
import {useDispatch} from 'react-redux'
import {toggleTheme} from '../Components/Theme'
import {useSelector} from 'react-redux'

function Toggle() {
    const dispatch=useDispatch()
    const themee=useSelector(state=>state.theme)
  return (
    <div className='absolute top-0 right-9 m-3'> 
        
        
<label htmlFor="default-toggle" onChange={()=>{
    dispatch(toggleTheme());
     
}} className="inline-flex relative items-center cursor-pointer ">
  <input type="checkbox" value="" id="default-toggle" className="sr-only peer"></input>
  <div className="w-11 h-6 bg-gray-200     rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span className={themee.light ? "ml-3 text-sm font-medium text-gray-900  " : "ml-3 text-sm font-medium text-gray-300  "}> {!themee.light ? 'light Mode' : 'dark Mode'}</span>
</label>

    </div>
  )
}

export default Toggle