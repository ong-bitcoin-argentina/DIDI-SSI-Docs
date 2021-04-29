---
id: arquitectura-server
title: Server
---

DIDI-SSI-Server es el nodo central de ai·di, permite almacenar los datos de recuperación de usuario y actúa como intermediario entre los demás módulos y Mouro, validando certificados y evitando que issuers no autorizados puedan emitir certificados.
Se encuentra desarrollando en NodeJS y ExpressJs y almacena sus datos en MongoDB.

![Server](./images/didi-ssi-server.png)
Los diferentes colores en las líneas no tienen un signifaco específico. Es para seguir con mayor facilidad las dependencias. **A -> B** representa que el módulo **A** utiliza a **B**

### Rutas
#### /admin
Se utilizan para obtener información confidencial de los usuarios. Están protegidas por un middleware que valida que el JWT pertenezca a un Admin.
> /admin/user/did/:did - Obtiene información confidencial sobre el usuario según su did.

> /admin/user/phone - Obtiene informacion confidencial sobre el usuario según su numero de teléfono.

#### app y user auth
> /appAuth y /userApp

Estas rutas se utilzan para crear applicaciones autorizadas y usuarios pertencientes a estas apps.

#### /issuer
Desde estas rutas se autoriza y revoca issuers para emitr credenciales.
También, se le permite a los issurers registrados con anterioridad emitir y revocar credenciales.
Otra funcionalidad de interés es la de crear shareRequest.
> /issuer/issueCertificate - Valida el certificado generado por el issuer y lo envia a mouro para ser guardado

> /issuer/issueShareRequest - Permite al usuario dueño del did, pedir uno o más certificados para obtener la información de los mismos

> /issuer/revokeCertificate - Permite revocar un certificado previamente almacenado en mouro

> /issuer/verifyCertificate - Permite validar un certificado a partir del jwt

> /issuer/verify - Verifica la existencia del emisor según el did

> /issuer - Revocar autorización de un emisor para emitir certificados

> /issuer/:did/refresh - Refrescar autorización de un emisor para emitir certificados

> /issuer/:did (get) - Obtener nombre de un emisor autorizado a partir de su did

> /issuer/:did (put) - Editar el nombre de un emisor autorizado a partir de su did

#### Mail
Estas rutas se utilizan para enviar y reenviar el mail con el código de validación y su posterior verificación. Se encuentran protegidas por rate-limit.
> /sendMailValidator - Permite generar una validación a través del envío de un correo electrónico.

> /reSendMailValidator - Reenviar validación de email

> /verifyMailCode - Validación del código de 6 digitos enviado por Mail

#### /presentation
Estas rutas almacenan pesentaciones y le asigan un ID. Mediante ese ID se permite recuperar las presentaciones.
> /presentation - Guarda una presentación, que luego se podra acceder a ella a travez de un linck en el Validator Viewer.

> /presentation/:id - Obtiene una presentación dado un id

#### /renaper
Estas rutas se encargan de enviar los datos de un usuario, incluyendo una imagen de selfie y el dni, al Re.Na.Per (Registro Nacional de las Personas)  para ser validados.
> /renaper/validateDni - Permite validar la identidad de un usuario contra renaper

> /renaper/validateDniState - Retorna el estado de un pedido realizado en /validateDni
:::note Nota
Además, se crea un registro en donde se almacena el estado de la verificación en la collection authRequest.
:::

#### /semillas
*TBA*

#### /shareRequest
Estas rutas permiten almacenar y recuperar shareRequest.
> /shareRequest - Guarda un ShareRequest

> /shareRequest:id - Obtiene un ShareRequest según id

#### Sms
Estas rutas se utilizan para enviar por sms con el código de validación y su posterior verificación. Estas rutas se encuentran protegidas por rate-limit.
> /sendSmsValidator - Validación del email

> /reSendMailValidator - Reenviar validación del email

> /verifyMailCode - Validación del código de 6 digitos enviado por Mail

#### /user
Estas rutas son las encargads de crear usuarios, modificarlos y eliminarlos. 
También se encuentra la funcionalidad de verificar credenciales

Renovar el token de firebase

### Services
#### AppAuth
Este serivcio agrega en la base de datos el registro necesario para autorizar una app. También permite obtener una app autorizada a partir de su DID.

#### AuthRequest
Son rutas que permiten verificar, actualizar y almacenar en una colección, los pedidos de validación de identidad contra un proveedor de identidad (Re.Na.Per). 

#### Cert
Genera credenciales para mail, número de teléfono, etc. 
Crea shareRequests y petitions que se utilizan para solicitar información al usuario.
Se verifican los certificados para número telefónico, emil, etc.

#### Firebase
Este servicio se utiliza para comunicarse con FireBase. Actualmente solo para envir push notifications.

#### Issuer
Este servicio se encarga de la gestión de issuers registrados, así como de crear y editar issuers, de renovar las delegaciones y de realizar el callback al issuer.

#### Mail
Se encarga de enviar email a través de mailgun. De realizar la verificación de los códigos de emails y de almacenar el estado de validaciones de email. El email se alamacena encriptado en la BD. Este servicio y el modelo Mail son iguales a los de sms, deben ser refactorizado para mejorar la mantenibilidad. 

#### Mouro
Realiza llamados a Mouro para obtener el hash del backup, guardar y revocar credenciales, también para hacer comprobaciones si existe una credencial.

#### Presentation
Crear y recuperar presentaciones por ID. Las presentaciones tienen una expiración definida en las costantes del server.

#### Renaper
Realiza una validciones de dni contra RENAPER (REgisto NAcional de PERsonas). Este proceso cuenta con los pasos de enviar imagenes del frente y reverso del DNI, foto de la persona y prueba de vida. El resultado de este proceso es un grado de confianza de la validación.

#### Semillas
Gestiona los requests al backend de semillas y el manejo de los modelos de validaciones y authrequests. Entre ellos se encuentran un CRUD de validaciones y obtencion de prestadores.

#### ShareReques
Se pueden crear shareRequest y recuperar por su ID. ADemás, al recuperarlo se verifica que el ISS enviado sea el de AUD especificado en el shareRequest.

#### sms
Se encarga de enviar sms a través de twilio. De realizar la verificación de los códigos envidaos mediante sms y de almacenar el estado de validaciones de números telefónicos. El número se alamacena encriptado en la BD. Este servicio y el modelo Phone son iguales a los de mail, deben ser refactorizado para mejorar la mantenibilidad.

#### Tokens
Decodificacion y verificaciones de JWT.

#### UserApp
Se crean relaciones entre usuarios y apps y se permite recuperar una app autorizada mediante un DID de usuario.

#### User
Este servicio resuelve la creacion y modificaciones de usuarios. También se realizan el login, recuperación de cuenta y las verificaciones por número telefónico y email utilzado.
