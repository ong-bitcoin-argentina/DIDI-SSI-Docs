---
id: arquitectura-aidi
title: Flujo de Validación
---

## Flujo en aidi

La validación de identidad se verifica por medio de vu-Security, quien nos facilita con su servicio.
Consiste en el que el usuario crea el proceso, ingrese el frente, el dorso y una selfie para validar su identidad.

Para realizar el inicio del proceso de validación, se debe llamar a la función `createVerificationVU(...)`. 


- https://github.com/ong-bitcoin-argentina/DIDI-SSI-Mobile/blob/develop/src/src/services/vuSecurity/createVerification.ts

Para realizar el ingreso del frente, dorso o selfie del documento, se debe llamar a la función `addDocumentImage(...)` además colocar parámetro side con su correspondiente valor front, back o selfie 

- https://github.com/ong-bitcoin-argentina/DIDI-SSI-Mobile/blob/develop/src/src/services/vuSecurity/addDocumentImage.ts

Para solicitar la información del frente dorso y código de barra del documento, se debe llamar a la función `getInformation(...)`. 

- https://github.com/ong-bitcoin-argentina/DIDI-SSI-Mobile/blob/develop/src/src/services/vuSecurity/getInformation.ts

Para solicitar estado de finalización del proceso de validación, se debe llamar a la función `finishOperation(...)`. 

- https://github.com/ong-bitcoin-argentina/DIDI-SSI-Mobile/blob/develop/src/src/services/vuSecurity/finishOperation.ts

