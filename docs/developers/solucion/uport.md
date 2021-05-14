---
id: uport
title: uPort
---
**Brief**

> uPort is a platform for user centric identity and communication. The platform currently consists of our mobile app, Ethereum smart contracts and number of open protocols for signed messages and message flow.

**Especificación de protocolos uPort**

- https://github.com/uport-project/specs/

**Especificación de identidad digital sobre Ethereum**

Uport sigue también este estándard de identidad digital sobre Ethereum

- https://github.com/ethereum/EIPs/issues/1056


## Libs de uPort de bajo nivel

### did-jwt-vc

**Repo**
- https://github.com/decentralized-identity/did-jwt-vc

**Brief**
> Create and verify W3C Verifiable Credentials and Presentations in JWT format

**Features**
- Creating a Verifiable Credential
- Verifying a Verifiable Credential
- Creating a Verifiable Presentation
- Verifying a Verifiable Presentation

### did-jwt

**Repo**
- https://github.com/decentralized-identity/did-jwt

**Brief**
> The did-JWT library allows you to sign and verify JSON Web Tokens (JWT) using ES256K, ES256K-R and Ed25519 algorithms.

**Features**
- Create a JWT
- Decode a JWT
- Verify a JWT

### Javascript DID Resolver

**Repo**
- https://github.com/decentralized-identity/did-resolver

**Brief**
> Simple common interface for javascript applications to resolve DID documents from Decentralized Identifiers (DIDs)
> 
> This is intended to support the proposed Decentralized Identifiers spec from the W3C Credentials Community Group.
> 
> The library does not implement any specific DID method, but allows DID method implementors to release npm packages that applications can add.

**Features**
- Configure Resolver
- Resolving a DID document
- Caching responses
- Implementing a DID method

### Ethr DID Resolver

**Repo**
- https://github.com/decentralized-identity/ethr-did-resolver

**Brief**
> This library is intended to use ethereum addresses as fully self managed Decentralized Identifiers and wrap them in a DID Document.
> 
> It requires the did-resolver library, which is the primary interface for resolving DIDs.
> 
> This DID method relies on the ethr-did-registry.

**Features**
- Encode a DID for an Ethereum address
- Checks for the current owner of the ethereum address
- Look at contract events and builds
- Building a DID document
- Enumerating contract events for an identity
- Resolving a DID document
- Multi-network configuration

### Ethereum DID Registry

**Repo**
- https://github.com/uport-project/ethr-did-registry

**Brief**
> This library contains the Ethereum contract code that allows the owner of an ethr-did identity to update the attributes that appear in its did-document. It exposes an API that allows developers to call the contract functions using Javascript.
> 
> Use this if you want to interact directly with a deployed registry contract directly, or deploy a copy of the contract to another Ethereum network.
> 
> It's designed for resolving public keys for off-chain authentication—where the public key resolution is handled by using decentralized technology.
> 
> This contract allows Ethereum addresses to present signing information about themselves with no prior registration. It allows them to perform key rotation and specify different keys and services that are used on its behalf for both on and off-chain usage.

**Features**
- Looking up Identity Ownership
- Changing Identity Ownership
- Looking up a Delegate (check Delegate Validity)
- Adding a Delegate
- Revoking a Delegate
- Setting Attributes
- Revoking Attributes
- Reading attributes

## Libs de más alto nivel usadas de forma incompleta

### Ethr DID

**Repo**
- https://github.com/uport-project/ethr-did

> This library can be used to create a new ethr-did identity.
> 
> This library can be used to create a new ethr-did identity. It allows ethr-did identities to be represented as an object that can perform actions such as updating its did-document, signing messages, and verifying messages from other dids.
>
> Use this if you are looking for the easiest way to start using ethr-did identities, and want high-level abstractions to access its entire range of capabilities. It encapsulates all the functionality of ethr-did-resolver and ethr-did-registry.

