import Image from 'next/image'
import React from 'react'

function WelcomeBanner() {
  return (
    <div className='flex gap-5 items-center bg-white rounded-xl p-5'>
      <Image src='/purple_panda_01_180px.png' alt='purple-panda logo' width={100} height={100} />
      <div>
        <h2 className='font-bold text-[29px]'>
          Welcome to <span className='text-primary'>FakeITDevTeam</span> Academy
        </h2>
        <h2 className='text-gray-500'>Explore, learn and build all real life projects</h2>
      </div>
    </div>
  )
}

export default WelcomeBanner