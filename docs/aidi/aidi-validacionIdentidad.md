---
id: aidi-validacionIdentidad
title: Validación de Identidad en ai·di
---

## Validación de Identidad o validación alternativa por parte del emisor
### Validación de identidad mediante servicio de validación de datos biométricos
Desde la pantalla de inicio se accede a la validación de identidad, presionando en “validar DNI”.

El primer paso de la validación consiste en escanear la parte delantera del DNI: al presionar el ícono de la cámara se abrirá un recuadro donde tenemos que apuntar y enfocar con la cámara del celular el documento de identidad.
Es importante que esté en foco y se vea bien el código de barras,  que no se corte ninguna parte del documento y que no haya sombras importantes. 

Cuando se pone el tic verde nos conduce al siguiente paso y repetimos la operación con la parte de atrás del DNI.

La prueba de vida sirve para demostrar que realmente somos quienes decimos ser. Es una instancia de seguridad para que no pueda cualquier persona con una foto nuestra abrir un usuario falso. 
Lo primero es enfocar nuestras caras dentro del rectángulo azul, automáticamente cuando esté en posición correcta comenzará a escanear y nos pedirá que miremos a alguno de nuestro hombros (derecho o izquierdo) es importante volver la mirada a la cámara.

Una vez concluido satisfactoriamente el proceso muestra los datos recaudados, de ser correctos se avanza presionando “OK”, de lo contrario se vuelve hacia atrás con la flecha y se iniciará el proceso nuevamente.  


* **Propósito**: Poder validar la identidad del usuario/a generando una credencial a través de su documento de identidad y datos biométricos.

* **Resumen**: Validar la identidad y generar dos nuevas credenciales verificables de identidad.

* **Precondición**:
1. Tener la aplicación ai·di descargada.
2. Contar con conexión a internet en el dispositivo.
3. Estar logueado en ai·di
4. Tener cámara frontal y trasera en el dispositivo.
5. Tener documento nacional de identidad.

* **Poscondición**:
1. Identidad validada mediante servicio de validación de datos biométricos.
2. Creación y emisión de Credenciales Verificables de Identidad ('Identidad' y 'Domicilio Fiscal')

* **Flujo**:

| Paso | Actor                                                                     | Sistema                                                                               |
|------|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| 1    | Ingresa a la validación de identidad desde la pantalla principal de ai·di |                                                                                       |
| 2    |                                                                           | Inicia flujo de validación                                                            |
| 3    | Saca fotografía delantera del documento de identidad                      |                                                                                       |
| 4    |                                                                           | Valida que la imagen es correcta                                                      |
| 5    | Saca fotografía trasera del documento de identidad                        |                                                                                       |
| 6    |                                                                           | Valida que la imagen es correcta                                                      |
| 7    | Saca foto prueba de vida                                                  |                                                                                       |
| 8    |                                                                           | Comprueba que la imagen atiende los requisitos necesarios para validar la información |
| 9    | Controla la información previo envio al servicio de validación            |                                                     |                                                                                       |
| 10   |                                                                           | Validación y registro de información                |                                                                                       |
| 11   |                                                                           | Creación y emisión de dos credenciales de identidad |                                                                                       |
| 12   | Recepción y visualización de credenciales de identidad                    |                                                     |                                                                                       |


### Validación alternativa por parte del emisor
Dado que la validación de identidad puede ser un requerimiento necesario por parte de un emisor previo a la emisión de las credenciales a ese individuo, existiría un bloqueante en aquellos escenarios en los que un usuario no pueda validar su identidad. Esto puede suceder, por ejemplo, porque la API del servicio de validación biométrica no reconoce correctamente la información del usuario, o porque cuentan con la cámara del dispositivo averiada.

De aquí se desprende la necesidad de realizar lo que llamamos 'Validación alternativa de Identidad'. Es un flujo que se inicia desde la app ai·di por la que se le declara al emisor de credenciales su número de documento junto a su nombre y apellido. Estos datos, junto a las credenciales de teléfono y email (estos últimos validados durante la creación de la cuenta ai·di) se le envían al emisor al que se le desea solicitar las credenciales. Es entonces, el emisor, el responsable de verificar que estos datos sean corrector y finalmente validar la identidad mediante la aprobación de la solicitud desde la plataforma de emisión de credenciales.

En caso de que el emisor ya cuente con datos identitarios de la persona, el flujo culmina con la emisión de parte del emisor de las credenciales asociadas a ese usuario/DID.

* **Proposito**: Poder validar la identidad del usuario mediante semillas, flujo creado con el fin de solventar los casos en los que la camara del celular no es suficiente para realizar la validacion mediante renaper					

* **Resumen**: El usuario valida su identidad mediante semillas, permitiendole acceder a beneficios autentifica para reingresar a la aplicacion y a los servicios de ai·di.


<!-- * **Precondición**:
1. Tener la aplicación ai·di descargada.
2. Contar con conexión a internet en el dispositivo.
3. Estar logueado en ai·di
4. 
5. 

* **Poscondición**:
1. 
2. Creación y emisión de Credencial Verificable
-->

* **Flujo**:
*TBA*
<!--
| Paso | Actor | Sistema |
|------|-------|---------|
| 1    |       |         |
| 2    |       |         |
| 3    |       |         |
| 4    |       |         |

 -->