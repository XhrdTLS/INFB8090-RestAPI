# API Classrooms
Servicio Rest para una API de reserva de salas de la Universidad.

Link actual: https://rest-dev-xnkc.4.us-1.fl0.io
Link de secundario: https://niguto.4.us-1.fl0.io/

---
### Introducción
En la actualidad, la arquitectura REST es un estándar fundamental para el desarrollo de servicios web eficientes, interoperables y escalables. Este proyecto tiene como objetivo utilizar la arquitectura REST (Transferencia de Estado Representacional) con fin de desarrollar servicios web, este servicio utilizará la autenticación de Google (oauth 2.0) lo que entrega diferentes tipos de beneficios de seguridad como el proceso de autorización con consentimiento esto ayuda a proteger la privacidad de los usuarios. Por otro lado, entrega una gran escalabilidad debido a que google es el encargado de administrar una mayor llegada de usuarios.

### Objetivos

- Comprender el funcionamiento del protocolo HTTP (sus verbos y estados).
- Comprender el funcionamiento de aplicaciones stateless, mecanismos asíncronos y funcionamiento REST.
- Diseñar e implementar un proyecto de software con requerimientos específicos.

### Especificaciones

En el escenario supuesto de que la Universidad Tecnológica Metropolitana, está evaluando una forma de implementar un sistema para evaluar cualitativamente las distintas clases que se realizan en la universidad. 

Autenticación
El sistema debe contener los usuarios de la UTEM, se necesita que el mecanismo de autenticación sea el provisto por Google (oauth 2.0), lo que garantiza la validez de la autenticación, es necesario además que exista un manejo de roles, para una personalización futura. Cada llamada a los servicios api, debe identificar al usuario y tener un access token, para validar la llamada contra los servicios de Google, esto se debe realizar un token bearer jwt.
La implementación oauth no es obligatoria (pero su uso sí), el sistema debe validar el token jwt, para asegurar la integridad de la autenticación Google. 

### Tecnologías Usadas
#### Node JS
En este proyecto se utiliza Node.js, debido a que por ser el entorno de ejecución de JavaScript es más común en entornos de la web. Una API (Application Programming Interface) es una interfaz que permite la comunicación entre diferentes aplicaciones o servicios, mediante el intercambio de datos en un formato estandarizado. Hacer APIs con Node.js es más sencillo, ya que se puede usar el mismo lenguaje tanto en el lado del servidor como en el del cliente. Node.js permite crear aplicaciones web escalables y eficientes, aprovechando las ventajas de JavaScript como lenguaje dinámico y multiplataforma. Además, Node.js cuenta con una gran comunidad de desarrolladores que aportan librerías y módulos para facilitar el desarrollo de diferentes tipos de proyectos.
#### Express
En el proyecto de API se utiliza Express porque es un framework de Node.js que facilita el desarrollo de aplicaciones web y servicios RESTful. Esta herramienta fue usada debido a que ofrece una serie de ventajas, como:
- Una arquitectura basada en middleware que permite modularizar el código y reutilizar funcionalidades.
- Una sintaxis sencilla y flexible que permite crear rutas, manejar peticiones y respuestas, y configurar el servidor.
- Una gran variedad de paquetes y extensiones disponibles en el ecosistema de Node.js que amplían las capacidades de Express.
- Una alta compatibilidad con bases de datos, tanto relacionales como no relacionales, mediante el uso de drivers o librerías específicas.
- Una buena documentación y una amplia comunidad de desarrolladores que ofrecen soporte y recursos.
Por estas razones, Express es una opción muy popular y adecuada para crear APIs robustas, escalables y eficientes.


#### FL0
La API está alojada en fl0, una plataforma web que permite desplegar la API de forma fácil y rápida en la nube. Esto significa que el sitio web se comunica con un servidor remoto que procesa las solicitudes y devuelve los datos necesarios para mostrar el contenido. Fue escogida debido a que Fl0 ofrece una solución simple y eficiente para crear y gestionar sitios web dinámicos sin necesidad de configurar servidores ni bases de datos. También debido al poco tiempo de hacer la implementación al servidor entregado y fue una alternativa intuitiva y 

#### PostgreSQL
Base de datos, se usó principalmente para crear la base de datos, pero que luego fue transferida a ElephantSQL, aunque conservando la estructura y utilizando Postgres en el servidor.


#### DBeaver
DBeaver es una herramienta de administración de bases de datos que proporciona un entorno gráfico para trabajar con diversas bases de datos. Fue escogida debido a que soporta múltiples bases de datos entre ellas PostgreSQL, además nos proporciona una interfaz  gráfica que facilita la administración y consulta de bases de datos. Se pueden explorar las tablas, ejecutar consultas SQL, y gestionar los objetos de la base de datos de una manera visual.
De igual forma se puede utilizar pgadmin 4, que es muy parecido.

#### Postman
Postman se utilizó principalmente para hacer las pruebas automatizadas del proyecto REST, para ello se escribieron scripts de prueba en JavaScript para automatizar la verificación del comportamiento de las respuestas de la API. Esto es útil para garantizar la calidad y la integridad de las API.

### Diccionario de datos
Según lo solicitado, se crearon 5 tablas, las cuales están compuestas de la siguiente manera:
La tabla room (sala) contienen los siguientes atributos:
 uuid: identificador único de cada sala
name:  nombre de la sala M10-201
capacity: cantidad de personas que se pueden permitir por recinto
created_At: tiempo y hora que se crea
updated_At: tiempo y hora que se actualiza
location: dónde se encuentra la sala
type: tipo de sala (sólo el identificador)


La tabla request (reservas) contienen los siguientes atributos:
token: identificador único de reserva 
token_user: identificador del usuario
date_req: cuando se solicita la reserva
time_start: hora de inicio de la reserva
time_end: hora de término de la reserva
created_At: tiempo y hora que se crea
updated_AT: tiempo y hora que se actualiza
uuid_room:  identificador de la sala

Las demás tablas sólo contienen los nombres del tipo de sala y ubicación, o datos del usuario como email (@utem.cl) y nombre. Además de obtener en todos los casos el Created At y Updated At



---
### Integrantes:
- Gustavo Oyarce Peralta
- Nicolás Jara Carvajal
- Tomás Lillo Silva
---