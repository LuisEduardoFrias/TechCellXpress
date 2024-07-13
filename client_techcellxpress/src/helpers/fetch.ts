//
export enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export type Result = {
  data: object | null;
  error: object | null;
};

export type DataFetch = {
  url: string,
  method?: Method,
  body?: object | Array<object>,
  token?: string
};

export default function Fetch(datafetch: DataFetch) {
  const _dataFetch: DataFetch = {
    url: datafetch.url,
    method: datafetch.method || Method.GET,
    body: datafetch.body,
    token: datafetch.token
  }

  return _fetch(_dataFetch)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error al recuperar el HTML');
      }

      const contentType = response.headers.get('content-type');

      if (contentType && contentType.includes('application/json')) {
        return response.json();
      } else {
        return response.text();
      }
    })
    .then((data) => {
      return { error: null, data }
    })
    .catch((error) => {
      console.log('helper fetch: ', error);
      return { error, data: null }
    })
}

async function _fetch(datafetch: DataFetch) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  //headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');
  headers.append('Access-Control-Allow-Credentials', 'true');
  if (datafetch.token) {
    headers.append('Authorization', `Basic ${datafetch.token}`);
  }

  return await fetch(datafetch.url, {
    method: datafetch.method && Method.GET,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: headers,
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: (datafetch.body ? JSON.stringify(datafetch.body) : null),
  });
}