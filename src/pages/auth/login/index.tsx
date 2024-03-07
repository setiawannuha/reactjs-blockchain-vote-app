import React, {useState} from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

interface IStateForm{
  username: string
  password: string
}
const Login = () => {
  const router = useRouter()
  const [form, setForm] = useState<IStateForm>({
    username: '',
    password: ''
  })
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
    ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3001/api/login', form)
      const token = response.data.data.token
      localStorage.setItem('token', token);
      window.location.href = '/user/dashboard';
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='flex flex-col space-y-3 justify-center items-center h-[90vh]'>
      <div>
        <h1 className='text-2xl font-semibold uppercase'>Login</h1>
      </div>
      <form className='w-[90%]' onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor="" className='label'>Username</label>
          <input name='username' onChange={changeInput} type="text" placeholder="Username" className="input input-bordered w-full" />
        </div>
        <div className='mb-6'>
          <label htmlFor="" className='label'>Password</label>
          <input name='password' onChange={changeInput} type="password" placeholder="Password" className="input input-bordered w-full" />
        </div>
        <div className='flex justify-end space-x-3'>
          <button className="btn btn-link flex-1">Lupa Password</button>
          <button className="btn btn-primary flex-1">Masuk</button>
        </div>
      </form>
    </div>
  )
}

export default Login