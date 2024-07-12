# TechCellXpress
Cell Phone Store Manager.

---------------------------------------

# Prueba de sincronización del desarrollador de JavaScript de pila completa Lexart ® 2024

## Ingeniería de software

### Gol

Desarrollar una aplicación web para administrar productos (teléfonos celulares) utilizando Node.js para el backend y React para el frontend. El backend debe proporcionar servicios externos que permitan a los clientes consumir la lista de productos e insertar nuevos productos.

### Requisitos

#### Backend (Node.js en funciones de Vercel):

- [x] Cree una API RESTful para operaciones CRUD (Crear, Leer, Actualizar, Eliminar) de productos.
- [x] Utilice Express.js para enrutamiento.
- [x] Utilice Sequelize para interactuar con la base de datos.
- [x] Utilice Vercel Postgres como base de datos.
- [x] Exponer una ruta única para permitir que los clientes de aplicaciones externas consuman los productos; estas rutas deben utilizar algún tipo de autorización.
- [x] Exponer una ruta única para permitir a los clientes de aplicaciones externas insertar productos; Estas rutas deben utilizar algún tipo de autorización.
- [x] Exponga servicios externos usando Swagger.
- [x] Cree un procedimiento que permita eliminar todos los productos en segundo plano.
- [x] Cree un procedimiento que le permita cargar 50 productos de prueba.

#### Frontend (React en Vercel):

- Cree un formulario para registrarse e iniciar sesión.
- Cree una interfaz de usuario para mostrar productos y permitirle realizar operaciones CRUD disponibles solo para usuarios que hayan iniciado sesión.
- Implementar rutas para navegar entre diferentes vistas (lista de productos, agregar producto, editar producto, registros).
- Utilice servicios para consumir la API RESTful creada en el backend.
- Al hacer clic en “Cargar productos de prueba” debe agregar 50 productos.
- Al hacer clic en “Eliminar todos los productos”, realice el procedimiento de eliminación y muestre una barra de progreso de 0 a 100% que se actualiza en tiempo real.
- Muestra una lista de productos eliminados en una pantalla llamada registros dentro del sitio web.

### Requerido

- La aplicación debe tener una página de inicio de sesión y registro. (Proporcionar un usuario de prueba)
- La aplicación debe tener una página principal donde se muestren todos los productos disponibles y sus datos; El acceso a esta página sólo es posible con el inicio de sesión del usuario.
- Debería ser posible añadir nuevos productos.
- Debería ser posible editar productos existentes.
- Debería ser posible eliminar productos.
- Agregue funciones de búsqueda y filtrado de productos.
- Debería ser posible enumerar productos de API externas.
- Debe tener un botón para poder cargar 50 productos.
- Debe haber un botón para eliminar todos los productos del sitio web.
- Debería haber una barra de progreso que muestre el estado de eliminación del 0 al 100%.
- Debe haber una pantalla llamada registros donde pueda ver los productos que se han eliminado.