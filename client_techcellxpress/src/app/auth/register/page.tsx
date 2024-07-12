//
'use client'
import { EventForm } from 'react'
import Form, { DataResult, Method, ValidationResult } from 'cp/form.tsx';
import { useRouter } from 'next/navigation';
import 'st/register.css'

export default function Register() {
  const rauter = useRouter();

  type User = {
    name: string,
    lastName: string,
    email: string,
    user: string,
    password: string,
    confirmPassword: string
  }

  //I could have used react-hook-form to validate the fields.
  function handlervalidation(obj: User, data: DataResult): ValidationResult {
    if (!obj.name || !obj.lastName || !obj.email || !obj.user || !obj.password || !obj.confirmPassword)
      return { isEmpty: true, message: "Campos requeridos." };

    if (obj.password != obj.confirmPassword)
      return { isEmpty: true, message: "Password and Confirm Password are not the same." };

    if (obj.password.length > 8)
      return { isEmpty: true, message: "Password length is less than 8." };

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
        <label>Name *
          <input type="text" name="name" placeholder="Juan Carlos" />
        </label>
        <label >LastName *
          <input type="text" name="lastName" placeholder="San" />
        </label>
        <label >Email *
          <input type="email" name="email" placeholder="Ejemplo@emil.com" />
        </label>
        <label >User *
          <input type="text" name="user" placeholder="Juan316" />
        </label>
        <label >Password *
          <input type="password" name="password" placeholder="**********" />
        </label>
        <label >Confirm Password *
          <input type="password" name="confirmPassword" placeholder="**********" />
        </label>
      </Form>

      <button onClick={() => rauter.push('/auth/login')}>
        <i>
          login
        </i>
      </button>
    </div>
  )
}