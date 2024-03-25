# API Rest con Express y MySQL

Esta aplicación es una API REST desarrollada en Node.js con Express y MySQL, diseñada para gestionar datos de películas y usuarios. Proporciona funcionalidades para crear, actualizar, listar y eliminar películas, así como registrar y autenticar usuarios.

## Funcionalidades

- **Gestión de películas:**
  - Agregar nueva película a la base de datos.
  - Actualizar información de una película existente.
  - Listar todas las películas almacenadas.
  - Eliminar películas de la base de datos.

- **Autenticación de usuarios:**
  - Registro de nuevos usuarios, con encriptación de contraseñas utilizando bcryptjs.
  - Inicio de sesión de usuarios, verificando la contraseña encriptada.

- **Seguridad:**
  - Generación de tokens de acceso utilizando jwt-simple, para permitir a los usuarios acceder a las distintas rutas de la aplicación de manera segura.

## Dependencias Utilizadas

- **Express:** Framework de aplicaciones web para Node.js, utilizado para manejar las rutas y solicitudes HTTP.
- **MySQL (mysql2):** Base de datos relacional utilizada para almacenar datos de películas y usuarios.
- **Body-parser:** Middleware para Express que analiza los cuerpos de las solicitudes entrantes en un middleware y los convierte en un objeto JSON.
- **Sequelize:** ORM (Mapeo Objeto-Relacional) para Node.js, utilizado para definir modelos de base de datos y realizar operaciones CRUD de forma sencilla.
- **Nodemon:** Herramienta utilizada para mantener el servidor funcionando y reiniciarlo automáticamente cuando se realizan cambios en el código.
- **Dotenv:** Módulo utilizado para cargar variables de entorno desde un archivo `.env`, utilizado para mantener seguras las credenciales de conexión a la base de datos.
- **Bcryptjs:** Librería para encriptar y comparar contraseñas de manera segura.
- **JWT-Simple:** Librería para la generación y verificación de tokens JWT (JSON Web Tokens) para autenticación de usuarios.
- **Express-Validator:** Middleware utilizado para validar y sanitizar datos de entrada en las solicitudes HTTP.
- **Moment:** Librería utilizada para manipular y mostrar fechas y horas de forma sencilla en JavaScript.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias utilizando el comando `npm install`.
3. Crea un archivo `.env` en el directorio raíz y establece las siguientes variables de entorno:

   ```plaintext
   DB_NAME=Nombre_de_la_DB
   DB_USER=Nombre_de_Usuario_de_la_DB
   DB_PASSWORD=Password_de_la_DB
   DB_HOST=Host_de_la_DB
   PORT=Puerto_en_el_que_funciona_el_servidor
   
4. Ejecuta la aplicación utilizando el comando `npm start`.

## Uso

- La API estará disponible en `http://localhost:Puerto_en_el_que_funciona_el_servidor/api`.
  
  Las siguientes rutas están disponibles:

  - `POST /api/register`: Registra un nuevo usuario en la aplicación.
  - `POST /api/login`: Inicia sesión de un usuario registrado.
  - `POST /api`: Agrega una nueva película a la base de datos.
  - `GET /api`: Obtiene el listado de todas las películas almacenadas.
  - `PUT /api/:filmId`: Actualiza la información de una película existente.
  - `DELETE /api/:filmId`: Elimina una película de la base de datos.

  Para acceder a estas rutas, puedes utilizar herramientas como Postman o cURL, o integrarlas en tu aplicación cliente.

  Asegúrate de incluir el prefijo `/api` antes de cada ruta para acceder correctamente a las funcionalidades de la API.

