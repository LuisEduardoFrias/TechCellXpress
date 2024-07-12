//
'use client'
import { useEffect } from 'react';
import useStore from 'str/store.ts';
import useFetch, { FetchObj, Method, Result } from 'hk/use_fetch';
import Auth from 'cp/auth';
import Loading from 'cp/loading';
import "st/home.css"

export default function Home() {
  const { phones, savePhone } = useStore((state) => ({
    phones: state.phones,
    savePhone: state.savePhone
  }))

  const [setFetch, data, loading] = useFetch(process.env.NEXT_PUBLIC_API_TECHCELLXPRESS);

  useEffect(() => {
    if (!phones)
      setFetch({ url: '/product', method: Method.GET });
  }, []);

  useEffect(() => {
    savePhone(data?.data?.data);
  }, [data]);


  return (
    <Auth>
      <div className="container-home">
        <div className="filter">
          <label>
            Search
            <input type="search" name="search" placeholder="Samsung, Nokia, Blackberry..." />
          </label>
          <select name="brand" id="brand">
            <option value="default">Category</option>
            <option value="samsung">Samsung</option>
            <option value="alcater">Alcater</option>
            <option value="xiaomi">Xiaomi</option>
            <option value="">Nokia</option>
            <option value="huawei">Huawei</option>
          </select>
        </div>
        <div className="container-phone">
          {
            phones ?
              phones.map(e =>
                <div key={e.id} className="container-card">
                  <img loading="lazy" src={e.imgUrl} alt={e.model} />
                  <span>{`${e.brand} ${e.model}`}</span>
                </div>
              ) : <span>No Data</span>
          }
        </div>
      </div>
    </Auth>
  )
}
