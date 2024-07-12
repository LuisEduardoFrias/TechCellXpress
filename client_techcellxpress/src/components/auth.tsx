//
'use client'
import { useState, useEffect, ReactElement } from 'react';
import useStore from "str/store";
import { getCookie } from 'hk/use_local_cookie';
import { useRouter } from 'next/navigation';
import Loading from 'cp/loading';

export default function Auth({ children }: { children: ReactElement }) {
  const { session, login } = useStore((state) => ({ session: state.session, login: state.login }))
  const [isloadin, setLoadin] = useState(true)
  const router = useRouter();

  useEffect(() => {
    const access_session = getCookie("access_token");

    if (access_session) {

      if (!session) {
        login(access_session);
      }

      setLoadin(false)
    } else {
      router.push('/auth/login')
    }
  }, [])

  return (
    <>
      {
        isloadin ? <Loading /> : children
      }
    </>
  )
}