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
- **Firma digita / Digital signature**: Un esquema matemático para demostrar la autenticidad de un mensaje.
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

- A *verifiable presentation* expresses data from one or more *verifiable credentials*, and is packaged in such a way that the authorship of the data is verifiable.
- A *holder* is usually, but not always, a subject of the *verifiable credentials* they are holding. *Holders* store their credentials in *credential repositories*.
- A *verifiable credential* itself can be easily ported from one *repository* to another without the need to reissue the credential.
- It is assumed the *verifiable credentials* remain with the *subject*, and if they are not, they were stolen by an attacker.
- Certain types of *verifiable presentations* might contain data that is synthesized from, but do not contain, the original verifiable credentials.
- If a single *verifiable credential* supports *selective disclosure*, then *holders* can present proofs of claims without revealing the entire *verifiable credential*.
- *Issuers* can issue *verifiable credentials* that support *selective disclosure*.
- The process of *verification* includes checking that: the credential (or presentation) conforms to the specification; the proof method is satisfied; and, if present, the status check succeeds.
- This specification is constrained to verifying *verifiable credentials* and *verifiable presentations* regardless of their usage. Validating *verifiable credential*s or *verifiable presentations* is outside the scope of this specification.
