'use client'
import Form, { ValidationResult } from 'cp/form.tsx';
import { getCookie } from 'hp/local_cookie';
import PhoneModel, { CapacityModel } from '../../../../../cross_techcellxpress/models/phone_model.mjs'
import Product from 'svc/product'
import 'st/add_update_product.css'

export default function Add() {

  type Phone = PhoneModel & CapacityModel;

  async function handlerServer(da: Phone) {
    const capacity = CapacityModel.mapper(da);
    const phone = PhoneModel.mapper(da);
    phone.capacity = capacity;
    
    const { error, data } = await Product.post(phone, getCookie("access_token"));

    if (error) return { error, data }

    return { error: null, data: "Success" };
  }

  //I could have used react-hook-form to validate the fields.
  function handlervalidation(obj: Phone): ValidationResult {
    if (
      !obj.imgUrl ||
      !obj.brand ||
      !obj.model ||
      !obj.color ||
      !obj.rom ||
      !obj.ramMemory ||
      !obj.processor ||
      !obj.processorSpeed ||
      !obj.releaseDate) {
      return { enable: true, message: "Some fields are required." };
    }
  }

  return (
    <dev className="container-add-update">
      <h2>Add product</h2>

      <Form<Phone>
        service={handlerServer}
        validateFields={handlervalidation} >
        <fieldset>
          <legend>Phone product</legend>
          <div className="field">
            <label htmlFor="imgUrl">Imagen:</label>
            <input id="imgUrl" name="imgUrl" type="text" />
          </div>

          <div className="field">
            <label htmlFor="imei">Imei:</label>
            <input id="imei" name="imei" placeholder="ttt6h6g-rg5h5, htuiy5f-4y7itr..." type="text" />
          </div>

          <div className="field">
            <label htmlFor="brand">Marca:</label>
            <input id="brand" name="brand" placeholder="Samsung, Huawei, Xiaomi..." type="text" />
          </div>

          <div className="field">
            <label htmlFor="model">Modelo:</label>
            <input id="model" name="model" placeholder="S4, Redmi, Honor..." type="text" />
          </div>

          <div className="field">
            <label htmlFor="color">Color:</label>
            <input id="color" name="color" type="color" />
          </div>

          <div className="field">
            <label htmlFor="releaseDate">Fecha de lanzamiento:</label>
            <input id="releaseDate" name="releaseDate" type="datetime-local" />
          </div>

          <fieldset>
            <legend>Capacity</legend>
            <div className="field">
              <label htmlFor="rom">Almacenamiento interno:</label>
              <input id="rom" name="rom" placeholder="16GB, 32GB..." type="text" />
            </div>

            <div className="field">
              <label htmlFor="ramMemory">Memoria RAM:</label>
              <input id="ramMemory" name="ramMemory" placeholder="2GB, 4GB, 6GB..." type="text" />
            </div>

            <div className="field">
              <label htmlFor="processor">Procesador:</label>
              <input id="processor" name="processor" placeholder="Exynos, Snapdragon..." type="text" />
            </div>

            <div className="field">
              <label htmlFor="processorSpeed">Velocidad del procesador:</label>
              <input id="processorSpeed" name="processorSpeed" placeholder="2GHz, 3.2GHz..." type="text" />
            </div>
          </fieldset>
        </fieldset>
      </Form>
    </dev>

  )
}