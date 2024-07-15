'use client'
import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { notFound } from 'next/navigation'
import { getCookie } from 'hp/local_cookie'
import Loading from 'cp/loading'
import PhoneModel, { CapacityModel } from '../../../../../../cross_techcellxpress/models/phone_model.js'
import Form, { ValidationResult } from 'cp/form.tsx';
import Product from 'svc/product'
import 'st/add_update_product.css'

export default function Update() {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter();
  const params = useParams();
  if (!params) notFound();

  type Phone = PhoneModel & CapacityModel;

  useEffect(() => {
    (async () => {
      setLoading(true);

      const { error, data } = await Product.getById(params.update, getCookie("access_token"))

      if (error) {
        //alert
        console.error(error)
      }

      setProduct(data);
      setLoading(false);
    })()
  }, [])

  /*
  I'm not going to check the fields this time!
  function handlervalidation(obj: User): ValidationResult {
    if (false)
      return { enable: true, message: "required fields." };
  }
  */

  async function handlerServer(da: Phone) {

    if (!confirm('Are you sure the this changes?')) {
      return;
    }

    setLoading(true);

    const capacity = CapacityModel.mapper(da);
    const phone = PhoneModel.mapper(da);
    phone.capacity = capacity;

    const { error, data } = await Product.update(params.delete, phone, getCookie("access_token"))

    if (error) {
      //alert
      console.error(error)
    }

    alert('Okay, ware updated.');
    setLoading(false);

    return { error: null, data: "Success" };

  }

  return (
    <dev className="container-add-update">
      <h2>Update product</h2>

      <Form<User>
        service={handlerServer} >
        {/* validateFields={handlervalidation} > */}
        <fieldset>
          <legend>Phone product</legend>

          <div class="field">
            <label for="imgUrl">Imagen:</label>
            <input id="imgUrl" name="imgUrl" defaultValue={product?.imgUrl} type="text" />
          </div>

          <div class="field">
            <label for="brand">Marca:</label>
            <input id="brand" name="brand" defaultValue={product?.brand} placeholder="Samsung, Huawei, Xiaomi..." type="text" />
          </div>

          <div class="field">
            <label for="model">Modelo:</label>
            <input id="model" name="model" defaultValue={product?.model} placeholder="S4, Redmi, Honor..." type="text" />
          </div>

          <div class="field">
            <label for="color">Color:</label>
            <input id="color" name="color" type="color" defaultValue={product?.color} />
          </div>

          <div class="field">
            <label for="releaseDate">Fecha de lanzamiento:</label>
            <input id="releaseDate" name="releaseDate" defaultValue={product?.releaseDate} type="datetime-local" />
          </div>

          <fieldset>
            <legend>Capacity</legend>
            <div class="field">
              <label for="rom">Almacenamiento interno:</label>
              <input id="rom" name="rom" placeholder="16GB, 32GB..." defaultValue={product?.rom} type="text" />
            </div>

            <div class="field">
              <label for="ramMemory">Memoria RAM:</label>
              <input id="ramMemory" name="ramMemory" placeholder="2GB, 4GB, 6GB..." defaultValue={product?.ramMemory} type="text" />
            </div>

            <div class="field">
              <label for="processor">Procesador:</label>
              <input id="processor" name="processor" defaultValue={product?.processor} placeholder="Exynos,
              Snapdragon..." type="text" />
            </div>

            <div class="field">
              <label for="processorSpeed">Velocidad del procesador:</label>
              <input id="processorSpeed" name="processorSpeed" defaultValue={product?.processorSpeed} placeholder="2GHz, 3.2GHz..." type="text" />
            </div>
          </fieldset>
        </fieldset>
      </Form>
    </dev >
  )
}