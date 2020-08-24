# Cambios en arquitectura de DIDI para soportar Multiblockchain

## Ruteo

Los dids deberán indicar a qué blockchain debe rutearse la verificación de credenciales, la delegación de issuers, etc., relacionados a los mismos. En otras palabras, en dónde encontrar el [DID registry de uPort](https://github.com/uport-project/ethr-did-registry).

Ejemplos:
- `did:ethr:rsk:xxx` se dirije a RSK
- `did:ethr:lacchain:xxx` se dirije a Lacchain

En caso de no especificar se elige la de RSK (ej. `did:ethr:xxx`, con comportamiento que se tiene actualmente).

### Modelo en DB

```
Blockchain Config
-----------------
- Nombre
- URL
- ContractAddress
```

### Módulos/Clases a modificar
- BlockchainService (en DIDI e Issuer)

### Aclaraciones
- En todas las blockchain se utilizará el mismo [DID registry de uPort](https://github.com/uport-project/ethr-did-registry).
- NO es necesaria el alta de un DID específico para cada blockchain.

## Alta de Issuer

Se genera una entidad nueva en la DB a fin de soportar mejor la emisión de credenciales desde diferentes issuers.

```
Issuer
------
- Nombre
- DID
- Blockchain
```

Cada issuer elige una de las blockchains soportadas, al momento de darse de alta.

# Dudas

- BFA
  - ¿Qué tecnología utiliza?
  - ¿Es posible deployar el SC de uPort?