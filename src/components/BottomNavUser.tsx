import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HomeIcon from '@/assets/icons/home.svg'
import BookmarkIcon from '@/assets/icons/bookmark.svg'
import UserCircleIcon from '@/assets/icons/user-circle.svg'
import {useRouter} from "next/router"

const BottomNav = () => {
  const router = useRouter();
  const currentUrl = router.asPath;
  return (
    <div className="navbar h-[5rem] bg-base-300 flex justify-around">
      <Link href={'/user/dashboard'} className="flex flex-col">
        {
          currentUrl.includes('/user/dashboard')?(
            <span className='h-1 w-[50px] bg-primary mb-2'></span>
          ):null
        }
        <Image
          src={HomeIcon}
          width={24}
          height={24}
          alt="Menu"
        />
        <span className="btm-nav-label text-sm">Beranda</span>
      </Link>
      <Link href={'/user/vote'} className="flex flex-col">
        {
          currentUrl.includes('/user/vote')?(
            <span className='h-1 w-[50px] bg-primary mb-2'></span>
          ):null
        }
        <Image
          src={BookmarkIcon}
          width={24}
          height={24}
          alt="Menu"
        />
        <span className="btm-nav-label text-sm">Voting</span>
      </Link>
      <Link href={'/user/profile'} className="flex flex-col">
        {
          currentUrl.includes('/user/profile')?(
            <span className='h-1 w-[50px] bg-primary mb-2'></span>
          ):null
        }
        <Image
          src={UserCircleIcon}
          width={24}
          height={24}
          alt="Menu"
        />
        <span className="btm-nav-label text-sm">Profile</span>
      </Link>
    </div>
  )
}

export default BottomNav