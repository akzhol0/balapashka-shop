import React from 'react'
import Header from './header/Header'
import { Link } from 'react-router-dom'

function UnknownPage() {
  return (
    <div>
      <Header backgroundOnOff={false}/>
      <div className='w-100 h-screen flex flex-col items-center'>
        <h1 className='text-white text-[60px] text-center'>Unknown Page</h1>
        <Link to='/'><button className='text-white bg-black px-[60px] text-[60px] text-cente'>Main Page?</button></Link>
      </div>
    </div>
  )
}

export default UnknownPage