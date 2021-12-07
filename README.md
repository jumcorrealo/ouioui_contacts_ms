# Docker/TypeScript/MongoDB Contacts_ms


Para ejecutar este ms en local:

Cree un archivo `.env` que contenga:
```
mongoDB=mongodb://mongo:27017/docker-typescript  
NODE_ENV=development
```
este archivo existe por defecto

Corra `npm install`

construya la imagen docker `docker-compose build`

Ejecute la imagen docker `docker-compose up` 

El ms se ejecuta en el puerto: 3030
La base de datos en el puerto: 27017


Dirección: http://localhost:3030/

Registrar nuevos datos: http://localhost:3030/register
Método: Post
json: 
{
    "idContact": "fdasdfadf",
    "longitude": 11.1234,
    "latitude": 11
}


Consultar distancias: http://localhost:3030/register
Método: Get



