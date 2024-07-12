//
import FileUploader from 'cp/file_uploader'
import Auth from 'cp/auth';

export default function Record() {
  return (
    <Auth>
      <div>
        <label>Admin</label>

        <button className="custom-button">
          Eliminar todos los productos
        </button>

        <span>Cargar productos de prueba</span>
        <FileUploader />

        list

      </div>
    </Auth>
  )
}