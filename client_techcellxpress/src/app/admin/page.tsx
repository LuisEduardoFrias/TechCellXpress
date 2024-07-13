//
'use client'
import { useEffect } from 'react'
import FileUploader from 'cp/file_uploader'
import useFetch, { FetchObj, Method, Result } from 'hk/use_fetch';
import Auth from 'cp/auth';
import Table from 'cp/table'
import 'st/record.css'

export default function Record() {
  const [setFetch, data, loading] = useFetch(process.env.NEXT_PUBLIC_API_TECHCELLXPRESS);

  useEffect(() => {
    alert("Succes");
  }, [data?.data])
  
  const headers = [
    "IMEI", "IMAGE URL", "BRAND", "MODEL", "COLOR", "CAPACITY", "RELEASE DATE"
  ];

  const _data = [
    {
      imei: 123456789012345,
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTuwG17h-i1BVzQEyiA_WFq7O0Ww9cBUV2iaYeK6EbPQ&s=',
      brand: 'Samsung',
      model: 'Galaxy S20',
      color: 'Black',
      capacity: '128GB',
      releaseDate: '2020-02-11'
    },
    {
      imei: 987654321098765,
      imgUrl: 'imagen2.jpg',
      brand: 'Apple',
      model: 'iPhone 12',
      color: 'White',
      capacity: '256GB',
      releaseDate: '2020-10-23'
    },
    {
      imei: 456789012345678,
      imgUrl: 'imagen3.jpg',
      brand: 'Xiaomi',
      model: 'Redmi Note 10',
      color: 'Blue',
      capacity: '64GB',
      releaseDate: '2021-03-16'
    },
    {
      imei: 789012345678901,
      imgUrl: 'imagen4.jpg',
      brand: 'OnePlus',
      model: 'OnePlus 9 Pro',
      color: 'Silver',
      capacity: '256GB',
      releaseDate: '2021-03-23'
    },
    {
      imei: 234567890123456,
      imgUrl: 'imagen5.jpg',
      brand: 'Huawei',
      model: 'P40 Pro',
      color: 'Gold',
      capacity: '512GB',
      releaseDate: '2020-04-07'
    },
    {
      imei: 567890123456789,
      imgUrl: 'imagen6.jpg',
      brand: 'Google',
      model: 'Pixel 5',
      color: 'Green',
      capacity: '128GB',
      releaseDate: '2020-10-15'
    },
    {
      imei: 890123456789012,
      imgUrl: 'imagen7.jpg',
      brand: 'Sony',
      model: 'Xperia 1 II',
      color: 'Purple',
      capacity: '256GB',
      releaseDate: '2020-05-13'
    },
    {
      imei: 345678901234567,
      imgUrl: 'imagen8.jpg',
      brand: 'LG',
      model: 'V60 ThinQ',
      color: 'Silver',
      capacity: '128GB',
      releaseDate: '2020-02-26'
    },
    {
      imei: 678901234567890,
      imgUrl: 'imagen9.jpg',
      brand: 'Motorola',
      model: 'Moto G Power',
      color: 'Blue',
      capacity: '64GB',
      releaseDate: '2020-04-03'
    },
    {
      imei: 901234567890123,
      imgUrl: 'imagen10.jpg',
      brand: 'Nokia',
      model: 'Nokia 8.3',
      color: 'Cyan',
      capacity: '128GB',
      releaseDate: '2020-07-21'
    }
  ];

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


        <div className="list-record">
                <Table data={_data} headers={headers}/>
        </div>

      </div>
    </Auth>
  )
}