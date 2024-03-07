import React from 'react'
import Image from 'next/image'
import UserSample from '@/assets/images/user-sample.jpg'
import PlusWhiteIcon from '@/assets/icons/plus-white.svg'

const Candidate = () => {
  return (
    <div>
      <div>
        <div className='mb-5 bg-white absolute left-0 right-0 top-0 z-50 p-3 px-6 shadow-sm'>
          <h1 className='text-2xl font-semibold'>Kandidat</h1>
        </div>
        <div className='pt-14 pb-24'>
          <table className="table">
            <tbody>
              {
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((el, i) => (
                  <tr key={i}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <Image src={UserSample} width={100} height={100} alt="" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Hart Hagerty</div>
                          <div className="text-sm opacity-50">ID: 129877</div>
                        </div>
                      </div>
                    </td>
                    <th className='text-right'>
                      <button className="btn btn-neutral btn-sm">
                        Edit
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

export default Candidate