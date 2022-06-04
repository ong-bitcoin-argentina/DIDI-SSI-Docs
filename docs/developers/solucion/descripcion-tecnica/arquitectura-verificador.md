---
id: arquitectura-verificador
title: Verificador
---

Verificador es una herramienta que permite verificar un JSON web Token (JWT) de una credencial, mostrar su contenido, si fue emitido por un emisor confiable y el estado de revocación de la credencial.

### Arquitectura con Verificador
![Componentes arquitectura](../../../images/didi-ssi-arquitectura-componentes-con-verificador.png)

### Componentes Verificador
El verificador es una backend desarrollado con NodeJS y Express. ESte backend expone un página web desarrollado con el sistema de template [nunjucks](https://mozilla.github.io/nunjucks/).

### Repositorio
[JWT Viewer/Validator](https://github.com/ong-bitcoin-argentina/DIDI-SSI-JWT_validator_viewer)
