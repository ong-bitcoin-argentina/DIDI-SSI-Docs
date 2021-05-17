---
id: emisores-plataforma
title: Plataforma para la emisión de Credenciales Verificables en ai·di
---

La plataforma de emisores (o módulo **Issuer**) es la herramienta de DIDI para la emisión de credenciales verificables.

<!-- ## Login y logout -->

## Emisión Manual de Credenciales
### Templates
Para la emisión de Credenciales Verificables, el primer paso del emisor será definir qué campos y datos queremos que contengan. Con estas definiciones se podrá dar de alta uno o más formatos de credencial en el portal web del emisor. A estos modelos los llamaremos *templates* y los vamos a crear desde la solapa de templates.

*TBA imagen solapa templates*

Una vez definido un template para una credencial, estamos en condiciones de cargar los datos que este requiera a fin de crear una credencial y posteriormente emitirla.

Desde esta sección se podrá:
* Visualizar listado de templates				
* Visualizar detalles template				
* Crear template				
* Editar template			
* Eliminar template

### Creación y emisión de credenciales

#### Credenciales pendientes
Desde la sección de credenciales pendientes, podemos crear nuevas credenciales, seleccionando el template que deseamos y completar los datos correspondientes. Este proceso se puede hacer manualmente completando los datos requeridos o bien mediante la carga de un archivo csv en caso de requerir crear varias credenciales de ese template para distintos destinatarios.

*TBA imagen solapa credenciales pendientes*

En resumen, desde esta sección se podrá:
* Crear credencial				
* Crear credencial - Caso Nuevo participante			
* Crear credencial - Caso Cargar participate			
* Crear credencial - Generar csv				
* Crear credencial - Cargar csv				
* Visualizar listado credenciales pendientes
* Visualizar detalles credencial pendiente				
* Emitir credencial pendiente (dejando, de esta forma, de estar en estado pendiente)
* Editar credencial pendiente				
* Borrar credencial pendiente				
* Eliminar credenciales pendientes seleccionadas				
* Emitir credenciales pendientes seleccionadas (dejando, de esta forma, de estar en estado pendiente)

#### Recepción de credenciales en la wallet (ai·di) del usuario
Al emitirse la credencial, esta será recibida en la app ai·di por el titular.

_Las credenciales se emiten en formato **jwt**, por lo que pueden ser fácilmente leídas si el usuario decidiera compartirlas con un tercero._

### Revocación de credenciales
*TBA*

### Carga de DIDs para la emisión de credenciales
*TBA*

Desde esta sección se podrá:
* Descargar modelo csv para carga masiva de DIDs				
* Cargar did mediane csv	
* Cargar did mediante QR

### Solicitud de credenciales por parte de un emisor
*TBA*

### Delegaciones
*TBA*

Las delegaciones permiten otorgarle permisos a otro emisor (y por ende otro DID) de operar como delegado de quien otorga el permiso.
Para mayor información ver [Flujos de delegación](../developers/solucion/descripcion-tecnica/delegation)

Desde esta sección se podrá:
* Crear delegado
* Visualizar lista de delegados

### ABM de usuarios y permisos
*TBA*

En estas secciones se pueden crear perfiles de usuario con permisos específicos y usuarios respectivamente.
Podemos tener distintos usuarios de la plataforma de emisores que tendrán permisos según su perfil, por ejemplo, un usuario puede tener acceso unicamente a la visualización de la información, otro puede realizar acciones de emisión y revocación y así dependiente de su configuración.

Desde esta sección se podrá:
* Crear perfil de usuario
* Editar perfil de usuario
* Eliminr perfil de usuario
* Visualizar lisado perfil de usuarios
* Visualizar listado de usuarios
* Crear usuario
* Editar usuario
* Eliminar usuario

### Emisores multi-blockchain
*TBA*
El emisor puede crearse DIDs para cada una de las blockchains con las que trabaja DIDI: LACChain, RSK o BFA.

Desde esta sección se podrá:
* Cambiar configuraciones por defecto de template y blockchain			
* Registro de nuevo DID
* Visualizacion listado de registros de DID
* Editar nombre registro de DID
* Renovar registro de DID				
* Revocar registro de DID

### DIDI Issuer Backend
**Brief**
El issuer habilita a distintas entidades autorizadas por el DIDI-server a generar y emitir certificados que podrán ser accedidos por los dueños de los mismos desde la app ai·di.

[**Repositorio**](https://github.com/ong-bitcoin-argentina/DIDI-SSI-Issuer-Module)

Para mayor detalle técnico: [Descripción Técnica | Issuer](../developers/solucion/descripcion-tecnica/arquitectura-issuer)
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE2NjQ3MjMzOSwtMjEwNDgwNDg4N119
-->