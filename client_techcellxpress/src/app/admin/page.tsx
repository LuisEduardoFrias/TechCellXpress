//
'use client'
import { useEffect, useState } from 'react'
import FileUploader from 'cp/file_uploader'
import { getCookie } from 'hp/local_cookie'
import Socket from 'svc/socket'
import Admin from 'svc/admin'
import Table from 'cp/table'
import 'st/admin.css'

export default function Record() {
  const [connet, emit, close] = Socket("connect", '');
  const [progress, setProgress] = useState(0);

  const headers = [
    "IMEI", "IMAGE URL", "BRAND", "MODEL", "COLOR", "CAPACITY", "RELEASE DATE"
  ];

  const _data = [];

  useEffect(() => {
    connet("removeAll", (value: any) => setProgress(value));
    return () => {
      close("removeAll");
    }
  }, [])

  function handlerDeleteAll() {
    emit("removeAll", getCookie("access_token"));

    /*
    (async () => {
       const { error, data } = await Admin.removeAll(getCookie("access_token"))
 
       if (error) {
         //alert
       }
     })()
    */
  }

  function handlerLoad(body: any) {
    Admin.loadProducts(body, getCookie("access_token"));
  }

  return (
    <div className="container-record">
      <h2>Admin</h2>

      <div>
        <div>
          <span>Cargar productos de prueba</span>
          <FileUploader handler={handlerLoad} />
        </div>

        <div>
          <button className="custom-button" onClick={() => handlerDeleteAll()}>
            Eliminar todos los productos
          </button>
          {(progress > 1 && progress < 101) &&
            <div>
              <span>{progress}%</span>
              <input type="range" value={progress} max="101" />
            </div>
          }
        </div>
      </div>

      <div className="list-deleted-product">
        <h3>List to deleted product</h3>
        <Table data={_data} headers={headers} />
      </div>

    </div>
  )
}