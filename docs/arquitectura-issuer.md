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

#### /participant
Se conoce como participantes a aquellos dids cargados en el listado del emisor y que luego se utilizan como input en los desplegables a seleccionar el titular al emitir un credencial.


#### /template
Se leen, crean, modifican y eliminan templates de credenciales.


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

#### /register
Estas rutas permiten obtener, crear, editar y eliminar registros de delegacion de un nuevo emisor, sobre la blockchain elegida.
Dichos registros contienen Nombre, did y clave privada del nuevo emisor.
Provee también una ruta por la cual se obtiene la lista de blockchains disponibles.

#### /default
Se utiliza para crear los valores por defecto del template de credencial y la blockchain de verificación. 

#### /profile
Crud de perfiles. Cada perfil es un conjunto de permisos para leer, crear/modificar y eliminar en un módulo.

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
