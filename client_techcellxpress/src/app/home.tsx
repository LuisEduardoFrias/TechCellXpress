//
'use client'
import { useEffect, useState, ChangeEvent } from 'react';
import useStore from "str/store";
import { getCookie } from 'hp/local_cookie';
import ProductService from '../services/product';
import Loading from 'cp/loading';
import "st/home.css"

export default function Home() {
  const changeVisibilityMenu = useStore((state) => state.changeVisibilityMenu)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null);
  const [dataShow, setDataShow] = useState(null);
  const [select, setSelect] = useState(null);

  useEffect(() => {
    changeVisibilityMenu()
    setLoading(true);

    executeServiceProductAll()

  }, []);

  function executeServiceProductAll() {
    (async () => {
      const { error, data } = await ProductService.get(getCookie("access_token"));

      if (error) {
        //alert
      }
      setLoading(false);
      setSelect([...new Set(data?.map(item => item.brand))])
      setData(data);
      setDataShow(data);
    })()
  }

  function executeServiceProductSearch(text) {
    (async () => {
      const { error, data } = await ProductService.search(text, getCookie("access_token"));

      if (error) {
        //alert
      }
      setLoading(false);
      setSelect([...new Set(data?.map(item => item.brand))])
      setData(data);
      setDataShow(data);
    })()
  }

  function handlerSelect(event: ChangeEvent<HTMLSelectElement>) {
    event.preventDefault();
    const value = event.target.value;
    if (value === "category") {
      executeServiceProductAll();
    } else {
      setDataShow(data.filter(phone => phone.brand === value))
    }
  }

  let timerId: NodeJS.Timeout;
  function handlerSearch(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    const value = event.target.value;

    clearTimeout(timerId);

    timerId = setTimeout(() => {
      executeServiceProductSearch(value);
    }, 2000);
  }

  return (
    <div className="container-home">
      {loading && <Loading />}

      <div className="filter">
        <label>
          Search
          <input type="search" name="search" onChange={handlerSearch} placeholder="Samsung, Nokia, Blackberry..." />
        </label>

        <select name="brand" id="brand" onChange={handlerSelect}>
          <option key={0} value="category" >Category</option>
          {
            data && select.map(e => <option key={e} value={e}>{e}</option>)
          }
        </select>
      </div>
      <div className="container-phone">
        {
          data ?
            dataShow.map(e =>
              <div key={e.id} className="container-card">
                <div>
                  <img loading="lazy" src={e.imgUrl} alt={e.model} />
                </div>
                <div>
                  <span>{`${e.brand} ${e.model}`}</span>
                </div>
              </div>
            ) : <span id="notData">No Data</span>
        }
      </div>
    </div>
  )
}
