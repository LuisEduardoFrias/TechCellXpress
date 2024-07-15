//
"use client"
import { useState, useEffect, useRef, ReactElement } from 'react';
import Alert, { aletType, variantType, DataAlert } from './alert';
import Loading from 'cp/loading';

type DataResult = {
  error: any,
  data: any,
}

export type ValidationResult = {
  enable: boolean,
  message: string
}

type TFormProps<T> = {
  service: (value: T) => DataResult,
  children: ReactElement
  validateFields?: (obj: T, data: DataResult) => ValidationResult,
}

const defaultDataAlert: DataAlert = {
  color: aletType.info,
  severity: aletType.info,
  message: "",
  variant: variantType.filled,
};

export default function Form<T>({ validateFields, service, children }: TFormProps<T>) {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ enable: false, data: defaultDataAlert });

  async function handlerSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target);


    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

if(validateFields){
    const _validateFields: ValidationResult = validateFields(formDataObject as T);
    if (_validateFields && _validateFields.enable) {
      setAlert({
        enable: true, data: {
          color: aletType.info,
          severity: aletType.info,
          message: _validateFields.message,
          variant: variantType.filled,
        }
      })
      return;
    }
}

    setLoading(true);

    const { error, data } = await service(formDataObject as T)

    setLoading(false)

    if (error) {
      setAlert({
        enable: true, data: {
          color: aletType.error,
          severity: aletType.error,
          message: error,
          variant: variantType.filled,
        }
      })
      return;
    }

    setAlert({
      enable: true, data: {
        color: aletType.success,
        severity: aletType.success,
        message: data,
        variant: variantType.filled,
      }
    })
  }

  const StyleForm = {
    padding: '5px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
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
    top: '10px',
    left: '50%',
    zIndex: '99999',
    transform: 'translateX(-50%)',
    width: '100%',
  }
  const StyleLoading = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: '9999',
    transform: 'translate(-50%,-50%)',
    display: 'grid',
    placeContent: 'center'
  }

  return (
    <div>
      <form onSubmit={handlerSubmit} style={StyleForm}>
        <div style={StyleFacade}></div>

        <div style={StyleLoading}>
          {loading && <Loading />}
        </div>

        <div style={StyleAlert}>
          <Alert
            key='Alert'
            show={alert.enable}
            dataAlert={alert.data}
            exe={() => {
              setAlert({ enable: false, data: defaultDataAlert });
            }}
          />
        </div>

        {children}

        <button
          disabled={loading}
          type='submit'
          className='btn'>
          Send
        </button>
      </form>
    </div>
  )
}