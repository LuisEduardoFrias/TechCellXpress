//
'use client'
import { useState, useEffect, useRef, ReactElement } from 'react';
import Alert, { aletType, variantType } from './alert';
import useFetch, { Method } from 'hk/use_fetch';
import Loading from 'cp/loading';

export { Method };

export type DataResult = {
  error: any,
  data: any,
}

export type ValidationResult = {
  isEmpty: boolean,
  message: string,
}

type TFormProps<T> = {
  url: string,
  method: Method,
  validationEmptyFild: (obj: T, data: DataResult) => ValidationResult,
  children: ReactElement
  fetchResult?: (data: DataResult) => void,
}

export default function Form<T>({ url, method, validationEmptyFild, fetchResult, children }: TFormProps<T>) {
  const [setFetch, data, loading] = useFetch(process.env.NEXT_PUBLIC_API_TECHCELLXPRESS);
  const [validation, setValidation] = useState({ isEmpty: false, message: "" });
  const [result, setResult] = useState(data);
  const formRef = null;
  const show = validation.isEmpty || result.data || result.error;

  useEffect(() => {

    if (data.data) {
      //formRef?.current.reset();
    }

    if (typeof fetchResult === 'function')
      fetchResult(data);

    setResult(data)

  }, [data])

  const alertData = {
    color:
      (validation.isEmpty && aletType.info) ||
      (result.data && aletType.success) ||
      (result.error && aletType.error),
    severity:
      (validation.isEmpty && aletType.info) ||
      (result.data && aletType.success) ||
      (result.error && aletType.error),
    message:
      result.error ? result.error :
        result.data ? 'Success' :
          validation.message,
    variant: variantType.filled,
  };

  function handlerSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    const validationResult: ValidationResult = validationEmptyFild(formDataObject as T);
    if (validationResult) {
      setValidation(validationResult);
      setResult({ error: null, data: null })
      return;
    }

    setFetch({
      url: url,
      method: method,
      body: formDataObject,
    });
  }

  const StyleFacade = {
    position: 'absolute',
    top: '0',
    left: '0',
    opacity: loading ? '1' : '0',
    zIndex: '9999',
    width: loading ? '100%' : '0',
    height: loading ? '100%' : '0',
    borderRadius: '3px',
    borderTop: '2px solid #ffffff4f',
    borderLeft: '2px solid #ffffff68',
    borderRight: '2px solid #ffffff84',
    borderBottom: '2px solid #ffffff9c',
    boxShadow: '2px 2px 3px 1px black',
    backgroundColor: '#ffffff22',
    backdropFilter: 'blur(.9px)',
    transition: 'width 1.5 ease, height 1.5s ease, opacity 2s ease',
  }

  const StyleAlert = {
    position: 'absolute',
    top: '-60px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
  }

  return (
    <>
      {loading && <Loading />}
      <div style={StyleAlert}>
        <Alert
          key='Alert'
          show={show}
          alertData={alertData}
          exe={() => {
            setValidation({ isEmpty: false, message: "" });
          }}
        />
      </div>
      <form ref={formRef} onSubmit={handlerSubmit} style={{
        display: 'flex',
        padding: '5px',
        paddingTop: loading ? '40px' : '',
        flexDirection: 'column',
        gap: '10px'
      }}>
        <div style={StyleFacade}></div>
        {children}
        <button
          disabled={loading}
          type='submit'
          className='btn'>
          Send
        </button>
      </form>
    </>
  )
}