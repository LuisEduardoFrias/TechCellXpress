//
'use client'
import { useState, ReactElement } from 'react';
import useStore from "str/store";
import { getCookie } from 'hk/use_local_cookie';
import { useRouter } from 'next/navigation';
import Loading from 'cp/loading';

export default function Auth({ children }: { children: ReactElement }) {
  const [isloadin, setLoadin] = useState(true)
  const session = useStore((state) => state.session)
  const router = useRouter();

  if (!session) {
    const access_token = getCookie("access_token");

    if (!access_token) {
      router.push('/auth/login')
    } else {
      setLoadin(false)
    }
  }

  return (
    <>
      {
        isloadin ? <Loading /> : children
      }
    </>
  )
}