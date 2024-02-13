import React from 'react'
import WelcomeBanner from './_components/WelcomeBanner'

function Courses() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 p-5'>
      {/* Left container */}
      <div className='col-span-2'>
        {/* Banner */}
        <WelcomeBanner />
      </div>
      {/* Right container */}
      <div>
        Right section
      </div>
    </div>
  )
}

export default Courses