---
id: revocation
title: Flujos de revocación de credenciales
---

En Issuer (`DELETE /:id`)
1. Se marca como `deleted` el objeto (certificado) asociado al id recibido
2. Se traen los jwts asociados y el did del primer participante
3. Se recorren los JWT y ejecutando por cada uno el endpoint `/issuer/revokeCertificate` de la API de DIDI (con el jwt y did en cuestión)

En DIDI (`/issuer/revokeCertificate`)
1. Se verifica contra Mouro el certificado y el did recibidos (si no son válidos se lanza error)
2. Se ejecuta una query sobre Mouro, marcando el certificado como revocado (un flag en la DB)
3. Se modifica el estado del certificado guardado en la DB de DIDI, marcándolo como `REVOKED`.

Nota:
- El flujo no es transaccional

## Posible revocación on-chain (status registry)

### Librerías de uPort involucradas
- https://github.com/uport-project/ethr-status-registry
- https://github.com/uport-project/revocation-registry
- https://github.com/uport-project/credential-status

### Pros de revocación on-chain

- Mayor grado de descentralización
- Mayor grado de seguridad e integridad (no es posibile modificar la blockchain).
- Se soporta multiblockchain (aunque se requiere una config).

### Contras de revocación on-chain

- Se agrega un paso que puede repercutir en la escabilidad en términos de performance.
- De todas formas existiría una caché de status en ciertos servicios.
- Debe revocarse en la blockchain correspondiente (requiere una config).
- Se modifica la estructura del JWT para [incluir status](https://github.com/uport-project/ethr-status-registry#revoke-a-credential).
- Van a exitir de todas formas JWTs que no poseen status.
- Puede no ser trivial volver al estado anterior (ante equivocaciones).
- La solución de [uPort es un draft](https://github.com/uport-project/ethr-status-registry#notes) (el estándar de revocación es aún un Proposal).
- Actualmente, la credencial puede revocarse por cualquiera, aunque la conveción es considerar válido sólo al issuer.
- Debe esperarse a que la transacción sea minada.
- Se utiliza un [ethereum addres](https://github.com/uport-project/ethr-status-registry#limitations) provisto por el DID document.
- La librería de uPort devuelve un booleano, pero no es fácil saber la fecha de revocación (se requiere ir a una DB de todas formas).

## Actual método off-chain (Mouro)

### Librerías de uPort involucradas
- https://github.com/uport-project/mouro
- Otras estándar ya mencionadas en otros documentos.

### Pros de revocación off-chain
- Escalabilidad en términos de performance (es sólo leer un campo en una DB).
- Flexibilidad ante cambios (es modificar la estructura de una DB).
- Se espera a una solución acabada en términos del estándar (que aún es draft).
- No debe esperarse a que la transacción sea minada (la acción demora lo que se demora en actualizar su status en una DB).

### Contras de revocación off-chain

- Menor descentralización (se depende de un servicio que conoce a la DB).
- Dependencia contra la base de datos.
