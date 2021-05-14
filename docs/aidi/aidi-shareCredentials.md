---
id: aidi-shareCredentials
title: Compartir credeciales
---

## Flujo del proceso 

A continuación descripción del flujo del proceso implementado en ai·di app:

**Disparador**: Usuario elige una credencial para compartir a otro usuario de app mobile ai·di.

1. El emisor elige la credencial a compartir por QR.
2. El emisor genera QR que contiene un shareProposal y confirma la operación de compartir.
3. El receptor elige la opción “Escanear Credenciales”, escanea el código QR del Emisor y genera un QR con un ShareRequest.
4. El emisor escanea el código QR  del Receptor.
5. Genera bloque de información que envía al backend de DIDI con la audiencia asociada (DID receptor) y obtiene un ID de acceso al bloque (Contiene share request + credencial).
6. El emisor genera un único QR con el ID de acceso al bloque de información.
7. El Receptor escanea el código QR.
8. El Receptor consulta a DIDI el bloque de información mediante el ID de acceso.
9. Se valida que el Receptor coincida con la audiencia de la credencial compartida.
10. Si la validación es correcta: 
11. El Receptor descarga el bloque de datos y persiste la credencial de manera local.
12. Resultado: El Receptor visualiza la credencial compartida desde “Credenciales Compartidas”:
 
 
## ShareProposal:
Un ShareProposal es un JWT que representa la propuesta de compartir una credencial a un DID destinatario.
 
### Ejemplo de JWT decodificado de ShareProposal:

```json 
{
  "type": "shareProposal",
  "claims": {
    "verifiable": {
      "Ronda": {
        "essential": true,
        "iss": [
          {
            "did": "did:ethr:0xd72067c6fb056ffa9b07c49645305aed70ff8c33"
          }
        ]
      }
    },
    "user_info": {}
  },
  "iss": "did:ethr:0xeb45ecc37a23bbf0303c991e26d1e9f24bf014ba"
}
```
 
## ShareRequest:
Un ShareRequest es un JWT que contiene la petición de acceder a una credencial compartida. 
 
### Ejemplo de JWT decodificado de ShareRequest:

```json
{
  "type": "shareReq",
  "claims": {
    "verifiable": {
      "Ronda": {
        "essential": true,
        "iss": [
          {
            "did": "did:ethr:0xd72067c6fb056ffa9b07c49645305aed70ff8c33"
          }
        ]
      }
    },
    "user_info": {}
  },
  "iss": "did:ethr:0xb4e337c20bec3226c3e782d359ac66b249d76bc8"
}
```
 
## ShareRequest + Credencial/es compartida/s
 
Una vez realizado el handshake entre DID destinatario y DID dueño de la credencial a compartir, se genera JWT con el contenido de la credencial a ser recibido por el destinatario.
 
###Ejemplo de JWT decodificado de ShareRequest + Credencial:
 
```json
{
  "iat": 1606477752,
  "exp": 1606478352,
  "sub": "did:ethr:0xb4e337c20bec3226c3e782d359ac66b249d76bc8",
  "req": "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NkstUiJ9.eyJ0eXBlIjoic2hhcmVSZXEiLCJjbGFpbXMiOnsidmVyaWZpYWJsZSI6eyJSb25kYSI6eyJlc3NlbnRpYWwiOnRydWUsImlzcyI6W3siZGlkIjoiZGlkOmV0aHI6MHhkNzIwNjdjNmZiMDU2ZmZhOWIwN2M0OTY0NTMwNWFlZDcwZmY4YzMzIn1dfX0sInVzZXJfaW5mbyI6e319LCJpc3MiOiJkaWQ6ZXRocjoweGI0ZTMzN2MyMGJlYzMyMjZjM2U3ODJkMzU5YWM2NmIyNDlkNzZiYzgifQ.b99ctFqwkmTfe0ZdzdnASs0frLbEgR2udgYoFnB1AAkhqjnGRB2kPRts6COrjiSxrq9Xbh-igmiSuFdDam1dSAA",
  "own": {},
  "verified": [
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NkstUiJ9.eyJpYXQiOjE2MDUzOTg0MDAsInN1YiI6ImRpZDpldGhyOjB4ZWI0NWVjYzM3YTIzYmJmMDMwM2M5OTFlMjZkMWU5ZjI0YmYwMTRiYSIsInZjIjp7IkBjb250ZXh0IjpbImh0dHBzOi8vd3d3LnczLm9yZy8yMDE4L2NyZWRlbnRpYWxzL3YxIl0sInR5cGUiOlsiVmVyaWZpYWJsZUNyZWRlbnRpYWwiXSwiY3JlZGVudGlhbFN1YmplY3QiOnsiUm9uZGEiOnsicHJldmlldyI6eyJ0eXBlIjoyLCJmaWVsZHMiOlsiTm9tYnJlIGRlIFJvbmRhIiwiUGVyaW9kaWNpZGFkIGRlIFJvbmRhIiwiQ2FudGlkYWQgZGUgTsO6bWVyb3MiLCJGZWNoYSBkZSBGaW4iXX0sImNhdGVnb3J5IjoiZmluYW5jZSIsImRhdGEiOnsiQ8OzZGlnbyBkZSBSb25kYSI6IjVmYWRiMzZlMjk1ZGUwMjRiYmM0YTQyZSIsIk5vbWJyZSBkZSBSb25kYSI6IlRlc3QiLCJOT01CUkUiOiJGYWN1bmRvIE1hcnRpbiIsIkFQRUxMSURPIjoiSEFOTUFZQU4iLCJNb250byBkZSBsYSBSb25kYSBbJF0iOjIwMDAsIk1vbnRvIGluZGl2aWR1YWwgWyRdIjoxMDAwLCJQZXJpb2RpY2lkYWQgZGUgUm9uZGEiOiJEaWFyaWEiLCJDYW50aWRhZCBkZSBOw7ptZXJvcyI6MiwiTWkgbsO6bWVybyI6IjIiLCJGZWNoYSBkZSBJbmljaW8iOiIyMDIwLTExLTEzIiwiRmVjaGEgZGUgRmluIjoiMjAyMC0xMS0xNSIsIiMgRnVlcmEgZGUgdMOpcm1pbm8iOjAsIiMgSW1wYWdhcyI6MiwiUm9sIjoiQWRtaW5pc3RyYWRvciIsIkVzdGFkbyBkZSBsYSBSb25kYSI6IkZpbmFsaXphZGEifX19fSwiaXNzIjoiZGlkOmV0aHI6MHhkNzIwNjdjNmZiMDU2ZmZhOWIwN2M0OTY0NTMwNWFlZDcwZmY4YzMzIn0.V81d27ouPkL_bnvLxMLpFgq5e04eNBf6PGdizp7K3a0yU-kfjRuy4go3tkmFlDUuCToiVDpjD738-Ctg2A-nwAA"
  ],
  "aud": "did:ethr:0xb4e337c20bec3226c3e782d359ac66b249d76bc8",
  "type": "shareResp",
  "iss": "did:ethr:0xeb45ecc37a23bbf0303c991e26d1e9f24bf014ba"
}
```
 
