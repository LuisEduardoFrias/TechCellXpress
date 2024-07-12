//
'use client'
import { useState } from 'react'
import useStore from "str/store";
import { useRouter, usePathname } from 'next/navigation';
import MenuSvg from 'sv/menu_svg'

export default function Menu() {
  const session = useStore((state) => state.session)
  const [show, setShow] = useState(false);
  const router = useRouter();
  const path = usePathname();


  function handleClick(url: string) {
    setShow(!show)
    router.push(url)
  }

  function handleLogout(url: string) {
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
              {path !== '/product/list' &&
                <li onClick={() => handleClick('/product/list')}>List phone</li>
              }
              {path !== '/recors' &&
                <li onClick={() => handleClick('/recors')}>Admin</li>
              }
              <li onClick={() => handleLogout}>Logout</li>
            </ul>
          }
        </nav>
      }
    </>
  )
}