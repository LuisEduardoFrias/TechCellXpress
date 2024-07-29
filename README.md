# TechCellXpress
Cell Phone Store Manager.

 - Recommended nodeJs version v22.2.0, If you are using a later version to run in development, remove '--watch' from the development execution scripts.
 - Execute the command in the root folder --> 'yarn dev' the 'keywords' is configured with 'yarn'.
 - Test user --> luisf
 - Test pass --> luisf

---------------------------------------

# Prueba Asíncrona de Desarrollador Full Stack JavaScript

### Lexart ® 2024

## Ingeniería de software

### Objetivo

#### Desarrollar una aplicación web para gestionar productos (teléfonos móviles) utilizando Node.js para el backend y React para el frontend. El backend debe proporcionar servicios externos que permitan a los clientes consumir la lista de productos e insertar nuevos productos.

### Requisitos

### Backend (Node.js en Vercel functions):

  - [x] Crear una API RESTful para operaciones CRUD (Create, Read, Update, Delete) de productos.
  - [x] Utilizar Express.js para el enrutamiento.
  - [x] Utilizar Sequelize para interactuar con la base de datos.
  - [x] Utilizar Postgres de Vercel como base de datos.
  - [x] Exponer una ruta exclusiva para permitir que clientes externos de la aplicación consuman los productos; estas rutas deben utilizar algún tipo de autorización.
  - [x] Exponer una ruta exclusiva para permitir que clientes externos de la aplicación inserten productos; estas rutas deben utilizar algún tipo de autorización.
  - [x] Exponer servicios externos utilizando Swagger.
  - [x] Crear un procedimiento que permita la eliminación de todos los productos en segundo plano.
  - [x] Crear un procedimiento que permita cargar 50 productos de prueba.

### Frontend (React en Vercel):

 - [x] Crear formulario para registro e inicio de sesión.
 - [x] Crear una interfaz de usuario para mostrar los productos y permitir que el usuario realice operaciones CRUD disponibles solo para usuarios que hayan iniciado sesión.
 - [x] Implementar rutas para navegar entre las diferentes vistas (lista de productos, agregar producto, editar producto, registros).
 - [x] Utilizar servicios para consumir la API RESTful creada en el backend.
 - [x] Al hacer clic en "Cargar productos de prueba" debe agregar 50 productos.
 - [] Al hacer clic en "Eliminar todos los productos", ejecutar el procedimiento de eliminación y mostrar una barra de progreso del 0 al 100% que se actualice en tiempo real.
 - [] Mostrar una lista de los productos eliminados en una pantalla llamada registros dentro del sitio.

### Requerido

 - [x] La aplicación debe tener una página para iniciar sesión y registrarse. (Proporcionar un usuario de prueba)
 - [x] La aplicación debe tener una página principal donde se muestran todos los productos disponibles y sus detalles; el acceso a esta página solo es posible con el inicio de sesión del usuario.
 - [x] Debe ser posible agregar nuevos productos.
 - [x] Debe ser posible editar los productos existentes.
 - [x] Debe ser posible eliminar productos.
 - [x] Agregar funcionalidades de búsqueda y filtrado de productos.
 - [x] Debe ser posible listar los productos de las APIs externas.
 - [x] Debe tener un botón para poder cargar 50 productos.
 - [x] Debe tener un botón para poder eliminar todos los productos del sitio.
 - [] Debe tener una barra de progreso mostrando el estado de la eliminación del 0 al 100%.
 - [] Debe tener una pantalla llamada registros donde se pueden ver los productos que fueron eliminados.

### Entrega

Envíe el repositorio y el enlace de la solución a: contacto@lexartlabs.xyz con el asunto: "Nombre del candidato - Prueba FullStack - Software"
Hacer el despliegue de la aplicación en Vercel.