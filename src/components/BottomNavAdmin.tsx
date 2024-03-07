import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HomeIcon from '@/assets/icons/home.svg'
import BookmarkIcon from '@/assets/icons/bookmark.svg'
import UserGroupIcon from '@/assets/icons/user-group.svg'
import UsersIcon from '@/assets/icons/users.svg'
import {useRouter} from "next/router"

const BottomNav = () => {
  const router = useRouter();
  const currentUrl = router.asPath;
  return (
    <div className="navbar h-[5rem] bg-base-300 flex justify-around">
      <Link href={'/admin/dashboard'} className="flex flex-col">
        {
          currentUrl.includes('/admin/dashboard')?(
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
      <Link href={'/admin/vote'} className="flex flex-col">
        {
          currentUrl.includes('/admin/vote')?(
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
      <Link href={'/admin/candidate'} className="flex flex-col">
        {
          currentUrl.includes('/admin/candidate')?(
            <span className='h-1 w-[50px] bg-primary mb-2'></span>
          ):null
        }
        <Image
          src={UserGroupIcon}
          width={24}
          height={24}
          alt="Menu"
        />
        <span className="btm-nav-label text-sm">Kandidat</span>
      </Link>
      <Link href={'/admin/user'} className="flex flex-col">
        {
          currentUrl.includes('/admin/user')?(
            <span className='h-1 w-[50px] bg-primary mb-2'></span>
          ):null
        }
        <Image
          src={UsersIcon}
          width={24}
          height={24}
          alt="Menu"
        />
        <span className="btm-nav-label text-sm">User</span>
      </Link>
    </div>
  )
}

export default BottomNav