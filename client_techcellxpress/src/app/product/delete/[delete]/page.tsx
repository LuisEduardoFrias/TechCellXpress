'use client'
import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { notFound } from 'next/navigation'
import { getCookie } from 'hp/local_cookie'
import Loading from 'cp/loading'
import Product from 'svc/product'
import 'st/delete_product.css'

export default function Delete() {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter();
  const params = useParams();
  if (!params) notFound();

  useEffect(() => {
    (async () => {
      setLoading(true);

      const { error, data } = await Product.getById(params.delete, getCookie("access_token"))

      if (error) {
        //alert
        console.error(error)
      }

      setProduct(data);
      setLoading(false);
    })()
  }, [])

  function handlerDelete() {
    if (!confirm('Are you sure?')) {
      return;
    }

    (async () => {
      setLoading(true);

      const { error, data } = await Product.delete(params.delete, getCookie("access_token"))

      if (error) {
        //alert
        console.error(error)
      }

      alert('Okay, ware deleted.');
      setLoading(false);
      router.push('/products')
    })()
  }

  return (
    <div className="container-delete" >
      <h2>Delete page</h2>

      <div className="container-loading">
        {loading && <Loading />}
      </div>

      <div>
        <img src={product?.imgUrl} alt={`Image of product ${product?.brand} ${product?.model}.`} />
      </div>

      <button onClick={handlerDelete}>Delete</button>

      <div style={{ boxShadow: `inset 0 0 13px 1px ${product?.color}` }}>
        <div><span>Color :</span><span>{product?.color}</span></div>
        <div><span>Brand :</span><span>{product?.brand}</span></div>
        <div><span>Model :</span><span>{product?.model}</span></div>
        <div><span>Capacity :</span><span>{product?.capacity}</span></div>
        <div><span>Release date :</span><span>{product?.releaseDate}</span></div>
      </div>
    </div>
  )
}