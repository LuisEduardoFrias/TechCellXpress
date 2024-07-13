'use client'
import { notFound } from 'next/navigation'
import Auth from 'cp/auth';
import 'st/update_product.css'

type Props = {
  params: { id: string }
}

export default function Update({ params }: Props) {
  const { id } = params;

  if (!id) { }// notFound();

  return (
    <Auth>
      <dev className="container-update">
        <h2>Update product</h2>

        <form action="">
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
          
          <button>Save</button>
        </form>

      </dev>
    </Auth>
  )
}