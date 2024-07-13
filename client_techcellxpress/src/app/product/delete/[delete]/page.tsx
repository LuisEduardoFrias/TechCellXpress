'use client'
import { notFound } from 'next/navigation'
import Auth from 'cp/auth';
import 'st/delete_product.css'

type Props = {
  params: { id: string }
}

export default function Delete({ params }: Props) {
  const { id } = params;

  const product = {
    imei: 123456789012345,
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTuwG17h-i1BVzQEyiA_WFq7O0Ww9cBUV2iaYeK6EbPQ&s=',
    brand: 'Samsung',
    model: 'Galaxy S20',
    color: 'Black',
    capacity: '128GB',
    releaseDate: '2020-02-11'
  };

  if (!id) { }//notFound();

  function handlerDelete() {
    if (!confirm('Are you sure?')) {
      alert('Pareces indeciso');
      return;
    }

    alert('Okay, si estas seguro.');
  }

  return (
    <Auth>
      <div className="container-delete" >
        <h2>Delete page</h2>

        <div>
          <img src={product.imgUrl} alt={`Image of product ${product.brand} ${product.model}.`} />
        </div>

        <button onClick={handlerDelete}>Delete</button>

        <div>
          <div><span>Color :</span><span>{product.color}</span></div>
          <div><span>Brand :</span><span>{product.brand}</span></div>
          <div><span>Model :</span><span>{product.model}</span></div>
          <div><span>Capacity :</span><span>{product.capacity}</span></div>
          <div><span>Release date :</span><span>{product.releaseDate}</span></div>
        </div>
      </div>
    </Auth>
  )
}