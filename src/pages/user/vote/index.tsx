import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import UserSample from '@/assets/images/user-sample.jpg'
import axios from 'axios'

interface IStateVoting {
  voteId: string
  voteName: string
  candidateId: string
  candidateName: string
  voteTotal: string
  picture: string
}

const Vote = () => {

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

  const [selectedCandidate, setSelectedCandidate] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCandidate(event.target.value);
  };
  const selectCandidate = async (e:React.MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault()
      if(!selectedCandidate || selectedCandidate === ''){
        setErrorMessage('Silahkan pilih kandidat terlebih dahulu!')
        return
      }
      setErrorMessage("")
      const response = await axios.post('http://localhost:3001/api/vote', {
        candidateId: parseInt(selectedCandidate)
      }, {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })
      const data = response.data
      if(data.message === 'vote success'){
        setErrorMessage("")
        setSuccessMessage(data.message)
        return
      }
      setErrorMessage(data.message)
    } catch (error) {
      console.log(error);
    }
  }
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
      <h1 className='text-2xl font-semibold'>Voting</h1>
    </div>
    <div className='pt-14'>
      <div className='mb-3'>
        <h1 className='text-lg font-semibold'>Voting ID: {voting[0].voteId}</h1>
        <p>{voting[0].voteName}</p>
      </div>
      <div className='grid grid-cols-1 gap-3 mb-3'>
        {
          voting.map((item, index) => {
            return (
              <label key={index} className='label cursor-pointer col-span-1 rounded-box border shadow p-4 flex justify-between items-center space-x-4'>
                <div>
                  <input onChange={handleOptionChange} value={item.candidateId} type="radio" name="candidate-radio" className="radio radio-primary" />
                </div>
                <div>
                  <Image src={item.picture} width={80} height={80} className='rounded-box' alt="" />
                </div>
                <div className='flex-1'>
                  <p>ID: {item.candidateId}</p>
                  <p>Nama: {item.candidateName}</p>
                </div>
              </label>
            )
          })
        }
      </div>
      <div className='mb-3'>
        <button className="btn btn-primary w-full" onClick={selectCandidate}>Simpan Pilihan</button>
      </div>
      <div>
        {
          errorMessage!==''?(
            <div className="alert alert-error flex p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{errorMessage}</span>
            </div>
          ):successMessage!==''?(
            <div className="alert alert-success flex p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{successMessage}</span>
            </div>
          ):null
        }
      </div>
    </div>
    </div>
  )
}

export default Vote