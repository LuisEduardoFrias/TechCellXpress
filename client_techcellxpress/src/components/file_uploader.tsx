//
'use client'
import React from 'react'
import 'st/file_uploader.css'

export default function FileUploader() {

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      try {
        const data = await file.text();

        console.log('Datos del archivo JSON:');
        console.log('Datos del archivo JSON:', JSON.stringify(data));

        // Realizar el Fetch a http://localhost:3000/loadphone con los datos del archivo JSON
        /*
        fetch('http://localhost:3000/loadphone', {
              method: 'POST',
              body: data,
              headers: {
                'Content-Type': 'application/json'
              }
            });
    */
        alert('ok')
      } catch (error) {
        console.error('Error al leer el archivo JSON:', error);
      }
    }
  };

  return (
    <label className="custom-button">
      Cargar Archivo JSON
      <input id="filejson" type="file" onChange={handleFileUpload} accept="|.json" />
    </label>
  );
};

