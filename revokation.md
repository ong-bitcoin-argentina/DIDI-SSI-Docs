# Flujo de revocación de un certificado desde API de Issuer

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