import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'

interface IStateProfile {
  userId: number
  fullname: string
  username: string
  role: string,
  createdAt: string
  updatedAt: string
}
const Profile = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [profile, setProfile] = useState<IStateProfile>({
    createdAt: "",
    fullname: "",
    role: "",
    updatedAt: "",
    userId: 0,
    username: ""
  })
  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    localStorage.removeItem('token');
    window.location.href = '/auth/login';
  }
  const getProfile = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/me', {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })
      const data = response.data.data
      setProfile(data)
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    getProfile()
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
        <h1 className='text-2xl font-semibold'>Profile</h1>
      </div>
      <div className="pt-14 flex flex-col h-[80vh] justify-center items-center">
        <p className="py-1.5 text-xl">UserID: <span className="font-bold">{profile.userId}</span></p>
        <p className="py-1.5 text-xl">Nama: <span className="font-bold">{profile.fullname}</span></p>
        <p className="py-1.5 text-xl">Username: <span className="font-bold">{profile.username}</span></p>
        <div className="py-1.5 pt-6">
          <Link href="/user/profile/edit-password" className="btn btn-neutral w-40">Edit Password</Link>
        </div>
        <div className="py-1.5">
          <button className="btn btn-error w-40" onClick={handleLogout}>Keluar</button>
        </div>
      </div>
    </div>
  )
}

export default Profile