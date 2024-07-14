//
'use client'
import { useState } from 'react'
import useStore from "str/store";
import Session from 'svc/session';
import { getCookie, setCookie } from 'hp/local_cookie';
import { useRouter, usePathname } from 'next/navigation';
import MenuSvg from 'sv/menu_svg';
import 'st/menu.css';

export default function Menu() {
  const { session, showMenu } = useStore((state) => ({ session: state.session, showMenu: state.showMenu }))
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

    Session.logOut(user, getCookie("access_token"));
    setCookie("access_token", null)
    setShow(!show)
  }

  return (
    <>
      {
        showMenu &&
        <div className="menu_bar">
          <button onClick={() => setShow(!show)}>
            <MenuSvg />
          </button>

          <nav style={{ right: !show && '-400px' }}>
            <ul>
              {path !== '/' &&
                <li onClick={() => handleClick('/')}>Home</li>
              }
              {path !== '/product/add' &&
                <li onClick={() => handleClick('/product/add')}>Add phone</li>
              }
              {path !== '/products' &&
                <li onClick={() => handleClick('/products')}>List phone</li>
              }
              {path !== '/admin' &&
                <li onClick={() => handleClick('/admin')}>Admin</li>
              }
              <li onClick={() => handleLogout()}>Logout</li>
            </ul>

          </nav>
        </div>
      }
    </>
  )
}