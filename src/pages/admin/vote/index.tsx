import React from 'react'
import Image from 'next/image'
import PlusWhiteIcon from '@/assets/icons/plus-white.svg'

const Vote = () => {
  return (
    <div>
      <div>
        <div className='mb-5 bg-white absolute left-0 right-0 top-0 z-50 p-3 px-6 shadow-sm'>
          <h1 className='text-2xl font-semibold'>Voting</h1>
        </div>
        <div className='pt-14 pb-24'>
          <table className="table">
            <tbody>
              {
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((el, i) => (
                  <tr key={i}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div>
                          <div className="font-bold">ID: 2024</div>
                          <div className="text-sm opacity-50">Closed</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      Nama Pemenang
                    </td>
                    <th className='text-right'>
                      <button className="btn btn-neutral btn-sm">
                        Detail
                      </button>
                    </th>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <button className='btn btn-lg btn-primary border shadow-lg absolute bottom-24 right-5 h-20 w-20 rounded-full z-50'>
          <Image src={PlusWhiteIcon} width={20} height={20} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Vote