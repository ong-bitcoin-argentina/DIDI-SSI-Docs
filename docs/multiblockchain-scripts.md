---
id: multiblockchain-scripts
title: Pruebas con scripts (para diseño de interfaz de BlockchainManager)
---

# Pruebas con scripts (para diseño de interfaz de BlockchainManager)

El propósito de estas pruebas es definir la interfaz del BlockchainManager.

Arrancamos por RSK, y luego la volvemos multiblockchain.

## Delegate (addDelegate y validDelegate)

Propósito:
- Agregar la delegación desde un user DID (o identity) a otro DID (el que paga es gas es el primero)
- Genera una transacción desde el DID hacia el SC de uPort (ethr registry): `0xdca7ef03e98e0dc2b855be647c39abe984fcf21b`

A tener en cuenta:
- La transacción se realiza en una blockchain específica.
- El issuer define sobre qué blockchain (dentro de las soportadas por DIDI).

## Resolve DID document

Propósito:
- Permite elegir la wallet relacionada a un DID
- Permite elegir un DID dueño de ese otro DID

A tener en cuenta:
- Es específico de una blockchain

## Atributos de un DID

Propósito:
- Definir atributos especificos como par key - valor
- Están linkeados los cambios desde el último hacia el primero

A tener en cuenta:
- Es específico de una blockchain

## Creación de un JWT (Credencial Verificable)

A tener en cuenta:
- Es off-chain (es indepentiende de blockchains)
- Reprensentan datos firmados por un DID (issuer), que hablan sobre otro DID (subject).
- Opcionalmente tiene una fecha de expiración.
- Opcionalmente tienen una audiciencia, que es un DID, que es el único que puede verificar ese JWT, mediante SC.

## Verificación de un JWT (Credencial Verificable)

Propósito:
- Es on-chain (sólo en el sentido de usar el Smart Contract).
- Se verifica la integridad de un JWT.
- Si tiene audiencia, sólo puede hacerlo la misma.

## Tareas
1) Probar mediante scripting y definición de métodos en una clase BlockchainManager, el comportamiento que van
a poder usar los servicios que interactúen contra una blockchain (por ahora RSK). Tener en cuenta que hay que mejorar:
  - addDelegate consume gas, y hay que mejorar la forma (ver el PR de Capu).
  - los eventos no se están recorriendo bien, y repercute en no poder buscar atributos sobre los DIDs.
2) Hay que crear un paquete de NPM para el BlockchainManager, así los servicios lo utilizan como dependencia.
3) Lo integramos como dependencia en DIDI server, y modificamos partes del código para que lo utilicen.
4) Trabajamos en que sea Multiblockchain.
5) Luego modificamos los demás servicios si hace falta.