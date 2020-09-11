# Descripción para la implementación de multiblockchain en DIDI

## Networks soportadas
- rsk
- lacchain
- bfa
- ethereum (opcional)

# Funcionalidades

## Alta y delegación
1. El Issuer indica por variable de entorno la blockchain (URL y address de SC) elegida.
2. El Issuer se da de alta en DIDI,donde su did va acompañado por el prefijo que indica la blockchain elegida. Además envía el nombre con el que DIDI va a identificarlo (y que aparecerá en las credenciales) que DIDI mostrará a terceros.
3. DIDI almacena en su base de datos el DID del Issuer, el nombre, y el estado de la transacción sobre la blockchain.
4. DIDI genera una transacción (addDelegate) que lo agrega como delegate válido (basado en el did pasado por el issuer)
5. DIDI modifica el estado de la transacción para ese issuer.

## Revocación

Existe una forma de revocación de un issuer, que se realiza on-chain.

Para ello:
1. DIDI realiza llama a la función revokeDelegate del SC de uPort.
2. DIDI marca a dicho issuer como revocado.

## Validación de la delegación on-chain

Con el did almacenado en la DB ejecuto una función del BlockchainService.

# Archivos afectados por el refactor

## Principales
- DIDI-SSI-Issuer-Module/issuer-back/services/BlockchainService.js
- DIDI-SSI-Server/services/BlockchainService.js

## Secundarios
- DIDI-SSI-Server/services/MouroService.js
- DIDI-SSI-Server/routes/IssuerRoutes.js
- DIDI-SSI-Server/constants/Constants.js
- DIDI-SSI-mouro_didi/src/lib/schemaMgr.ts
- DIDI-SSI-mouro_didi/src/lib/blockChainMgr.ts
- DIDI-SSI-Issuer-Module/issuer-back/services/MouroService.js

# Tareas
- Debe crease un modelo en DIDI para los issuers dados de alta (name - did - status).
- Crear un DIDI-SSI-BlockchainManager (con código actual de DIDI, Issuer y Mouro).
- Pensar la arquitectura e interfaz de ese nuevo repositorio para que soporte, de forma abstracta, multiblochain
  - Se crearán distintos servicios específicos de cómo pedir gas, etc., para cada blockchain soportada.
  - El usuario del BlockchainManager eligirá qué modulo específico utilizará.
  - El default será la actual testnet de RSK.
  - Debe solucionarse el actual problema de los recorridos sobre eventos on-chain.