//
'use client'
import { useState } from 'react'
import useStore from "str/store";
import useFetch, { FetchObj, Method, Result } from 'hk/use_fetch';
import { useRouter, usePathname } from 'next/navigation';
import MenuSvg from 'sv/menu_svg'

export default function Menu() {
  const [setFetch, data, loading] = useFetch(process.env.NEXT_PUBLIC_API_TECHCELLXPRESS);
  const session = useStore((state) => state.session)
  const [show, setShow] = useState(false);
  const router = useRouter();
  const path = usePathname();

  function handleClick(url: string) {
    setShow(!show)
    router.push(url)
  }

  function handleLogout(url: string) {
    const user = {
      id: session.id,
      user: session.user,
      email: session.email,
    };

    setFetch({ url: '/logout', method: Method.POST, body: { user } });
    setShow(!show)
  }

  return (
    <>
      {
        session &&
        <nav>
          <button onClick={() => setShow(!show)}>
            <MenuSvg />
          </button>
          {show &&
            <ul>
              {path !== '/' &&
                <li onClick={() => handleClick('/')}>home</li>
              }
              {path !== '/product/add' &&
                <li onClick={() => handleClick('/product/add')}>Add phone</li>
              }
              {path !== '/product' &&
                <li onClick={() => handleClick('/product')}>List phone</li>
              }
              {path !== '/recors' &&
                <li onClick={() => handleClick('/recors')}>Admin</li>
              }
              <li onClick={() => handleLogout()}>Logout</li>
            </ul>
          }
        </nav>
      }
    </>
  )
}