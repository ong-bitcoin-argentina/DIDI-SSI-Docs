---
id: arquitectura-issuer
title: Issuer
---

DIDI-SSI-Issuer-module es una herramienta que permite generar y emitir credenciales verificables. Cuando el Issuer se da de alta con DIDI Server, las credenciales se almacenan en Mouro, y son enviadas a la app ai·di del titular (DID titular).

El backend se encuentra desarrollado en NodeJS y ExpressJs utiliza MongoDB para almacenar sus datos.

Dentro del código, se encuentra el termino "certificado", jwt que hacen referencia a las credenciales verificables o VC.

![Issuer backend](./images/didi-ssi-issuer-back.png)
> Los diferentes colores en las líneas no tienen un signifaco específico. Es para seguír con mayor facilidad las dependencias. **A -> B** representa que el módulo **A** utiliza a **B**

**Repo**
- https://github.com/ong-bitcoin-argentina/DIDI-SSI-Issuer-Module

### Rutas
#### /user
Este conjunto de rutas se crean, modifican y eliminan usuarios y administradores.
Dentro de estas rutas se encuentra el endpoint securaizado para crear el primer admin.
> /user - Generar un usuario para el issuer

> /user/admin - Generar un usuario ADMIN para el issuer

> /user/login - Validar que la contraseña se corresponda con la del usuario

> /user/:id (delete) - Marcar un usuario como borrado

> /user/:id (put) - Editar un usuario

> /user/all - Obtener la lista de todos los usuarios

#### /participant
Se conoce como participantes a aquellos dids cargados en el listado del emisor y que luego se utilizan como input en los desplegables a seleccionar el titular al emitir un credencial.
> /participant/dids - Obtener los dids y nombres de todos los participantes conocidos

> /participant/global - Obtener los participantes con información no vinculada a un modelo de certificado en particular

> /participant/all/:templateId - Obtener los participantes con información vinculada a un modelo de certificado

> /participant/new/:requestCode - Obtener la información del participante con el código indicado, si la data fue modificada

> /participant/:did - Obtener la info de participante asociada a un usuario en particular

> /participant/new/ - Inicializar la data del participante unicamente con el did y el nombre

> /participant/id (put)- Modificar la data del participante con los datos recibidos

> /participant/id (delete) - Marcar la data de participante como borrada

> /participant/:requestCode - Obtener info de participante global a partir de un pedido de certificado realizado con "/template/request/:requestCode"

> /participant/:{templateId}/:{requestCode} - Obtener info de participante para un template en particular a partir del QR generado en "/template/:id/qr/:requestCode"

#### /template
Se leen, crean, modifican y eliminan templates de credenciales.
> /template - Generar un nuevo modelo de certificado sin contenido

> /template/all - Obtener la lista con info de los modelos de certificados generados por el issuer

> /template/:id (post) - Obtener un modelo de certificado a partir del id

> /template/:id (put) - Modifica un modelo de certificado con los datos recibidos

> /template/:id (delete) - Marcar un modelo de certificado como borrado

> /template/request/:requestCode - Emitir un pedido de info de participante global a partir de un pedido de certificado

> /template/:id/qr/:requestCode/:registerId - Generar un QR para pedir info de participante para un template en particular

#### /cert
Estas rutas permiten crear, modificar, elimnar u obtener credenciales.
> /cert/all - Obtener la lista con info de los certificados generados por el issuer

> /cert/find - Listar certificados emitidos

> /cert/:id - Retornar un certificado a partir de su id

> /cert - Generar un nuevo certificado a partir de la data y el modelo de certificado

> /cert/:id (put) - Modificar un certificado con los datos recibidos

> /cert/:id (delete) - Marcar un certificado como borrado y lo revoca en caso de haber sido emitido

> /cert/:id/emmit - Dado un id enviar certificado a didi-server para ser emitido

> /cert/updateAllDeleted - Recuperar todas las credenciales marcadas como eliminadas

#### /delegate
*TBA. Esperando implementación multiblockchain.*

Coordina las delegaciones. Este servicio genera la tx a la blockchain correspondiente, y luego almacena esa delegación en la DB local.

Este servicio tiene un bug, que no reconoce las delegaciones realizdas por fuera de la app. Es decir, si se realiza una delegcion en blockchain, no queda registrada en la app.
> /delegate/all - Obtener todos los dids a los que el issuer delego su permiso para emitir certificados

> /delegate (post) - Autorizar al did recibido a emitir certificados

> /delegate (delete) - Revocar autorización al did recibido para emitir certificados

> /delegate/didDelegationValid - Cambiar el nombre que se mostrara en todos los certificados que emita este issuer o sus delegados

#### /register
Estas rutas permiten obtener, crear, editar y eliminar registros de delegacion de un nuevo emisor, sobre la blockchain elegida.
Dichos registros contienen Nombre, did y clave privada del nuevo emisor.
Provee también una ruta por la cual se obtiene la lista de blockchains disponibles.
> /register (post) - Crear un nuevo registro de delegación de un nuevo emisor en la blockchain elegida

> /register (get) - Obtener la lista de todos los registros

> /register/all/blockchain - Obtener la lista de todas las blockchains

> /register/:did (put) - Editar un registro

> /register/:did (delete) - Revocar un registro

> /register/:did/retry - Intentar nuevamente el delegate del Registro en DID

> /register/:did/refresh - Refrescar registro en DIDI
 
#### /default
Se utiliza para crear los valores por defecto del template de credencial y la blockchain de verificación. 
> /default (post) - Registra un nuevo default

> /default (get) - Obtener el default

> /default (put) - Cambiar el default


#### /profile
Crud de perfiles. Cada perfil es un conjunto de permisos para leer, crear/modificar y eliminar en un módulo.
> /profile (post) - Registrar un nuevo perfil

> /profile (get) - Obtener lista de todos los perfiles

> /profile/:id (put) - Editar un perfil

> /profile/:id (delete) - Borrar un perfil

### Servicios
Los servicios se encargan de coordinar una acción y llevar a cabo una acción dentro del sistema. Para

#### Blockchain services
*TBA. Esperando implementación multiblockchain.*

#### Cert Service
Este servcio se encrga de crear credenciales a partir de templates para luego almacenarlos en DB local. 
Así como de modificar y eliminar credenciales.

#### Mouro service
*Este servicio no es lo que su nombre indica, debe ser refactorizado.*

Se encarga de crear credenciles verificables, para luego enviarlas a DIDI Server, o ser elimnadas en DIDI Server.

Otra funcionalidad con la que cuenta es enviar shareRequest a DIDI-Server. [Explicar que es un shareRequest y para qué sirve]

#### Delegate service
Se encarga de almacenar en DB local las delegaciones. El impacto real de las delegaiones se realiza en blockchain. 

A este servicio, lo debería llamar otro servicio que se ecuentre escuchando eventos en las distintas blockchain.

#### Default service
Se encarga de establecer la blockchain y el template por defecto. 

#### Token service
Este servicio es el más simple del Issuer. Se encarga de crear y verificar tokens vacios, firmados por el Issuer.

#### User service
Se encarga de crear, editar y elimnar usuarios. También se encarga de realizar el login.

#### Participant service
Los participantes son todos los dids sobre los qu se tiene información en el sistema. Este servico provee la funcionlidad para crear, edita y modificar. Además, para obtener listas de participantes por requestCode y templateId.
