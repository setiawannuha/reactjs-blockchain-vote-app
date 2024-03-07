import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='h-screen overflow-scroll'>
      <section className="bg-primary text-white py-20 px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Selamat Datang di E-Voting</h1>
          <p className="text-lg">Lakukan pemilihan secara online dengan mudah dan aman.</p>
        </div>
      </section>
      <div className='py-8 pt-16 px-8 text-center'>
        <Link href={'/auth/login'} className='btn btn-primary'>Masuk Sekarang</Link>
      </div>
      <section className="py-8 pb-16 px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Tentang Kami</h2>
          <p className="text-lg">
            Kami adalah platform E-Voting yang memungkinkan Anda untuk melakukan pemilihan secara online.
          </p>
        </div>
      </section>
      <footer className="bg-gray-200 py-8 px-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 E-Voting Platform</p>
        </div>
      </footer>
    </main>
  )
}
