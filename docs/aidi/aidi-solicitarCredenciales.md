---
id: aidi-solicitarCredenciales
title: Solicitud de credeciales a un emisor
---

*TBA*

* **Proposito**: automatizar la conexión e intercambio de información entre la entidad emisora y el titular de la cuenta de la app ai·di.

* **Precondición**:
1. Tener la aplicación ai·di descargada.
2. Contar con conexión a internet en el dispositivo.
3. Tener cuenta en ai·di
4. Estar logueado en ai·di
5. Tener la identidad validada

* **Poscondición**:
1. Creación y emisión de Credencial Verificable en caso de existir alguna a su titularidad
2. Recepción de Credencial Verificable en caso de existir al menos emitida a su DID

* **Flujo**:

| Paso | Actor                                                  | Sistema                                                                                                            |
|------|--------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| 1    | Ingresa a la solapa de emisores                        |                                                                                                                    |
| 2    | Identifica al emisor al que desea hacerle la solicitud |                                                                                                                    |
| 3    | Hace click en solicitar credenciales                   |                                                                                                                    |
| 4    |                                                        | Envía al emisor información sobre DID y DNI                                                                        |
| 5    |                                                        | Recorre la base de datos de precredenciales y le asigna el DID a aquellas que coincidan con el DNI correspondiente |
| 6    |                                                        | Crea y emite credenciales a DIDs recepcionados                                                                     |
| 7    | Recibe las nuevas credenciales emitidas                |                                                                                                                    |


Existe un flujo alternativo, que supone la imposibilidad de haber validado identidad a través de los datos biométricos, por lo que la precondición (5) no se cumple. En este caso, se le solicita una validación de identidad al emisor con el siguiente proceso:

| Paso | Actor                                                                                                                               | Sistema                                                                                                            |
|------|-------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| 1    | Ingresa a la solapa de emisores                                                                                                     |                                                                                                                    |
| 2    | Identifica al emisor al que desea hacerle la solicitud                                                                              |                                                                                                                    |
| 3    | Hace click en solicitar credenciales mediante validación de identidad                                                               |                                                                                                                    |
| 4    | Completar la informacion solicitada (DNI, Nombre, Apellido) y acepta envío de información adicional como email y número de teléfono |                                                                                                                    |
| 5    |                                                                                                                                     | Envía la información al emisor                                                                                     |
| 6    |                                                                                                                                     | Emisor valida la identidad                                                                                         |
| 7    |                                                                                                                                     | Recorre la base de datos de precredenciales y le asigna el DID a aquellas que coincidan con el DNI correspondiente |
| 8    |                                                                                                                                     | Crea y emite credenciales a DIDs recepcionados                                                                     |
| 9    | Recibe las nuevas credenciales emitidas                |       


			