**Features**
- Create and manage keys for DID identities
- Sign JSON Web Tokens
- Authorize third parties to sign on a DID's behalf
- Enable discovery of service endpoints (e.g. decentralized identity management services)

**Uso actual**
- Issuer/DIDI server: creación de un objeto issuer para Mouro

**Documentación**
- https://developer.uport.me/ethr-did/docs/guides/index

### uPort Credentials

**Repo**
- https://github.com/uport-project/uport-credentials

**Brief**

> Simplifies the process of identity creation within JavaScript applications
>
> It allows applications to easily sign and verify data — signed by other identities to facilitate secure communication between parties. These pieces of data take the form of signed JSON Web Tokens (JWTs), they have specific fields designed for use with uPort clients, described in the uPort specifications, collectively referred to as verifications.
> 
> The uport-credentials library is primarily used as a server-side library.

**Features**
- Sign and verify data (JWTs)
- Creation and validation of verifications
- Create and verify authentication requests
- Request verified claims
- Ask users to sign Ethereum transactions

**Documentación adicional**
- https://github.com/uport-project/uport-credentials/blob/master/docs/guides/index.md

Usos:
- Firma de JWTs en SDK, DIDI y Mouro

## Libs de más alto nivel no usadas

### uPort Transports

**Brief**
> The uport-transports library is comprised of a loosely coupled collection of functions called transports—used to set up communication channels between an app and a client; additionally, a set of transport-related utility functions are also available in this library.

**Features**
- Send messages to users using a QR code
- Send requests and receive responses through URLs
- Send encrypted push notifications
- Create Transports specific to your use case and environment

**Documentación**
- https://developer.uport.me/categories/uport-transports

### uPort Connect

**Repo**
- https://github.com/uport-project/uport-connect

> uport-connect is the client side library that allows you interact with a user's uPort identity through a uPort client, primarily the mobile app.
> 
>It handles the communication channel between your app and a uPort client, which can vary depending on the environment which your application runs.
> 
> Over this communication channel you can send requests for a user's data, share credentials, generate transactions to be signed by a user and relay requests you originally created on your server with uport-credentials
> 
> This library offers the default quick start implementation to integrate with uPort, but if it doesn't offer exactly what you need, you may be interested in using uport-tranports and uport-credentials instead.

**Features**
- Handle user logins
- Request Ethereum transaction signing
- Keep your users logged into an app
- Use QR code & push notification flow for desktop browsers
- Use frictionless app linking for mobile browsers

**Documentación adicional**
- https://developer.uport.me/uport-connect/index

**Nota**

Parte de estos features los realiza el SDK de DIDI

### uPort Mobile (app)

**App**
- https://play.google.com/store/apps/details?id=com.uportMobile&hl=en

**Brief**
> uPort mobile is a secure mobile self-sovereign identity wallet for that gives you complete control over your identity and personal data.
> 
> This mobile wallet is your connection to the uPort platform, an interoperable identity network for a secure, private, decentralized web.
>
> uPort provides open protocols for decentralized identity and interoperable messaging that enable trusted source attribution for all web communication. By allowing message recipients to trust message senders without centralized servers, we can create an entirely new framework for building applications, and many developers are already building on this system.

**Features**
- Create an identity on the Ethereum blockchain network
- Securely log-in to applications without passwords
- Manage your personal information and verifications
- Approve Ethereum transactions and digitally sign files

**Nota**

Parte de estos features los realiza el SDK de DIDI y la DIDI app

### Flujos propuestos por uPort

#### Create verification

- https://developer.uport.me/credentials/createverification

> Creating and issuing verifications from your server application is a simple matter of utilizing uport-credentials to create them and setting up a few endpoints to facilitate the flow.


#### Request verification

> Requesting verifications with your server application is the same process as creating a disclosure

- https://developer.uport.me/credentials/requestverification


### Ethereum transaction request

- https://developer.uport.me/credentials/transactions

> It is possible with uport-credentials to create an ethereum transaction request and have a mobile client approve and sign that transaction.