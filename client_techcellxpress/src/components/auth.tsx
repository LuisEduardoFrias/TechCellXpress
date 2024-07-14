//
'use client'
import { useState, useEffect, ReactElement } from 'react';
import { useStore } from 'hk/use_storage';
import { useRouter, usePathname } from 'next/navigation';
import Loading from 'cp/loading';

export default function Auth({ children }: { children: ReactElement }) {
  /*
    const session = useStore('sessionStorage', { key: 'session' });
    const [isloadin, setLoadin] = useState(true)
    const router = useRouter();
    const path = usePathname();
  
    useEffect(() => {
      if (path !== '/session/login' && path !== '/session/register') {
        if (session?.user) {
          alert("auth value: " + JSON.stringify(session))
          // console.info("Session: " + JSON.string(session))
          setLoadin(false)
        } else {
      alert(path)
          router.push('/session/login')
        }
      } else {
        setLoadin(false)
      }
    }, [])
  
    return (
      <>
        {
          isloadin ? <Loading /> : children
        }
      </>
    )
  */
  return null
}