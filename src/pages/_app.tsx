import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {useRouter} from "next/router"
import BottomNavAdmin from '@/components/BottomNavAdmin'
import BottomNavUser from '@/components/BottomNavUser'
import AuthGuard from '@/context/auth-context'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentUrl = router.asPath;
  return (
    <AuthGuard>
      <div className="relative flex justify-center items-center bg-gray-400">
        <div className='relative w-[424px] h-[100vh] bg-white overflow-hidden'>
          <div className='h-screen overflow-scroll p-4 pb-[82px]'>
            <Component {...pageProps} />
          </div>
          {
            currentUrl.includes('/admin')?(
              <div className='absolute bottom-0 left-0 right-0'>
                <BottomNavAdmin />
              </div>
            ): currentUrl.includes('/user')?(
              <div className='absolute bottom-0 left-0 right-0'>
                <BottomNavUser />
              </div>
            ): null
          }
        </div>
      </div>
    </AuthGuard>
  )
}
