---
id: arquitectura-aidi
title: Flujo de Validacion
---

## Flujo en aidi

La validación de identidad se verifica por medio de vu-Security, quien nos facilita con su servicio.
Consiste en el que el usuario crea el proceso , ingrese el frente , el dorso y una selfie para validar su identidad.

Para realizar el inicio del proceso de validación, se debe llamar a la función `createVerificationVU(...)`. 

```
createVerificationVU(activeDid: ActiveDid,name:string,lastname: string,deviceHash = "hash",rooted = false) :Promise<IReturnCreate> 
{
try {
    const did = JSON.stringify(await activeDid?.did());
	return await VUSecurity()
        .createVerification(did,`${name} ${lastname}`,deviceHas,systemVersion,manufacturer,deviceName,ipAddress,createTokenAuthorization(activeDid),
	);	
} catch (error) {
	return { 
		status: "error",
		errorCode: "INITIAL_CREATION",
		message: `${error}`,
	};
}
}
```
Para realizar el ingreso del frente, dorso o selfie del documento, se debe llamar a la función `addDocumentImage(...)` además colocar parámetro side con su correspondiente valor front, back o selfie 

```
export async function addDocumentImage(userName: string,operationId: string,file: string,did: ActiveDid,side: string):Promise<IReturnImage>{    
	try {
		const token = await createTokenAuthorization(did);
		return await VUSecurity().addDocumentImage(userName, operationId, side, file, token);
	} catch (e) {
		return { 
			status: "camera-error",
			errorCode: "ADD_IMAGE",
			message: `${e}`,
		};
	}
}
```

Para Solicitar la información del frente dorso y código de barra del documento, se debe llamar a la función `getInformation(...)`. 

```
getInformation(userName: string, operationId: string, did: ActiveDid ):Promise<IReturnGetInformation>{    
    const token = await createTokenAuthorization(did);
    return VUSecurity().getInformation(userName, operationId,token);
}
```

Para Solicitar estado de finalización del proceso de validación, se debe llamar a la función `finishOperation(...)`. 

```
finishOperation(userName: string,operationId: string, did: ActiveDid ): Promise<IFinishOperation> {    
    try {
         const token = await createTokenAuthorization(did);
        return await VUSecurity().finishOperation(userName, operationId,token);     
    } catch (error) {
        return { 
            status: "error",
            errorCode: "END_OPERATION",
            message: `${error}`,
        };
    }
}
```

