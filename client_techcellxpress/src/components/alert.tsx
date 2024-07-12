//
'use client'
import React, { useState, useEffect } from 'react';
import SuccesSvg from 'sv/success_svg'
import ErrorSvg from 'sv/error_svg'
import InfoSvg from 'sv/info_svg'
import 'st/alert.css'

export enum aletType {
  success = 'success',
  error = 'error',
  info = 'info',
}

export enum variantType {
  filled = 'filled',
  outlined = 'outlined',
}

type AlertProps = {
  show: boolean;
  exe?: () => void;
  alertData: {
    color: aletType;
    severity: aletType;
    message: string;
    variant?: variantType;
  };
};

export default function Alert({ show, exe, alertData }: AlertProps) {
  const [visible, setVisible] = useState(show);

  if (!alertData.variant) alertData.variant = variantType.outlined;

  const color =
    alertData.variant == variantType.filled ? 'white' :
      (alertData.color == aletType.info ? 'blue' :
        alertData.color == aletType.success ? 'green' :
          'red');

  const borderColor =
    alertData.severity == aletType.info ? 'blue' :
      alertData.severity == aletType.success ? 'green' :
        'red';

  useEffect(() => {
    setVisible(show);
    const timer = setTimeout(() => {
      exe();
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [show]);

  if (!visible) {
    return null;
  }

  const Style = {
    color: color,
    border: `2px solid ${borderColor}`,
    backgroundColor:
      alertData.variant == variantType.filled ? borderColor : 'transparent',
  };

  return (
    <div
      style={Style}
      className='Alert'>
      <div className='alert-header'>
        {
          alertData.severity === aletType.success ?
            <SuccesSvg /> :
            alertData.severity === aletType.error ?
              <ErrorSvg /> :
              alertData.severity === aletType.info ?
                <InfoSvg /> : null
        }
        <label>{firstUC(alertData.severity)}</label>
      </div>
      {firstUC(alertData.message)}
    </div>
  );
}

function firstUC(text) {
  if (!text) return text;
  return text?.charAt(0).toUpperCase() + text?.slice(1);
}
