//
'use client'
import { useEffect } from 'react';

import data from '../MOCK_DATA.json';
import useStore from 'str/state';
import useFetch, { FetchObj, Method, Result } from 'hk/use_fetch';
import Auth from 'cp/auth';
import Loading from 'cp/loading';
import "st/home.css"

export default function Home() {
  //const [setFetch, data, loading] = useFetch('http://localhost:3000');

  useEffect(() => {
    //setFetch({ url: 'product' });
  }, [])

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
            data.map(e =>
              <div key={e.id} className="container-card">
                <img src={e.imgUrl} alt={e.model} />
                <span>{`${e.brand} ${e.model}`}</span>
              </div>
            )
          }
        </div>
      </div>
    </Auth>
  )
}
