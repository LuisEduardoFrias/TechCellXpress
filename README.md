# TechCellXpress
Cell Phone Store Manager.

## Requires node v22.2.0
## Execute the command in the root folder --> 'npm run dev'
## Test user --> luisf
## Test pass --> luisf

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

- [x] Cree un formulario para registrarse e iniciar sesión.
- [x] Cree una interfaz de usuario para mostrar productos y permitirle realizar operaciones CRUD disponibles solo para usuarios que hayan iniciado sesión.
- [x] Implementar rutas para navegar entre diferentes vistas (lista de productos, agregar producto, editar producto, registros).
- [x] Utilice servicios para consumir la API RESTful creada en el backend.
- [x] Al hacer clic en “Cargar productos de prueba” debe agregar 50 productos.
- [x] Al hacer clic en “Eliminar todos los productos”, realice el procedimiento de eliminación y muestre una barra de progreso de 0 a 100% que se actualiza en tiempo real.
- [x] Muestra una lista de productos eliminados en una pantalla llamada registros dentro del sitio web.

### Requerido

- [x] La aplicación debe tener una página de inicio de sesión y registro. (Proporcionar un usuario de prueba)
- [x] La aplicación debe tener una página principal donde se muestren todos los productos disponibles y sus datos; El acceso a esta página sólo es posible con el inicio de sesión del usuario.
- [x] Debería ser posible añadir nuevos productos.
- [x] Debería ser posible editar productos existentes.
- [x] Debería ser posible eliminar productos.
- [x] Agregue funciones de búsqueda y filtrado de productos.
- [x] Debería ser posible enumerar productos de API externas.
- [x] Debe tener un botón para poder cargar 50 productos.
- [x] Debe haber un botón para eliminar todos los productos del sitio web.
- [x] Debería haber una barra de progreso que muestre el estado de eliminación del 0 al 100%.
- [x] Debe haber una pantalla llamada registros donde pueda ver los productos que se han eliminado.


/////////////////////////////////////////////////

Prueba Asíncrona de Desarrollador Full Stack JavaScript

Lexart ® 2024

Ingeniería de software

Objetivo

Desarrollar una aplicación web para gestionar productos (teléfonos móviles) utilizando Node.js para el backend y React para el frontend. El backend debe proporcionar servicios externos que permitan a los clientes consumir la lista de productos e insertar nuevos productos.

Requisitos

Backend (Node.js en Vercel functions):

Crear una API RESTful para operaciones CRUD (Create, Read, Update, Delete) de productos.
Utilizar Express.js para el enrutamiento.
Utilizar Sequelize para interactuar con la base de datos.
Utilizar Postgres de Vercel como base de datos.
Exponer una ruta exclusiva para permitir que clientes externos de la aplicación consuman los productos; estas rutas deben utilizar algún tipo de autorización.
Exponer una ruta exclusiva para permitir que clientes externos de la aplicación inserten productos; estas rutas deben utilizar algún tipo de autorización.
Exponer servicios externos utilizando Swagger.
Crear un procedimiento que permita la eliminación de todos los productos en segundo plano.
Crear un procedimiento que permita cargar 50 productos de prueba.

Frontend (React en Vercel):

Crear formulario para registro e inicio de sesión.
Crear una interfaz de usuario para mostrar los productos y permitir que el usuario realice operaciones CRUD disponibles solo para usuarios que hayan iniciado sesión.
Implementar rutas para navegar entre las diferentes vistas (lista de productos, agregar producto, editar producto, registros).
Utilizar servicios para consumir la API RESTful creada en el backend.
Al hacer clic en "Cargar productos de prueba" debe agregar 50 productos.
Al hacer clic en "Eliminar todos los productos", ejecutar el procedimiento de eliminación y mostrar una barra de progreso del 0 al 100% que se actualice en tiempo real.
Mostrar una lista de los productos eliminados en una pantalla llamada registros dentro del sitio.

Requerido

La aplicación debe tener una página para iniciar sesión y registrarse. (Proporcionar un usuario de prueba)
La aplicación debe tener una página principal donde se muestran todos los productos disponibles y sus detalles; el acceso a esta página solo es posible con el inicio de sesión del usuario.
Debe ser posible agregar nuevos productos.
Debe ser posible editar los productos existentes.
Debe ser posible eliminar productos.
Agregar funcionalidades de búsqueda y filtrado de productos.
Debe ser posible listar los productos de las APIs externas.
Debe tener un botón para poder cargar 50 productos.
Debe tener un botón para poder eliminar todos los productos del sitio.
Debe tener una barra de progreso mostrando el estado de la eliminación del 0 al 100%.
Debe tener una pantalla llamada registros donde se pueden ver los productos que fueron eliminados.

Entrega

Envíe el repositorio y el enlace de la solución a: contacto@lexartlabs.xyz con el asunto: "Nombre del candidato - Prueba FullStack - Software"
Hacer el despliegue de la aplicación en Vercel.