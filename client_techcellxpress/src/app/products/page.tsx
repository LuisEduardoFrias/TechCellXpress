//
'use client'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react';
import Product from 'svc/product'
import { getCookie } from 'hp/local_cookie'
import Loading from 'cp/loading'
import Table from 'cp/table'
import 'st/products.css'

export default function Products() {
  const [dataProduct, setDataProduct] = useState(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const headers = [
    "IMEI", "IMAGE URL", "BRAND", "MODEL", "COLOR", "CAPACITY", "RELEASE DATE"
  ];

  useEffect(() => {
    (async () => {
      setLoading(true)
      const { error, data } = await Product.get(getCookie("access_token"))

      if (error) {
        //alert
        return;
      }

      setDataProduct(data)
      setLoading(false)
    })()
  }, [])

  function handlerDelete(id) {
    router.push(`/product/delete/${id}`)
  }

  function handlerUpdate(id) {
    router.push(`/product/update/${id}`)
  }

  function handleAddProduct() {
    router.push(`/product/add`)
  }

  return (
    <div className="container-products" >
      <h2>Products</h2>
      <button onClick={handleAddProduct}>add new phone</button>
      <div className="container-table">
        {loading && <loading />}
        {dataProduct ?
          <Table
            data={dataProduct}
            headers={headers}
            handlerDelete={handlerDelete}
            handlerUpdate={handlerUpdate} />
          : <span>no data</span>
        }
      </div>
    </div>
  )
}