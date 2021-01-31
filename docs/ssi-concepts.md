---
id: ssi-concepts
title: SSI | Identidad Digital Autosoberana
---

# Introducción
## ¿Qué es la identidad digital autosoberana (SSI)?
La identidad auto-soberana (SSI) es un movimiento digital que reconoce que los individuos deben sean los únicos dueños de su identidad, teniendo el control sobre cómo se comparten y utilizan sus datos personales.

Todo el mundo (incluidas las empresas y las IoT) tiene diferentes relaciones o conjuntos únicos de información de identificación. Esta información puede ser cosas como la fecha de nacimiento, la ciudadanía, los títulos universitarios o las licencias comerciales. Este conjunto de información, entre otras, es lo que confroma nuestra identidad. Lo que en el mundo físico implica tarjetas o certificados, en SSI hablamos de credenciales verificables.

SSI significa que el individuo o la organización (**holders**) gestiona los elementos que componen su identidad y controla el acceso a esas credenciales, de forma digital, teniendo uno o varios identificadores y pudiendo presentar *claims* relacionados con esos identificadores evitando la necesidad de pasar por un tercero como intermediario.


## ¿Qué es un emisor, un titular y un validador?
**Issuer o Emisor**: es el rol que una entidad que desempeña al realizar un *claim*, creando una *credencial verificable*. Por ejemplo: una institución financiera que emite credenciales a sus clientes sobre el estado de repago de un crédito.

**Holder o Titular**: es el rol que se le asigna a un entidad al poseer una *credencial verificable*, teniendo el control del ciclo de vida de las credenciales emitidas, como compartirlas o eliminarlas. Por ejemplo, un emprendedor que tiene una credencial en su wallet.

**Verifier o Validador**: es el rol que recibe una entidad al recibir una *credencial verificable* o una *presentación verificable* para su procesamiento. Verifica si la credencial compartida por un titular es válida (es decir, si la credencial proviene de un emisor de confianza, no revocada por el emisor). Por ejemplo, cualquier entidad con la que el holder haya decidido compartir su credencial.

*Nota*: Una entidad puede desempeñar varios papeles. Por ejemplo, una organización puede ser emisor al mismo tiempo que puede ser validador.

## Más conceptos importantes
- **Claim**: es una afirmación hecha sobre un asunto, persona o cosa.
- **Credencial Verificable / Verifiable Credential / VC**: es un conjunto de uno o más *claims* realizado por un *emisor*.
- **Documento DID / Decentralized identifier document / DID document**: es un documento que puede accederse desde un registro de datos verificables y contiene información sobre un *DID* específico.
- **Firma digita / Digital signature**: es un esquema matemático para demostrar la autenticidad de un mensaje.
- **Identificador Decenetralizado / Decentralized identifier / DID**: es un identificador portátil similar a una url, asoiciado a un asunto, persona o cosa.
- **Registro de datos verificables / Verifiable data registry**: es el rol que se le asigna a un sistema al mediar en la creación y verificación de identificadores, claves y datos relevantes necesarios para utilzar *credenciales verificables*.
- **Presentación verificable / Presentation / VP**: son datos derivados de una o más *cerdenciales verificables*, emitidas por uno o más *emisores*.
- **Proveedor de indentidad / Identity provider / IdP**: Es un sistema para crear, mantener y administrar las identidades digitales de los *holders*.
- **Repositorio / Repository**: es un programa, un *storage vault* o una *wallet* de *credenciales verificables*, que almacena y protege el acceso a las credenciales.
- **Selective disclosure**: es la capacidad de un *holder* para, de una forma granular, compartir información.
- **User agent**: es un programa que media la comunicación entre *holders*, *issuers* y *verifier*.
- **Validación / Validation**: es la seguridad de que una *credencial verificable* o una *presentación verificable*.
- **Verificación / Verification**: es la evaluación de una *credencial verificable* o una *presentación verificable* es auténtica.

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



## ¿Qué es una credencial verificable?
El término "credencial" puede implicar cualquier conjunto (a prueba de manipulaciones) de información que alguna autoridad afirma que es verdadera sobre un individuo, y que le permite convencer a otros (que confían en esa autoridad) de estas verdades. Por ejemplo: un diploma expedido por una universidad demuestra que tienes un título educativo. Un pasaporte expedido por el gobierno de un país demuestra que eres un ciudadano.

Toda credencial contiene un conjunto de afirmaciones o *claims* sobre el sujeto de la credencial, es decir, sobre el titular. Estas afirmaciones son realizadas por un emisor.

Para ser una credencial, las afirmaciones deben ser verificables de alguna manera. Esto significa que un verificador debe ser capaz de determinar lo siguiente:

- Quién ha emitido la credencial
- Que no ha sido manipulada desde su emisión
- Que no ha caducado ni ha sido revocada
- En el caso de las credenciales físicas, esto se consigue mediante alguna prueba de autenticidad incrustada directamente en la propia credencial, como un chip o un holograma. También puede hacerse comprobando directamente con el emisor que la credencial es válida, precisa y actual. Pero este proceso de verificación manual puede ser difícil y llevar mucho tiempo, una de las principales razones por las que existe un mercado negro mundial de credenciales falsificadas.

Esto nos lleva a una de las ventajas fundamentales de las credenciales verificables: utilizando la criptografía e Internet, pueden verificarse digitalmente en segundos. Este proceso de verificación puede responder a las cuatro preguntas siguientes

- ¿Está la credencial en un formato estándar y contiene los datos que necesita el verificador?
- ¿Incluye una firma digital válida del emisor?
- ¿Sigue siendo válida la credencial, es decir, no está caducada ni revocada?
- Si procede, ¿proporciona la credencial (o su firma) una prueba criptográfica de que el titular de la credencial es el sujeto de la misma?


## ¿Qué es un identificador descentralizado (DID) y un documento DID?
El DID es un tipo de identificador que permite una identidad digital verificable y descentralizada. Un DID identifica de forma única a una entidad (como una persona u organización). La generación y el control de los DID recae en el propietario de la identidad, es decir, en el sujeto del DID (por ejemplo, a través de las claves privadas de una wallet).

Los DID son persistentes, verificables criptográficamente, y son desreferenciables.

Los DID son bloques de construcción para credenciales verificables, carteras, etc. Para que todo esto funcione, tenemos que ser capaces de "resolver" los DID a sus documentos DID asociados. 

Un Documento DID contiene metada sobre el sujeto DID. Contiene información clave como claves públicas, *service endpoints* y métodos de autentificación. Es un documento que puede accederse desde un registro de datos verificables y contiene información sobre un *DID* específico.

## ¿Qué es un método DID?
El método DID se utiliza para resolver un documento DID a DID. Para utilizar un DID con una red en particular, es necesario definir un método DID en una especificación de método DID. Un método DID especifica el conjunto de reglas sobre cómo se registra, resuelve, actualiza y revoca un DID en esa red específica.



### Para más información
- DIDs: https://www.w3.org/TR/did-core
- DID methods: https://w3c-ccg.github.io/did-method-registry
- Verified Credentials: https://www.w3.org/TR/vc-data-model
- Implementation guide: https://www.w3.org/TR/vc-imp-guide/
- Terminología básica: https://www.w3.org/TR/vc-data-model/#terminology