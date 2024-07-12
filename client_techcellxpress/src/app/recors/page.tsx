//
'use client'
import { useEffect } from 'react'
import FileUploader from 'cp/file_uploader'
import useFetch, { FetchObj, Method, Result } from 'hk/use_fetch';
import Auth from 'cp/auth';
import 'st/record.css'

export default function Record() {
  const [setFetch, data, loading] = useFetch(process.env.NEXT_PUBLIC_API_TECHCELLXPRESS);

  useEffect(() => {
    alert("Succes");
  }, [data?.data])

  function handlerDeleteAll() {
    setFetch({ url: '/admin/removeAll', method: Method.DELETE });
  }

  function handlerUpdate(body) {
    setFetch({ url: '/admin/load_products', method: Method.POST, body });
  }

  return (
    <Auth>
      <div className="container-record">
        <h2>Admin</h2>

        <div>
          <span>Cargar productos de prueba</span>
          <FileUploader handler={handlerUpdate} />
        </div>

        <button className="custom-button" onClick={() => handlerDeleteAll()}>
          Eliminar todos los productos
        </button>


        <div className="list-record">List</div>

      </div>
    </Auth>
  )
}