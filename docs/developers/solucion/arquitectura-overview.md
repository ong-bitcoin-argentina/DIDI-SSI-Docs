---
id: arquitectura-overview
title: Overview de ai·di
---

## Arquitectura
Se describen a continuación los componentes más significativos del Proyecto DIDI. Para mayor detalle de cada uno de estos ver la sección **Descripción técnica**.

![Componentes arquitectura](../../images/didi-ssi-arquitectura-componentes.png)

### DIDI Issuer Backend
**Brief**
El issuer habilita a distintas entidades autorizadas por el DIDI-server a generar y emitir certificados que podrán ser accedidos por los dueños de los mismos desde la app ai·di.

[**Repositorio**](https://github.com/ong-bitcoin-argentina/DIDI-SSI-Issuer-Module)

### DIDI Issuer Frontend
**Brief**
*TBA*

[**Repositorio**](https://github.com/ong-bitcoin-argentina/DIDI-SSI-Issuer-Module)

### DIDI Credential Viewer/Validator
**Brief**
La app Credential Viewer permite la visualización de credenciales que fueron compartidas anteriormente mediante la app ai·di.

[**Repositorio**](https://github.com/ong-bitcoin-argentina/DIDI-SSI-JWT_Validator_Viewer)

### DIDI App SDK
**Brief**
*TBA*

[**Repositorio**](https://github.com/ong-bitcoin-argentina/DIDI-SSI-app_sdk)

### DIDI Mobile App
**Brief**
La app mobile es el medio principal de interacción con los usuarios finales. Desde allí los usuarios pueden recibir, ver y compartir sus credenciales.

[**Repositorio**](https://github.com/ong-bitcoin-argentina/DIDI-SSI-Mobile)

### DIDI Mouro (Trust Graph Service)
**Brief**
uPort Trust Graph Server (aka EdgeServer)

[**Repositorio**](https://github.com/ong-bitcoin-argentina/DIDI-SSI-mouro_didi)

### DIDI Server
**Brief**
*TBA*

[**Repositorio**](https://github.com/ong-bitcoin-argentina/DIDI-SSI-Server)


### Entorno de ejecución

El entorno de ejecución de los componentes se encuentra descirpto mediante el siguiene diagrama:

![Componentes deploytment](../../images/didi-ssi-arquitectura-deployment.png)

El **visor de credenciales** y el **Issuer front** son 2 aplicaciones para navegador, desarrolladas en React. Por otro lado, la **wallet ai·di** y **ronda** se encuentran desarrolladas en React Native, con soporte sólo para Android.

El **backend del visor de credenciales**, el **Issuer back**, **DIDI server**, **ronda server** y **Mouro** se encuentran dockerizados, corriendo en una máquina virtual Azure.

En cuanto a **Blockchain**, se encuentran en uso los **uPort ethr registry** en **RSK**, **BFA** y **LACChain**. Además **ronda** utiliza **RIF Name Service** y **Ronda Registry** en **RSK**.