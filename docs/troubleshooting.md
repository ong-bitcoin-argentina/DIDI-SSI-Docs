---
id: troubleshooting
title: Diagnósticos sobre el comportamiento
---

# Troubleshooting

Esta documentación indica cómo realizar ciertos tipos de búsquedas, para diagnósticos sobre el comportamiento de la plataforma DIDI.

## Credenciales dado un DID

1. Conectarse a MongoDB de DIDI Server (se recomienda utilizar algún cliente, como Studio 3T)
2. En la colección certificados realizar una query como la siguiente:
```
db.getCollection("certificates").find(
    { 
        "userDID" : "did:ethr:0x381b9f2c3f629160cc041b87e745251637b524c4"
    }
);
```
3. Allí prodrá observarse qué certificados fueron emitidos (status `UNVERIFIED`) y cuáles revocados (`ROVOKED`). Además, puede verse la fecha de creación de dicho certificado.