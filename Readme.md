# Noticias_Colaborativas

- El proyecto de Noticias Colaborativas consta de dos partes:
  1. Backend -> El el servidor(api) donde se hacen las peticiones a la base de datos mysql.
  2. Frontend -> La parte visual donde se comunica con el servidor para realizar las peticiones a la base de datos mysql.

# Preparación

- Para poder ver como funciona el proyecto primero haremos unas cosas:

  1. Descargaremos del github el proyecto ejecutando el comando: git clone url que aparece al pulsar el boton code en la terminal de nuestro ide.
  2. Abriremos la carpeta del proyecto con el ide que tengamos instalado.
  3. Abriremos dos terminales en el ide que usemos.
  4. En la primera terminal pondremos cd backend y en la segunda cd frontend(Para estar en la ruta de cada una de las dos partes del proyecto).
  5. Tanto en la primera como en la segunda terminal ejecutaremos el comando siguiente npm install.
  6. Si no tenemos instalada una base de datos mysql la descargaremos del siguiente enlace: https://dev.mysql.com/downloads/installer/, descargaremos el windows(x86,32 -bit), MSI Instaler de mayor tamaño(el de 288,6M si es el más grande) y pulsaremos en el boton Download.
  7. Ejecutaremos el archivo descargado y eligiremos como mínimo Mysql Server, Mysql Workbrench y mysql shell si podemos sinó lo minimo que nos dejen que contenga estos programas, seguiremos los pasos que vamos viendo,es importante darle un password al usuario root y crear otro usuario nuevo con un password diferente al del root, todas las demás opciones las dejamos como están.
  8. Haremos un copia del el archivo .env.example de la carpeta backend en la carpeta backend y lo renombraremos como .env, luego cubrimeros los valores de las variables vacias con los valores de la base de datos mysql que tenemos instalada.
  9. Ejecutaremos el Mysql workbrench, elegiremos la sesión llamada Local instance MySQL80,nos pedirá el password y le pondremos rooty pulsaremos en ok para entrar.
  10. Ahora dentro de la sesión del Mysql workbrench, pondremos el siguiente codigo: CREATE DATABASE noticias;, para crear la base de datos que ahora mismo estará vacia.
  11. En la terminal del backend ejecutamos el siguiente comando: npm run db, para crear la estructura de la base de datos noticias y a la vez inserterle unos pocos datos.
  12. En la terminal del backend ejecutaremos el siguiente comando: npm run dev,para se ejecute el backend del proyecto noticias_colaborativas, vemos que nos sale un mensaje que dice Server listening at http://locahost:3000.
  13. Haremos un copia del el archivo .env.example de la carpeta backend en la carpeta frontend y lo renombraremos como .env, luego cubrimeros el valor de la variable vacia con el valor de la linea del mensaje del terminal del backend, copiamos esto: http://localhost:3000 y lo pegamos en después del igual de la variable llamada REACT_APP_BACKEND, después guardamos el archivo .env.

  # Visualización

- Para poder ver el proyecto noticias_colaborativas hacemos lo siguiente:

  1. En la terminal del frontend ejecutaremos el siguiente comando: npm start.
  2. Si nos pregunta esto: Would you like to run the app on another port instead? » (Y/n) pondremos Y y daremos a enter para que arranque en el siguiente puerto el frontend.
  3. Ahora podremos ver todas las funcionalidades del proyecto.

  # Base de Datos

  - La estructura de la base de datos es la siguiente:

  ## Nombre: noticias

  ## Tabla: user

  ### Campos:

  - id INT PRIMARY KEY
  - username VARCHAR(100)
  - email VARCHAR(255)
  - password VARCHAR(255)
  - registrationCode VARCHAR(250)

  ## Tabla: user_unlike_news

  ### Campos:

  - id INT PRIMARY KEY
  - idUser INT FOREIGN KEY(tabla user campo id)
  - idNews INT FOREIGN KEY(tabla new campo id)

  ## Tabla: user_like_news

  ### Campos:

  - id INT PRIMARY KEY
  - idUser INT FOREIGN KEY(tabla user campo id)
  - idNews INT FOREIGN KEY(tabla new campo id)

  ## Tabla: news

  ### Campos:

  - id INT PRIMARY KEY
  - title VARCHAR(100)
  - photo VARCHAR(255)
  - leadIn VARCHAR(100)
  - text VARCHAR(255)
  - theme VARCHAR(100)
  - idUser INT FOREIGN KEY(tabla user campo id)

