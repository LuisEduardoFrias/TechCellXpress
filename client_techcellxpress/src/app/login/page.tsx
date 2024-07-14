//
'use client'
import { singIn } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import { setCookie } from 'hp/local_cookie';
import useStorage from 'hk/use_storage';
import useStore from 'str/store';
import Form, { ValidationResult } from 'cp/form.tsx';
import Session from 'svc/session'

import 'st/register.css'

export default function Login() {
  const login = useStore((state) => state.login)
  const { SetStorage } = useStorage('sessionStorage');
  const rauter = useRouter();

  type User = {
    user: string,
    password: string,
  }

  async function handlerServer(da: User) {
    const { error, data } = await Session.logIn(da);

    if (error) return { error, data }

    login(data)
    setCookie('access_token', data?.token)
    SetStorage({ key: 'session', value: data });
    rauter.push('/')
    return { error, data: "Success" };
  }

  //I could have used react-hook-form to validate the fields.
  function handlervalidation(obj: User): ValidationResult {
    if (!obj.user || !obj.password)
      return { enable: true, message: "required fields." };
  }

  return (
    <>
      <div className="container-register">
        <Form<User>
          service={handlerServer}
          validateFields={handlervalidation} >
          <label >User *
            <input type="text" name="user" placeholder="Juan316" />
          </label>
          <label >Password *
            <input type="password" name="password" placeholder="**********" />
          </label>
        </Form>

        <button onClick={() => rauter.push('/register')}>
          <i>
            check in
          </i>
        </button>
      </div>
    </>
  )
}