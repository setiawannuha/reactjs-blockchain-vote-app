import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
import Image from 'next/image'

interface IStateVoting {
  voteId: string
  voteName: string
  candidateId: string
  candidateName: string
  voteTotal: string
  picture: string
}
const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [voting, setVoting] = useState<IStateVoting[]>([])
  const getVoting = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/vote/2024', {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })
      const data = response.data.data
      setVoting(data)
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    getVoting()
  }, [])
  if(isLoading){
    return (
      <div className='flex flex-col space-y-3 justify-center items-center h-[90vh]'>
        <div>
          <h1 className=''>Loading...</h1>
        </div>
      </div>
    )
  }
  return (
    <div>
      <div className='mb-5 bg-white absolute left-0 right-0 top-0 z-50 p-3 px-6 shadow-sm'>
        <h1 className='text-2xl font-semibold'>Beranda</h1>
      </div>
      <div className='flex h-screen flex-col justify-center items-center'>
        <div className='mb-3 text-center'>
          <h1>Pemilihan Sedang Berlangsung</h1>
          <p>ID Voting: {voting[0].voteId}</p>
          <p>{voting[0].voteName}</p>
        </div>
        <div className='grid grid-cols-1 gap-3 mb-3'>
          {
            voting.map((item, index) => {
              return (
                <div key={index} className='cursor-pointer col-span-1 rounded-box border shadow p-4 flex justify-between items-center space-x-4'>
                  <div>
                    <Image src={item.picture} width={80} height={80} className='rounded-box' alt="" />
                  </div>
                  <div className='flex-1'>
                    <p>ID: {item.candidateId}</p>
                    <p>Nama: {item.candidateName}</p>
                    <p>Terpilih: {item.voteTotal}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        {/* <div>
          <Link href="/user/vote" className="btn btn-primary w-full">Voting Sekarang</Link>
        </div> */}
      </div>
    </div>
  )
}

export default Home