import React, {useState} from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface IProps {
  children: React.ReactNode;
}
const AuthGuard: React.FC<IProps> = ({ children }) => {
  const router = useRouter();
  const currentUrl = router.asPath;
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null
    if((currentUrl.includes("/admin/") || currentUrl.includes("/user/")) && !token){
      router.push('/auth/login');
    }
    setLoading(false)
  }, []);
  if (loading) {
    return (
      <div className="relative flex justify-center items-center bg-gray-400">
        <div className='relative w-[424px] h-[100vh] bg-white overflow-hidden flex justify-center items-center'>
          Loading...
        </div>
      </div>
    )
  }
  return children;
};

export default AuthGuard;