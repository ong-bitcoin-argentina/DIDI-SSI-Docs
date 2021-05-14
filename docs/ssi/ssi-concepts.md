---
id: ssi-concepts
title: Introducción a la identidad auto-soberana
---

## Visión general
La identidad auto-soberana (SSI | Self Sovereign Identity) es un movimiento digital que reconoce que los individuos deben sean los únicos dueños de su identidad, teniendo el control sobre cómo se comparten y utilizan sus datos personales.

En 2016, Christopher Allen estableció los 10 principios para la identidad auto-soberana que se han convertido en una referencia en el campo. Estos principios son:
- **Acceso:** Los usuarios deben tener acceso a sus propios datos.
- **Consentimiento:** Los usuarios deben aceptar previamente el uso de su identidad por terceros.
- **Control:** Los usuarios deben poder controlar sus identidades.
- **Existencia:** Los usuarios deben tener una existencia independiente.
- **Interoperabilidad:** Las identidades deben poder utilizarse ampliamente.
- **Minimización:** La divulgación de reclamaciones debe reducirse.
- **Persistencia:** Las identidades deben ser duraderas. Protección: los derechos de los usuarios deben ser protegidos.
- **Portabilidad:** La información y los servicios sobre identidad deben ser portables.
- **Transparencia:** Los sistemas y algoritmos deben ser transparentes.

Estos principio nos dan una idea general de que la identidad auto-soberana se basa en repositorios personales portables en los que podemos almacenar y administrar todas nuestras claves  privadas, nuestros autenticadores y nuestros tokens y credenciales digitales de manera segura y confiable.


## ¿Qué es la identidad digital auto-soberana (SSI)?
Todo el mundo (incluidas las empresas y las IoT) tiene diferentes relaciones o conjuntos únicos de información de identificación. Esta información puede ser cosas como la fecha de nacimiento, la ciudadanía, los títulos universitarios o las licencias comerciales. Este conjunto de información, entre otras, es lo que confroma nuestra identidad. Lo que en el mundo físico implica tarjetas o certificados, en SSI hablamos de credenciales verificables.

SSI significa que el individuo o la organización (**holders**) gestiona los elementos que componen su identidad y controla el acceso a esas credenciales, de forma digital, teniendo uno o varios identificadores y pudiendo presentar *claims* relacionados con esos identificadores evitando la necesidad de pasar por un tercero como intermediario.

## Conceptos importantes
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

## ¿Qué es un emisor, un titular y un validador?
**Issuer o Emisor**: es el rol que una entidad que desempeña al realizar un *claim*, creando una *credencial verificable*. Por ejemplo: una institución financiera que emite credenciales a sus clientes sobre el estado de repago de un crédito.

**Holder o Titular**: es el rol que se le asigna a un entidad al poseer una *credencial verificable*, teniendo el control del ciclo de vida de las credenciales emitidas, como compartirlas o eliminarlas. Por ejemplo, un emprendedor que tiene una credencial en su wallet.

**Verifier o Validador**: es el rol que recibe una entidad al recibir una *credencial verificable* o una *presentación verificable* para su procesamiento. Verifica si la credencial compartida por un titular es válida (es decir, si la credencial proviene de un emisor de confianza, no revocada por el emisor). Por ejemplo, cualquier entidad con la que el holder haya decidido compartir su credencial.

*Nota*: Una entidad puede desempeñar varios papeles. Por ejemplo, una organización puede ser emisor al mismo tiempo que puede ser validador.


## ¿Qué es una credencial verificable?
El término "credencial" puede implicar cualquier conjunto (a prueba de manipulaciones) de información que alguna autoridad afirma que es verdadera sobre un individuo, y que le permite probar a otros (que confían en esa autoridad) de estas verdades. Por ejemplo: un diploma expedido por una universidad demuestra que tienes un título educativo. Un pasaporte expedido por el gobierno de un país demuestra que eres un ciudadano.

Toda credencial contiene un conjunto de afirmaciones o *claims* sobre el sujeto de la credencial, es decir, sobre el titular. Estas afirmaciones son realizadas por un emisor.

### Notas importantes

- Una **presentación verificable** (*verifiable presentation*) expresa data de una o más **credenciales verificables** (*verifiable credentials*), y esta armado de tal forma que la autenticidad de la información es verificable.
- Un **titular** (*holder*) es usualmente, aunque no siempre, el sujeto de de la **credencial verificable** que poseen.
 is usually, but not always, a subject of the *verifiable credentials* they are holding. Los **titulares** almacenan sus credenciales en **repositorios de credenciales** (*credential repositories*).
- Una **credencial verificable** puede ser fácilmente portable de un **repositorio** a otro, sin la necesidad de re-emitir la credencial.
- Se asume que una **credencial verificable** permanecen con el **sujeto** (*subject*), y de no ser así, que fueron robadas por un atacante.
- Algunos tipos de **presentaciones verificables** pueden contener información que es sintesis de, pero no necesariamente contener, la credencial verificable original.
- Si una credencial verificable soporta *selective disclosure*, entonces el **titular** puede presentar pruebas de las afirmaciones sin necesidad de revelar la totalidad de la credencial verificable.
- Los **Emisores** (*Issuers*) pueden emitir una credencial verificable qu soporte un *selective disclosure*.
- El proceso de **verificación** incluye la comprobación de que: la credencial (o presentación) se ajusta a la especificación; el método de prueba se satisface; y, si está presente, la comprobación de estado tiene éxito (credencial no expirada ni revocada).
- Esta especificación se limita a verificar las *credenciales verificables* y las *presentaciones verificables* independientemente de su uso. La validación de *credenciales verificables* o de *presentaciones verificables* queda fuera del ámbito de esta especificación.

## ¿Qué es un identificador descentralizado (DID) y un documento DID?
El DID es un tipo de identificador que permite una identidad digital verificable y descentralizada. Un DID identifica de forma única a una entidad (como una persona u organización). La generación y el control de los DID recae en el propietario de la identidad, es decir, en el sujeto del DID (por ejemplo, a través de las claves privadas de una wallet).

Los DID son persistentes, verificables criptográficamente, y son desreferenciables.

Los DID son bloques de construcción para credenciales verificables, carteras, etc. Para que todo esto funcione, tenemos que ser capaces de "resolver" los DID a sus documentos DID asociados. 

Un Documento DID contiene metada sobre el sujeto DID. Contiene información clave como claves públicas, *service endpoints* y métodos de autentificación. Es un documento que puede accederse desde un registro de datos verificables y contiene información sobre un *DID* específico.

## ¿Qué es un método DID?
El método DID se utiliza para resolver un documento DID a DID. Para utilizar un DID con una red en particular, es necesario definir un método DID en una especificación de método DID. Un método DID especifica el conjunto de reglas sobre cómo se registra, resuelve, actualiza y revoca un DID en esa red específica.


### Para más información:
- [DIDs](https://www.w3.org/TR/did-core)
- [DID methods](https://w3c-ccg.github.io/did-method-registry)
- [Verified Credentials](https://www.w3.org/TR/vc-data-model)
- [Implementation guide](https://www.w3.org/TR/vc-imp-guide/)
- [Terminología básica](https://www.w3.org/TR/vc-data-model/#terminology)