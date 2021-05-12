---
id: conceptos
title: Estándares sobre identidad digital y credenciales verificables
---

## Páginas web

- DIDs: https://www.w3.org/TR/did-core
- DID methods: https://w3c-ccg.github.io/did-method-registry
- Verified Credentials: https://www.w3.org/TR/vc-data-model
- Implementation guide: https://www.w3.org/TR/vc-imp-guide/

## Conceptos más importantes

- **Afirmación / Claim**: Una afirmación hecha sobre un asunto, persona o cosa.
- **Credencial Verificable / Verifiable Credential / VC**: Un conjunto de uno o más *claims* realizado por un *emisor*.
- **Documento DID / Decentralized identifier document / DID document**: Un documento que puede accederse desde un registro de datos verificables y contiene información sobre un *DID* específico.
- **Emisor / Issuer**: Un rol que una entidad desempeña al realizar un *claim* creando una *credencial verificable*.
- **Firma digital / Digital signature**: Un esquema matemático para demostrar la autenticidad de un mensaje.
- **Identificador Descenetralizado / Decentralized identifier / DID**: Un identificador portátil similar a una url, asociado a un asunto, persona o cosa.
- **Registro de datos verificables / Verifiable data registry**: El rol que se le asigna a un sistema al mediar en la creación y verificación de identificadores, claves y datos relevantes necesarios para utilizar *credenciales verificables*.
- **Titular / Holder**: Es el rol que se le asigna a una entidad al poseer una *credencial verificable*.
- **Presentación verificable / Presentation / VP**: Son datos derivados de una o más *credenciales verificables*, emitidas por uno o más *emisores*.
- **Proveedor de identidad / Identity provider / IdP**: Es un sistema para crear, mantener y administrar las identidades digitales de los *holders*.
- **Repositorio / Repository**: Un programa, un *storage vault* o una *wallet* de *credenciales verificables*, que almacena y protege el acceso a las credenciales.
- **Divulgación selectiva / Selective disclosure**: Es la capacidad de un *holder* para, de una forma granular, compartir información.
- **Agente de usuario / User agent**: Un programa que media la comunicación entre *holders*, *issuers* y *verifier*.
- **Validación / Validation**: La seguridad de que una *credencial verificable* o una *presentación verificable*.
- **Verificación / Verification**: La evaluación de una *credencial verificable* o una *presentación verificable* es auténtica.
- **Verificador / Verifier**: Es el rol que recibe una entidad al recibir una *credencial verificable* o una *presentación verificable* para su procesamiento.

## Notas importantes

- Una *presentación verificable* expresa datos de una o más *credenciales verificables*, y está empaquetada de tal manera que se puede verificar la autoría de los mismos.
- Un *Portador* es usualmente, pero no siempre, el sujeto de la *credencial verificable* que está portando. Los *Portadores* almacenan sus credenciales en el *repositorio de credenciales*.
- Una *credencial verificable*  en sí misma se puede migrar de un *repositorio* a otro sin la necesidad de ser creada nuevamente.
- Se asume que la *credencial verificable* es portada por el *sujeto*, de lo contrario esta misma ha sido robada.
- Ciertos tipos de *presentaciones verificables* pueden contener datos sintetizados de una credencial verificable original, sin contener necesariamente a la misma.
- Sí una *credencial verificable* soporta *divulgación selectiva*, entonces el *portador* puede presentar una prueba de veracidad sin la necesidad de revelar el total de la *credencial verificable*.
- Los *Emisores* pueden emitir *credenciales verificables* que soporten *divulgación selectiva*.
- El proceso de *verificación* incluye verificar que: la credencial (o presentación) se ajuste a la especificación; el método de prueba es correcto; y, sí está presente, la comprobación de estado se realizó correctamente.
- Esta especificación se limita a verificar *credenciales y presentaciones verificables* independientemente de su uso. La validación de estas mismas está fuera del alcance de esta especificación.