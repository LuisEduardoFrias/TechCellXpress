//
'use client'
import { EventForm } from 'react'
import {singIn} from 'next-auth/react'
import Form, { DataResult, Method, ValidationResult } from 'cp/form.tsx';
import { useRouter } from 'next/navigation';

import 'st/register.css'

export default function Login() {
  const rauter = useRouter();

  type User = {
    user: string,
    password: string,
  }

  //I could have used react-hook-form to validate the fields.
  function handlervalidation(obj: User, data: DataResult): ValidationResult {
    if (!obj.user || !obj.password)
      return { isEmpty: true, message: "Campos requeridos." };

    if (data.data)
      return { isEmpty: false, message: "Success" };

    if (data.error)
      return { isEmpty: false, message: data.error };
  }

  return (
    <div className="container-register">
      <Form<User>
        url={'register'}
        method={Method.POST}
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