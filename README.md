# Documentación de movie-fullstack-springboot-react

## Introducción

Aplicación web dedicada a las reseñas de películas, permite explorar, revisar y comentar sobre sus peliculas favoritas, en adición, pueden observar el trailer de las películas. Hace uso de la librería de React para la creación del frontend, del framework Spring Boot para el desarrollo del backend y MongoDB como base de datos NoSQL

## Contenido

### Frontend

1. **Estructura de carpetas**

**frontend/movie-gold-v1/**

**ReviewForm**

******api******

************assets************

******components/******

header

hero

home

trailer

**************reviews**************

1. ****Tecnologías****

Node.js y npm o yarn (levantamiento del proyecto)

Ngrok (Protección de ruta de entorno de desarrollo)

1. **********Rutas**********

“**/** ”: Página principal con exhibición de las películas.

“**/Trailer/:ytTrailerId**”: Trailer de una película en específica.

“**/Reviews/:movieId**”: Reseña de una película en específico.

### Backend

1. **********************************Estructura de carpetas**********************************

**backend/demo/src/**

**main/java/com/moviesapi/**

****************************main/resources****************************

1. ************************Tecnologías************************

Java Development Kit (JDK) 17 

1. **************************API Endpoints**************************

“******GET /api/v1/movies******”: Obtiene todas las películas en la base de datos

“************GET /api/vi/movies/{imdbId}************”: Obtiene detalles de una película en específico junto con reseñas.

“************POST /api/v1/reviews************”: Publicar nuevas reseñas.

### Data

Carpeta que alberga el archivo json de las películas para la importación a la base de datos no relacional MongoDB