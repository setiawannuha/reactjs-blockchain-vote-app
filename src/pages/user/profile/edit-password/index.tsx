import React, {useState} from 'react'
import Link from 'next/link'

interface IStateForm{
  password: string
  confirmPassword: string
}
const Profile = () => {
  const [form, setForm] = useState<IStateForm>({
    confirmPassword: '',
    password: ''
  })
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
    ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(form);
  }
  return (
    <div>
      <div className='mb-5 bg-white absolute left-0 right-0 top-0 z-50 p-3 px-6 shadow-sm'>
        <h1 className='text-2xl font-semibold'>Profile</h1>
      </div>
      <div className="pt-14 flex flex-col h-[80vh] justify-center items-center">
        <form className='w-[90%]' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="" className='label'>Password</label>
            <input name='password' onChange={changeInput} type="password" placeholder="Password" className="input input-bordered w-full" />
          </div>
          <div className='mb-6'>
            <label htmlFor="" className='label'>Konfirmasi Password</label>
            <input name='confirmPassword' onChange={changeInput} type="password" placeholder="Konfirmasi Password" className="input input-bordered w-full" />
          </div>
          <div className='flex justify-end space-x-3'>
            <Link href="/user/profile" className="btn btn-neutral flex-1">Batal</Link>
            <button className="btn btn-primary flex-1">Simpan</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Profile