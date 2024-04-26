/*
INMOBILIARIA:
-------------
Obtener todas las quejas de todos los usuarios
GET http://localhost:3000/quejas

Obtener una queja en especifico
GET http://localhost:3000/quejas/seleccion/13

Modificar una queja
PUT http://localhost:3000/quejas/13
json
{
  "estado": "Atendido"
}

Borrar una queja
DELETE http://localhost:3000/quejas/ras


INQUILINO:
----------
Obtener las Quejas de un inqulino en especifico
GET http://localhost:3000/quejas/1

Obtener una queja en especifico
GET http://localhost:3000/quejas/seleccion/13

Crear una queja
POST http://localhost:3000/quejas/crear
json
{
  "id_usuario": 1,
  "id_contrato": 1,
  "descripcion": "Agujero en el techo",
  "tipo": "Queja",
  "estado": "Pendiente"
}
*/