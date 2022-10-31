# Cloud District API REST

Cloud District API REST es una prueba técnica que gestiona clubes, jugadores y entrenadores por medio de un API REST

## Instalación

Tras clonar el repositorio, descargaremos todas las dependencias con el gestor de dependencias [npm](https://docs.npmjs.com/getting-started)

```bash
npm install
```

Tras instalar las dependencias necesarias para poder ejecutar nuestro proyecto, tendremos que descargar MongoDB.

Durante la instalación, elegiremos instalar la herramienta interactiva MongoDB Compass para una experiencia de usuario más sencilla.

Una vez MongoDB ha finalizado su instalación, crearemos una nueva conexión y nos conectaremos a ella. (Veremos que hay 3 bases de datos por defecto)

(Si no lo tenemos, también descargaremos Postman)


## Uso

Abriremos la consola dentro de nuestro proyecto y, sirviéndonos del gestor de dependencias [npm](https://docs.npmjs.com/getting-started), ejecutaremos nuestro proyecto.

```bash
npm run dev
```

Abriremos el MongoDB Compass y actualizaremos las bases de datos. Podremos comprobar que hay una nueva llamada CloudDistrictLeague con 3 colecciones en su interior.

Sirviéndonos de los archivos .json dentro de la carpeta de assets, importaremos los datos que guardan cada uno de los ficheros en su colección correspondiente. De esta manera ya tendremos datos de prueba.

Finalmente, abriremos Postman. En la sección de Workspaces crearemos un Workspace o abriremos uno ya existente. Una vez abierto, haremos click en el botón "Import". Subiremos el archivo "PostmanCollectionImport.json" que está dentro de la carpeta assets. De esta manera podremos importar una colección para que las pruebas sean más sencillas de llevar a cabo.


## Comentarios

Respecto al envío de emails al dar de alta/baja a un jugador/entrenador de un club no lo he implementado. Utilizando el módulo de nodemailer lo he estado probando creando un servidor SMTP falso en [Mailtrap](https://mailtrap.io/) y funcionaba correctamente. Es una implementación sencilla y he dejado en el package.json la dependencia de nodemailer. No obstante, ya que en el futuro se plantea que pueda ser notificado por otras vías y que el servidor de correo es temporal, no quería que este desarrollo pudiera desembocar en errores imprevistos de conexión.