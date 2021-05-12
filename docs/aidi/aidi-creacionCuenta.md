---
id: aidi-creacionCuenta
title: Creación y recuperación de cuenta ai·di
---

## Creación de cuenta en ai·di
Al crear una cuenta en ai·di se le genera al usuario un DID (el identificador descentralizado o DID es un tipo de identificador que permite una identidad digital verificable y descentralizada). 
Mediante el proceso de creación de cuenta, también se valida un número de teléfono móvil y una dirección de email asociadas a esa cuenta. De estas dos validaciones, se emiten dos credenciales verificables: una de teléfono y otra de email.

### Creación de DID
*TBA*

### Verificación de número de teléfono y emisión de credencial verificable
* **Proposito**: Poder verificar el númeroro de teléfono de un usuario para guardarlo efectivamente. Utilizado para creación/recupero de cuenta y edición del número ya estando logueado

* **Precondición**:
1. Tener la aplicación ai·di descargada.
2. Contar con conexión a internet en el dispositivo.
3. Contar con un número de teléfono celular.
4. Contar con acceso / recepción de SMS.

* **Poscondición**:
1. Número de teléfono validado.
2. Creación y emisión de Credencial Verificable de teléfono.

* **Flujo**:

| Paso | Actor                                             | Sistema                                                 |
|------|---------------------------------------------------|---------------------------------------------------------|
| 1    | Ingresa un número de teléfono celular             |                                                         |
| 2    |                                                   | Envía un sms al número declarado                        |
| 3    | Ingresa el código de validación que llega por sms |                                                         |
| 4    |                                                   | Crea y emite credencial de teléfono al DID de la cuenta |

### Verificación de email y emisión de credencial verificable
* **Proposito**: Poder verificar el email de un usuario para guardarlo efectivamente. Utilizado para creación/recupero de cuenta, comunicación con el usuario (ej. flujo prestadores) y edicion de mail ya estando logueado.

* **Precondición**:
1. Tener la aplicación ai·di descargada.
2. Contar con conexión a internet en el dispositivo.
3. Contar con una dirección de email.
4. Tener acceso a esa dirección de email.
5. Contar con un número de celular verificado por ai·di.

* **Poscondición**:
1. Email validado.
2. Creación y emisión de Credencial Verificable de email.

* **Flujo**:

| Paso | Actor                                               | Sistema                                             |
|------|-----------------------------------------------------|-----------------------------------------------------|
| 1    | Ingresa un correo electrónico                       |                                                     |
| 2    |                                                     | Envía un mail a la casilla registrada               |
| 3    | Ingresa el código de validación que llega al correo |                                                     |
| 4    |                                                     | Crea y emite credencial de mail al DID de la cuenta |


## Recuperación de cuenta en ai·di
	
### Recuperar cuenta mediante email y contraseña				
* **Proposito**: Poder recuperar la cuenta en caso de no tener datos de usuario/cuenta guardados en el dispositivo, pudiendo indicar un nuevo número de teléfono para asociarlo a la misma o bien usar el que ya tenía.

* **Precondición**:
1. Contar con una cuenta registrada en ai·di
2. Contar con conexión a internet en el dispositivo.
3. Recordar email, número de teléfono y contraseña de la cuenta.
4. Tener acceso a esa dirección de email.
4. Contar con acceso / recepción de SMS del número de teléfono de la cuenta.

* **Poscondición**:
1. Reingreso a la cuenta de ai·di.
2. Acceso a todos los servicios provistos por ai·di.
3. Recuperar credenciales verificables emitidas al DID de la cuenta.
					
| Paso | Actor                                  | Sistema                                               |
|------|----------------------------------------|-------------------------------------------------------|
| 1    | Ingresa a Recuperar Cuenta             |                                                       |
| 2    | Ingresa email y contraseña             |                                                       |
| 3    |                                        | Valida datos ingresados en servidor                   |
| 4    | Ingresa un número de teléfono          |                                                       |
| 5    |                                        | Valida que el teléfono no este en uso por otra cuenta |
| 6    |                                        | Navega a la siguiente pantalla                        |
| 7    |                                        | Envía código por SMS al número indicado               |
| 8    | Ingresa el código recepcionado por SMS |                                                       |
| 9    |                                        | Revoca credencial de teléfono anterior                |
| 10   |                                        | Crea y emite nueva credencial de teléfono             |
| 11   |                                        | Recupera datos de la cuenta                           |
| 12   |                                        | Navega al dashboard, ingreso a la aplicación          |

### Recuperar cuenta sin recordar la constraseña				
* **Proposito**: Poder recuperar la cuenta en caso de no tener datos de usuario/cuenta guardados en el celular y no recordar la contraseña, pudiendo que indicar una nueva contraseña posteriormente.

* **Precondición**:
1. Contar con una cuenta registrada en ai·di
2. Contar con conexión a internet en el dispositivo.
3. Recordar email y número de teléfono de la cuenta.
4. Tener acceso a esa dirección de email.
4. Contar con acceso / recepción de SMS del número de teléfono de la cuenta.

* **Poscondición**:
1. Reingreso a la cuenta de ai·di.
2. Acceso a todos los servicios provistos por ai·di.
3. Recuperación de credenciales verificables emitidas al DID de la cuenta.


| Paso | Actor                                                | Sistema                                      |
|------|------------------------------------------------------|----------------------------------------------|
| 1    | Ingresa a "Recuperar Cuenta"                         |                                              |
| 2    | Ingresa en "No recuerdo la contraseña"               |                                              |
| 3    | Ingresa email de la cuenta                           |                                              |
| 4    |                                                      | Envía código al email indicado               |
| 5    |                                                      | Navega a la siguiente pantalla               |
| 6    | Ingresa código recepcionado en el email de la cuenta |                                              |
| 7    | Ingresa 2 veces la nueva contraseña                  |                                              |
| 8    |                                                      | Valida código y nueva contraseña             |
| 9    |                                                      | Crea y emite nueva credencial de teléfono    |
| 10   |                                                      | Recupera datos de la cuenta                  |
| 11   |                                                      | Navega al dashboard, ingreso a la aplicación |
<!-- **revisar instancia de validación de número de celular** -->


## Login
* **Proposito**: Poder reingresar a la cuenta de ai·di mediante email y contraseña en dispositivos que previamente hayan sido logueados en ai·di.
* **Resumen**: El usuario se autentifica para reingresar a la aplicacion y a los servicios de ai-di.

* **Precondición**:
1. Contar con una cuenta registrada en ai·di
2. Contar con conexión a internet en el dispositivo.
3. Recordar email y contraseña de la cuenta.
4. Tener datos de la cuenta deseada guardados en el dispositivo, es decir, haberse estado logueado previamente con ese dispositivo, sin haber borrado datos de la aplicación o haberla eliminado.

* **Poscondición**:
1. Reingreso a la cuenta de ai·di.
2. Acceso a todos los servicios provistos por ai·di.
3. Visualización de credenciales verificables emitidas al DID de la cuenta.

| Paso | Actor                                   | Sistema                                      |
|------|-----------------------------------------|----------------------------------------------|
| 1    | Ingresa a "Ingresar"                    |                                              |
| 2    | Ingresa email y contraseña	de la cuenta |                                              |
| 3    |                                         | Valida los datos en servidor                 |
| 4    |                                         | Navega al dashboard, ingreso a la aplicación |
                				