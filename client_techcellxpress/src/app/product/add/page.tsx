'use client'
import Form, { ValidationResult } from 'cp/form.tsx';
import { setCookie } from 'hp/local_cookie';
import Product from 'svc/session'
import 'st/update_product.css'

export default function Add() {

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
    <dev className="container-update">
      <h2>Add product</h2>

      <Form<User>
        service={handlerServer}
        validateFields={handlervalidation} >
        <fieldset>
          <legend>Phone product</legend>

          <div class="field">
            <label for="imgUrl">Imagen:</label>
            <input id="imgUrl" name="imgUrl" type="file" />
          </div>

          <div class="field">
            <label for="brand">Marca:</label>
            <input id="brand" name="brand" placeholder="Samsung, Huawei, Xiaomi..." type="text" />
          </div>

          <div class="field">
            <label for="model">Modelo:</label>
            <input id="model" name="model" placeholder="S4, Redmi, Honor..." type="text" />
          </div>

          <div class="field">
            <label for="color">Color:</label>
            <input id="color" name="color" type="color" />
          </div>

          <div class="field">
            <label for="releaseDate">Fecha de lanzamiento:</label>
            <input id="releaseDate" name="releaseDate" type="datetime-local" />
          </div>

          <fieldset>
            <legend>Capacity</legend>
            <div class="field">
              <label for="rom">Almacenamiento interno:</label>
              <input id="rom" name="rom" placeholder="16GB, 32GB..." type="text" />
            </div>

            <div class="field">
              <label for="ramMemory">Memoria RAM:</label>
              <input id="ramMemory" name="ramMemory" placeholder="2GB, 4GB, 6GB..." type="text" />
            </div>

            <div class="field">
              <label for="processor">Procesador:</label>
              <input id="processor" name="processor" placeholder="Exynos, Snapdragon..." type="text" />
            </div>

            <div class="field">
              <label for="processorSpeed">Velocidad del procesador:</label>
              <input id="processorSpeed" name="processorSpeed" placeholder="2GHz, 3.2GHz..." type="text" />
            </div>
          </fieldset>
        </fieldset>

        <button>Create</button>
      </Form>

    </dev>

  )
}