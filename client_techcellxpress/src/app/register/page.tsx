//
'use client'
///
import Form, { ValidationResult } from 'cp/form.tsx';
import { useRouter } from 'next/navigation';
import Session from 'svc/session'
import type UserModel from '../../../../../cross_techcellxpress/models/user_model.js'
import 'st/login_register.css'

export default function Register() {
  const rauter = useRouter();

  type User = { confirmPassword: string } & UserModel;

  /*
  //I could have used react-hook-form to validate the fields.
  function handlervalidation(obj: User): ValidationResult {
    return { enable: false, message: "" };
  }
  */

  return (
    <div className="container-login_register">
      <Form<User>
        service={async (da: User) => await Session.register(da)} >
        {/*validateFields={handlervalidation} >*/}

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

      <button onClick={() => rauter.push('/login')}>
        <i>
          login
        </i>
      </button>
    </div>
  )
}