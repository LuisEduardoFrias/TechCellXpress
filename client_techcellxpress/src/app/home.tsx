//
'use client'
import { useEffect, useState } from 'react';
import Service from '../services/product';
import useStore from "str/store";
import { getCookie } from 'hp/local_cookie';
import Loading from 'cp/loading';
import "st/home.css"

export default function Home() {
  const changeVisibilityMenu = useStore((state) => state.changeVisibilityMenu)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null);

  useEffect(() => {
    changeVisibilityMenu()
    /*  setLoading(true);
  
      (async () => {
        const { error, data } = await Service.get(getCookie("access_token"));
  
        if (error) {
          //alert
        }
        setLoading(false);
        setData(data);
      })()
      */
  }, []);

  return (
    <div className="container-home">
      {loading && <Loading />}

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
          data ?
            data.map(e =>
              <div key={e.id} className="container-card">
                <img loading="lazy" src={e.imgUrl} alt={e.model} />
                <span>{`${e.brand} ${e.model}`}</span>
              </div>
            ) : <span id="notData">No Data</span>
        }
      </div>
    </div>
  )
}
