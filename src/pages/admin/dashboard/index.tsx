import React from 'react'
import Image from 'next/image'
import UserSample from '@/assets/images/user-sample.jpg'

const Dashboard = () => {
  return (
    <div>
      <div className='mb-5 bg-white absolute left-0 right-0 top-0 z-50 p-3 px-6 shadow-sm'>
        <h1 className='text-2xl font-semibold'>Dashboard</h1>
      </div>
      <div className='pt-14'>
        <div className='mb-3'>
          <h1 className='text-lg font-semibold'>Voting ID: 2024</h1>
        </div>
        <div className='grid grid-cols-1 gap-3'>
          <div className='col-span-1 rounded-box border shadow p-4 flex justify-between items-center space-x-4'>
            <div>
            <Image src={UserSample} width={80} height={80} className='rounded-box' alt="" />
            </div>
            <div className='flex-1'>
              <p>ID: 122020</p>
              <p>Nama: Jho Doe</p>
              <p>Jumlah Voting: 120</p>
            </div>
          </div>
          <div className='col-span-1 rounded-box border shadow p-4 flex justify-between items-center space-x-4'>
            <div>
            <Image src={UserSample} width={80} height={80} className='rounded-box' alt="" />
            </div>
            <div className='flex-1'>
              <p>ID: 122020</p>
              <p>Nama: Jho Doe</p>
              <p>Jumlah Voting: 120</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard