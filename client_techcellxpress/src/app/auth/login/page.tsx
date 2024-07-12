//
'use client'
import { EventForm } from 'react'
import { singIn } from 'next-auth/react'
import Form, { DataResult, Method, ValidationResult } from 'cp/form.tsx';
import { useRouter } from 'next/navigation';
import useStore from 'str/store.ts';
import useCookie from 'hk/use_local_cookie.ts';
import 'st/register.css'

export default function Login() {
  const login = useStore((state) => state.login)
  const [value, setCookie] = useCookie('access_token');
  const rauter = useRouter();

  type User = {
    user: string,
    password: string,
  }

  function handlerFetchResult(data: DataResult) {
    if (data.data) {
      setCookie('access_token', data.data)
      login(data.data)
      rauter.push('/')
    }
  }

  //I could have used react-hook-form to validate the fields.
  function handlervalidation(obj: User): ValidationResult {
    if (!obj.user || !obj.password)
      return { isEmpty: true, message: "Campos requeridos." };
  }

  return (
    <div className="container-register">
      <Form<User>
        url={'login'}
        method={Method.POST}
        fetchResult={handlerFetchResult}
        validationEmptyFild={handlervalidation} >
        <label >User *
          <input type="text" name="user" placeholder="Juan316" />
        </label>
        <label >Password *
          <input type="password" name="password" placeholder="**********" />
        </label>
      </Form>

      <button onClick={() => rauter.push('/auth/register')}>
        <i>
          check in
        </i>
      </button>
    </div>
  )
}