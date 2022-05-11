---
id: arquitectura-mouro
title: Mouro
---

DIDI-SSI-Mouro es un fork de uPort Trust Graph Server (aka EdgeServer). Es responsable de almacenar los datos y la información del usuario.

Mouro es un gestor de base de datos, el cual se comunica con una base de datos SQLite para almacenar las credenciales emitidas por el didi-server y los distintos issuers. Permite el acceso a los usuarios de DIDI a sus credenciales y verifica el estado de los mismos.

Los datos se almacenan en una archivo único. 
Inicialmente se desarrolló, con el objetivo de generar archivos de backup por cada DID, pero esto ya no es así. Todos los backups apuntan al mismo hash debido al uso de la variable de entorno `SQLITE_FILE`. Este se puede observar al realizar los backups luego de agregar una [nueva arista](https://github.com/ong-bitcoin-argentina/DIDI-SSI-Mouro/blob/develop/src/lib/schemaMgr.ts#L92), que el did que se envía no tiene efecto debido al condicional por la variable de entorno [SQLITE_FILE](https://github.com/ong-bitcoin-argentina/DIDI-SSI-Mouro/blob/develop/src/lib/schemaMgr.ts#L137) seteado como **/database/data**

![Mouro](../../../images/didi-ssi-mouro.png)
> Los diferentes colores en las líneas no tienen un significado específico. Es para seguir con mayor facilidad las dependencias. **A -> B** representa que el módulo **A** utiliza a **B**

## Llamadas
### Types
Las query cuentan con 2 tipos.

#### Edge
Representa una credencial emitida.
```
type Edge {
  hash: ID!
  jwt: String!
  from: Identity!
  to: Identity!
  type: String
  time: Int!
  tag: String
  visibility: VisibilityEnum
  retention: Int
  data: String
}
```

#### Identity
Contiene un identificador descentralizado.
```
type Identity {
  did: String!
}
```
### Headers
Las llamadas requieren de la generación de un token vacío firmado por el DID del usuario que realiza la llamada, este se ingresa en la sección “HTTP HEADERS” y tiene el siguiente formato:

```json
{  
  "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NkstUiJ9.eyJpYXQiOjE1ODAyMjY0NzEsImV4cCI6MTU4MDIyNjk3MS4xMTIsImlzcyI6ImRpZDpldGhyOjB4REZBNTE4Y2VhRWQxYmZlNmY3MDRFNTFBMThkNGJCMEExNDcxNGNkMiJ9.NdihoBy4uEMsCLaitRIETQ-fnB2SGJLyxfApked_42T9lZHJkIcGRQmxweOaer-UuG3A4R7-LOQYN76MivlQCgA" 
}
```

### Query
#### me
Retorna la información del usuario a partir del token:

`me: Identity`

Ejemplo:
```
query {
  me() {
    did
  }
}
```
#### hash
Dado un DID, retorna el hash de recuperación desde Swarm.

`hash(did: String): String`

Ejemplo:
```
query {
  hash(did: “did:ethr:...”)
}
```

Si el user que realiza la llamada es DIDI-SERVER, este puede obtener cualquier hash. En cambio, un user solo puede obtener su propio hash de Swarm.

#### edgeByJwt
Obtiene una credencial a partir de su jwt y did.  
`edgeByJwt(edgeJWT: String, did: String): Edge`

Ejemplo:
```
query {
  edgeByJwt(edgeJWT: “...”, did: “did:ethr:....”) {
  jwt,
  hash
  }
}
```
Si el user que realiza la llamada es DIDI-Server. Este puede obtener cualquier Edge(credencial), en cambio, un user solo puede obtener su propio Edge.

#### findEdges
Retorna las credenciales emitidos a toDID.

`findEdges(toDID: String, type: [String], since: Int tag: [String], revoked: Int = 0 ): [Edge!]!`

Además, por cada Edge realiza una comparación en la que el toDID debe coincidir con el user del token de autorización o el DIDI-Server.
### Mutations
#### addEdge
Guarda una nueva credencial en el archivo de SQLite perteneciente al did del parámetro. El único autorizado a realizar esta acción es DIDI-Server. Es decir que el mismo usuario no puede guardar una credencial emitida hacia su did.

`addEdge(edgeJWT: String, did: String):Edge`
Ejemplo:
```
mutation {
  addEdge(edgeJWT: “...”, did: “did:ethr:....”) {
    jwt,
    hash
  }
}
```
#### removeEdge
Revoca un jwt previamente emitido. Solo funciona si el did se corresponde con el del dueño del token o el DIDI-Server.

`removeEdge(hash: String, did: String):String`
