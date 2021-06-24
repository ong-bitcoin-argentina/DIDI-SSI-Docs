---
id: changelog
title: Changelog
---

## v0.5.4

**Fecha 23/06/2021**
**Cambios**
- [DIDI Issuer] Se corrigió error en los endpoints de Swagger.
- [Ronda] Se actualizaron dependencias deprecadas
- [Ronda] Se simplificó el proceso de build para QA.
- [Ronda] e corrigió el spam de Application insigths en logs de docker. Ahora es más fácil debuguear.

## v0.5.3
**Fecha 22/06/2021**
**Cambios**
- [DIDI Issuer] Se corrigió configuración de Travis.
- [DIDI Issuer] e corrigió el spam de Application insigths en logs de docker. Ahora es más fácil debuguear.
- [DIDI Issuer] Se corrigió error de parametros faltantes REVOKED y EMMITED.
- [DIDI Server] Se corrigió error que generaba credenciale vencidas, que luego llegaban a la app pero no se visualizan.
- [DIDI Server] Se agregaron test para servicios MailService y SmsService.
- [DIDI Server] Se corrigió configuración de Travis

## v0.5.2
**Fecha 03/06/2021**
**Cambios**
- [DIDI Server] Se corrigió el spam de Application insigths en logs de docker. Ahora es más fácil debuguear
- [DIDI Server] Se corrigió un error en swgger que agregaba : en los endpoints
- [DIDI Server] Se corrigieron varios errores #service-missingX
- [DIDI Server] Fix email retry verifiacion
- [DIDI Server] Se corrigio endpoint GET /user/ que estaba intentando validar jwtUser en body
- [DIDI Server] Se agregaron test para servicios AppAuth, AuthRequest y Semillas. En AuthRequest se detectó que el servicio update no funciona.