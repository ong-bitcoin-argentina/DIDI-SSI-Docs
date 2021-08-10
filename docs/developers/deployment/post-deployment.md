---
id: post-deployment
title: Procedimiento Post-Deployment
---

**IMPORTANTE:** Todos los valores de las variables de entorno utilizadas en esta documentación son meramente ilustrativos y no deben usarse en los ambientes del lector. Para saber los valores de dichas variables será necesario que quien lee examine el archivo `.env` que utilizó para deployar la solución.

## 1. Delegar capacidad de emitir credenciales

**a. Descripción:** Se comandará a *DIDI Server* para que autorice a otros issuer a emitir credenciales. Esta transacción quedará grabada en:

* La instancia *MongoDB* local al servidor contra el que se ejecute la llamada a la API. Especificamente en la BD `$DIDI_SERVER_MONGO_DB` (ver archivo `.env` utilizado para deployar), dentro de la colección `issuers`. A continuación, un ejemplo de uno de los objetos que se crean en esa colección extraído de nuestro ambiente de *QA*:

		{"_id": {"$oid": "60b0e816e52ad54ba8ea8a21"},
		"deleted": false,
		"createdOn": {"$date": "2021-05-27T19:22:22.585Z"},
		"name": "DIDI Issuer QA",
		"did": "did:ethr:0xb9ab0362c18bb3e9b68af4854ffb71834759d6be",
		"expireOn": {"$date":"2024-05-12T12:54:46.466Z"},
		"blockHash": "0xa438525bf181285b4b0f72c478b625c9bf8df2b906ce6365845fcac5f2344ba1",
		"__v": 0}
		
* El Smart Contract *EthereumDIDRegistry* del proyecto *uPort*, el cual está deployado en las Blockchain de *RSK*, *LAC* y *BFA* en las direcciones especificadas en las siguientes variables de entorno, las cuales han sido extraídas del archivo `.env` que se usa para instalar *DIDI* (ejemplo de nuestro ambiente de *QA*):

		BLOCKCHAIN_CONTRACT_RSK="0xdca7ef03e98e0dc2b855be647c39abe984fcf21b"
		BLOCKCHAIN_CONTRACT_LAC="0x488C83c4D1dDCF8f3696273eCcf0Ff4Cf54Bf277"
		BLOCKCHAIN_CONTRACT_BFA="0x0b2b8e138c38f4ca844dc79d4c004256712de547"

**IMPORTANTE:** Se podrá observar la transacción específica sobre el Smart Contract en RSK (así como sobre cualquier otra dirección de la Testnet de RSK) utilizando la herramienta https://explorer.testnet.rsk.co/.

**b. Prerequisitos:** 

* Es necesario cargar *RBTC* utilizando https://faucet.rsk.co/ a las direcciones de la Blockchain que se esté usando (en nuestro caso usamos la Testnet de **RSK**), las cuales están asociadas a las siguientes variables (ejemplo de nuestro ambiente de *QA*):

		#A. DIDI Server: Dirección del módulo "didi-server" en la blockchain apuntada por $BLOCKCHAIN_URL_MAIN.
		export DIDI_SERVER_DID="0x7774a33f0a0c810ca079407425a8fb50cc4dde14"

		#B. DIDI Issuer: Dirección del módulo "issuer-backend" en la blockchain apuntada por $BLOCKCHAIN_URL_MAIN.
		export DIDI_ISSUER_DID="0xb9ab0362c18bb3e9b68af4854ffb71834759d6be"

		#C. DIDI Ronda

		#C.1. Dirección del módulo "ronda" en la blockchain apuntada por $BLOCKCHAIN_URL_MAIN.
		export RONDA_DID="did:ethr:0xda9ee55b7237365b1438cf569e1913268acdf8be"
		
		#C.2. Dirección del Owner del Smart Contract de "ronda" en la blockchain apuntada por $BLOCKCHAIN_URL_MAIN.
		export RONDA_CONTRACT_OWNER="0xbc41b9df8ebdb88dc0f982ee6ab7feebbf72aaa9"
		
		#C.3. Dirección para refill automático de la wallet C.1.
		export RONDA_REFILL_ORIGIN_ACCOUNT="0xa4ad4b5a84b25a6b254ac5e051980eeebbe6ba1f"

* Cargarle *ether* a las mismas direcciones en **BFA** solicitandoló al canal de Telegram oficial: [https://t.me/bfatec](https://t.me/bfatec).

**c. Procedimiento:** Se debe realizar una llamada a la API del *DIDI Server* mediante el siguiente comando (ejemplo de nuestro ambiente de *QA*):

curl -X 'POST' \
  'https://api.qa.didi.org.ar/api/1.0/didi/issuer' \
  -H 'accept: */*' \
  -H 'Content-Type: multipart/form-data' \
  -F 'did=did:ethr:0xb9ab0362c18bb3e9b68af4854ffb71834759d6be' \
  -F 'name=DIDI Issuer QA' \
  -F 'description= Descripción del Issuer' \
  -F 'callbackUrl=url' \
  -F 'token=asdf' \
  -F 'file=@imagen.jpg;type=image/jpeg'

* El **endpoint** de la llamada es el valor de la variable `DIDI_SERVER_API` en el `.env` de *DIDI*.

* **Parámetros:**

	* `name`: Se puede utilizar cualquier nombre que se crea conveniente. Una opción es obtenerlo concatenando el valor de la variable `ENVIRONMENT` a cada una de las siguientes variables según corresponda (ejemplo de nuestro ambiente de *QA*):

			export ENVIRONMENT=qa

			##########
			#Emisores#
			##########

			#A. DIDI Server
			export DIDI_SERVER_NAME="DIDI Server"

			#B. DIDI Issuer
			export DIDI_ISSUER_NAME="DIDI Issuer"

			#C. DIDI Ronda
			export RONDA_NAME="DIDI Ronda"

	* `did`: De acuerdo al issuer que se esté autorizando, se deben utilizar los valores de las siguientes variables (ejemplo de nuestro ambiente de *QA*):

			##########
			#Emisores#
			##########

			#A. DIDI Server
			export DIDI_SERVER_DID="0x7774a33f0a0c810ca079407425a8fb50cc4dde14"

			#B. DIDI Issuer
			export DIDI_ISSUER_DID="0xb9ab0362c18bb3e9b68af4854ffb71834759d6be"

			#C. DIDI Ronda
			export RONDA_DID="did:ethr:0xda9ee55b7237365b1438cf569e1913268acdf8be"

		* **IMPORTANTE(1):** Si se quiere efectuar delegaciones sobre la *Blockchain* a la que pertenece el nodo apuntado por la variable `BLOCKCHAIN_URL_MAIN` en el `.env` de *DIDI*, hay que usar el prefijo `did:ethr:` para los DIDs que se vayan a utilizar. Si es sobre otras, utilizar estos:

			* *RSK*: `did:ethr:rsk:`
			* *LAC*: `did:ethr:lac:`
			* *BFA*: `did:ethr:bfa:`

	* `callbackurl`: No es obligatorio (en todo caso usar uno fake). Endpoint contra el que se realizará una API call para avisar sobre el resultado de la transacción.

	*	`token`: No es obligatorio (en todo caso usar uno fake). Token a utilizar para hacer la API call contra la "callbackurl".

**d. Verificación:** Además de verificar las transacciones en *MongoDB* y el *Smart Contract*, luego de al menos 5 min. de haber dado de alta el issuer correspondiente, se puede utilizar la siguiente API call.

	curl --location --request POST 'https://api.qa.didi.org.ar/api/1.0/didi/issuer/verify' \
	--header 'Content-Type: application/x-www-form-urlencoded' \
	--data-urlencode 'did=did:ethr:0xb9ab0362c18bb3e9b68af4854ffb71834759d6be'

* **Utilidad:** Dado un *DID*, verifica si existe un issuer autorizado identificado con él.
* El **endpoint** de la llamada es contra la API de *DIDI Server* (ruta `/verify`).

* **Parámetros:**

	* did: *DID* del issuer a verificar.

* **Posibles respuestas:**

	* El Issuer está autorizado:

			Status: 200 OK.

			{
			   "status": "success",
			   "data": {
			       "did": "did:ethr:0xb9ab0362c18bb3e9b68af4854ffb71834759d6be",
			       "name": "DIDI Issuer QA",
			       "expireOn": "2024-05-12T14:10:41.445Z"}
			}

	* El Issuer no está autorizado:

			Status: 200 OK.

			{
			   "status": "error",
			   "errorCode": "IS_INVALID",
			   "message": "El emisor no esta autorizado para emitir certificados, por favor contacte a un administrador para obtener dicha autorizacion."
			}
			
* **Posibles causas de que no se delegue mi issuer**
	* El DID utilizado para efectuar la llamada a la API en el **procedimiento c** no comienza con `did:ethr:` (en caso de tratarse de una dirección de la red `$BLOCKCHAIN_URL_MAIN`) o con el prefijo correspondiente a la Blockchain que se esté usando (ej: `did:ethr:bfa:` para **BFA**).
	* El DID utilizado para efectuar la llamada a la API en el **procedimiento c** no es igual al que se usó en la **verificación d**. Recordar además que ambos deben comenzar con el mismo prefijo (`did:ethr: ...`).
	* Verificar que se haya efectuado el procedimiento descrito en **b. Prerequisitos**.
	* Si se procedió a efectuar las tres verificaciones anteriores y el resultado fue correcto, pero aún así el issuer sigue sin estar delegado; verificar si en la instancia *MongoDB* local al DIDI Server, especificamente en la BD `$DIDI_SERVER_MONGO_DB` (ver archivo `.env` utilizado para deployar), dentro de la colección `issuers` , existe un objeto como el de la **descripción a**. Si es así, verificar que el campo `"did"` de dicho objeto coincida con el que se está consultando.
	* En caso de que no se cree el objeto correspondiente en la BD, o que exista pero aún así la llamada a la API para verificar la delegación del issuer siga diciendo que no está autorizado a emitir credenciales, comunicarse con **Soporte del Proyecto DIDI**. 

## 2. Agregar app/BE autorizado

**a. Descripción:** Por cada servicio de *DIDI* (identificable mediante un *DID*) que sea utilizado como backend de una aplicación diferente de *ai.di*, se lo debe a agregar como autorizado para ser apuntado por una app. Esta transacción queda grabada en:

* La instancia *MongoDB* local al servidor contra el que se ejecute la llamada a la API. Especificamente en la BD `$DIDI_SERVER_MONGO_DB` (ver archivo `.env` utilizado para deployar), dentro de la colección `appauths`. A continuación, un ejemplo de uno de los objetos que se crean en esa colección extraído de nuestro ambiente de *QA*:

		{"_id":{"$oid":"60b689d6aecb3e00ca24f5bf"},
		"createdOn":{"$date":"2021-06-01T19:23:05.715Z"},
		"did":"did:ethr:0xda9ee55b7237365b1438cf569e1913268acdf8be",
		"name":"Ronda QA",
		"__v":0}

**b. Procedimiento:** Se debe realizar una llamada a la API del *DIDI Server* mediante el siguiente comando (ejemplo para nuestro ambiente de *QA*):

	curl --location --request POST 'https://api.qa.didi.org.ar/api/1.0/didi/appAuth' \
	--header 'Content-Type: application/x-www-form-urlencoded' \
	--data-urlencode 'did=did:ethr:0xda9ee55b7237365b1438cf569e1913268acdf8be' \
	--data-urlencode 'name=Ronda QA'

* El **endpoint** de la llamada es el valor de la variable `DIDI_SERVER_API` en el `.env` de *DIDI*, seguido de la ruta `/appAuth`.

* **Parámetros:**

	* `did`: De acuerdo al BE que se esté autorizando, se deben utilizar los valores de las siguientes variables (ejemplo para nuestro ambiente de *QA*):

			#########
			#Apps/BE#
			#########

			#A. DIDI Ronda
			export RONDA_DID="did:ethr:0xda9ee55b7237365b1438cf569e1913268acdf8be"

	* `name`: Se puede utilizar cualquier nombre que se crea conveniente. Una opción es obtenerlo concatenando el valor de la variable `ENVIRONMENT` a cada una de las siguientes variables según corresponda (ejemplo para nuestro ambiente de *QA*):

			export ENVIRONMENT=qa

			#########
			#Apps/BE#
			#########

			#C. DIDI Ronda
			export RONDA_NAME="DIDI Ronda"

**c. Verificación:** Además de verificar el contenido en *MongoDB*, se puede utilizar la siguiente API Call:

	curl --location --request GET 'https://api.qa.didi.org.ar/api/1.0/didi/appAuth/did:ethr:0xda9ee55b7237365b1438cf569e1913268acdf8be'

* **Utilidad:** Dado un *DID*, verifica si existe un BE autorizado para ser apuntado por una app identificado con él.

* El **endpoint** de la llamada es el valor de la variable DIDI_SERVER_API en el ".env" de "DIDI", seguido de la ruta "/appAuth/<BE_DID>", dónde <BE_DID> es el DID del BE a verificar.

* **Posibles respuestas** (ejemplos para nuestro ambiente de QA):

	* La app/BE está autorizado:

			Status: 200 OK.

			{
			    "status": "success",
			    "data": {
			        "createdOn": "2021-06-01T19:23:05.715Z",
			        "_id": "60b689d6aecb3e00ca24f5bf",
			        "did": "did:ethr:0xda9ee55b7237365b1438cf569e1913268acdf8be",
			        "name": "Ronda QA",
			        "__v": 0}
			}

	* La app/BE no está autorizado:

			Status: 500 Internal Server Error.

			{
			    "status": "error",
			    "errorCode": "APP_DID_NOT_FOUND",
			    "message": "La Aplicación con el DID did:ethr:0x7774a33f0a0c810ca079407425a8fb50cc4dde14 no esta autorizada."
			}
			
* **Posibles causas de que no se autorice a mi app/BE:**
	* El DID utilizado para efectuar la llamada a la API en el **procedimiento b** no comienza con `did:ethr:` (en caso de tratarse de una dirección de la red `$BLOCKCHAIN_URL_MAIN`) o con el prefijo correspondiente a la Blockchain que se esté usando (ej: `did:ethr:bfa:` para **BFA**).
	* El DID utilizado para efectuar la llamada a la API en el **procedimiento b** no es igual al que se usó en la **verificación c**. Recordar además que ambos deben comenzar con el mismo prefijo (`did:ethr: ...`).
	* Si se procedió a efectuar ambas verificaciones anteriores y el resultado fue correcto, pero aún así la app/BE sigue sin estar autorizado; verificar si en la instancia *MongoDB* local al DIDI Server, especificamente en la BD `$DIDI_SERVER_MONGO_DB` (ver archivo `.env` utilizado para deployar), dentro de la colección `appauths` , existe un objeto como el de la **descripción a**. Si es así, verificar que el campo `"did"` de dicho objeto coincida con el que se está consultando.
	* En caso de que no se cree el objeto correspondiente en la BD, o que exista pero aún así la llamada a la API para verificar la app/BE siga diciendo que no está autorizado, comunicarse con **Soporte del Proyecto DIDI**. 

## 3. Crear usuarios administradores para los issuer

**a. Descripción:** Se darán de alta usuarios administradores para los módulos *Issuer* (genéricos) de *DIDI*. Estos son aquellos bajo URLs como las siguientes (ejemplo para nuestro ambiente de QA):

	#DIDI Issuer
	https://issuer.qa.didi.org.ar/

**b. Prerequisitos:** La solución de *DIDI* se debe haber deployado con la variable `ENABLE_INSECURE_ENDPOINTS` en *true* en el archivo `.env`.

* **IMPORTANTE:** Luego de haber dado de alta los usuarios administradores, por motivos de seguridad es recomendable re-deployar la solución pero esta vez con la variable en *false*.

**c. Procedimiento:** Se debe realizar una llamada a la API del issuer correspondiente mediante el siguiente comando (ejemplo para nuestro ambiente de QA con password fake):

	curl --location --request POST 'https://api.issuer.qa.didi.org.ar/api/1.0/didi_issuer/user/admin' \
	--header 'Content-Type: application/x-www-form-urlencoded' \
	--data-urlencode 'name=adminabc' \
	--data-urlencode 'password=adminabc'

* El **endpoint** de la llamada es el valor de la variable `DIDI_ISSUER_API_URL` en el `.env` de *DIDI*, seguido de la ruta `/user/admin`.

* **Parámetros:**

	* `name`: Nombre del usuario a dar de alta.
	* `password`: Password del usuario.

**d. Verificación:** Ingresar al frontend del issuer y utilizar el usuario creado para efectuar el login.

## 4. Definir un template de credenciales por defecto

**a. Descripción:** En caso de que los templates de credenciales sean inicializados junto con la base de datos dentro del mongo-init, se deberá designar uno de los mismos como el template por defecto al crear las credenciales.

**b. Procedimiento:** En el cliente del issuer (https://issuer.qa.didi.org.ar/ en caso del ambiente qa), luego de loguearse entrar en la pestaña de configuración y seleccionar el template deseado a establecer como default.


## 5. Integración entre apps a nivel backend

### Creación de did para la aplicación

El primer paso para identificar nuestra aplicación es generar su `did`. Se recomienda utilizar `uport-credentials` descripta en la [documentación oficial](https://developer.uport.me/credentials/login#setup). 
Directamente puede utilizar el script de deployment [key-generator.js](https://github.com/ong-bitcoin-argentina/DIDI-SSI-Deploy/blob/master/deploy-tools/key-generator.js). Se debe tomar el par de claves pública y privada. 

Ejecutar:

	node key-generator.js

### Autenticación de aplicación con didi server

Se utiliza el endpoint [/api/1.0/didi/appAuth](https://github.com/ong-bitcoin-argentina/DIDI-SSI-Server/blob/develop/routes/AppUserAuthRoutes.js#L65) para autorizar un app. Como parámetros le pasaremos el DID generado anteriormente y el nombre de la aplicación. 

Ejemplo:

	APP_DID: Did generado en el paso anterior.
	APP_NAME: Nombre con el cual va a ser identificada la aplicación.

	curl -X 'POST' \
		'https://api.qa.didi.org.ar/api/1.0/didi/appAuth' \
		-H 'accept: */*' \
		-H 'Content-Type: application/json' \
		-d '{
		"did": "APP_DID",
		"name": "APP_NAME"
	}'

### Establecer relación entre la app y DIDI Server (dado un usuario)

El siguiente paso es crear la relación de `app<-->user` en DIDI Server. Se deben generar dos JWT, uno firmado por el usuario y otro firmado por la app. Nuevamente se utiliza  `uport-credentials`.

userJWT: 

	USER_DID: did del usuario a conectar
	DIDI_SERVER_DID: did DIDI Server
	DIDI_SERVER_DID_ADRESS: Dirección del didi server extraida del did.(Sin el did:ethr: )
	APP_NAME: Nombre de la aplicación definido en el paso anterior.

	import { getSignerForHDPath } from "react-native-uport-signer";	(Esta librería se utiliza en el caso de ser una app mobile, para web apps se puede utilizar did-jwt)
	import { Credentials } from "uport-credentials";

	const createToken = (USER_DID) => {
		const credentialsParams: Settings = {};
		credentialsParams.signer = getSignerForHDPath(DIDI_SERVER_DID_ADRESS); 
		credentialsParams.did = USER_DID;

		const cred = new Credentials(credentialsParams);

		return cred.createVerification({
			sub: DIDI_SERVER_DID, 
			claim: { name: "APP_NAME" }
		});
	};

[Implementación en aidi](https://github.com/ong-bitcoin-argentina/DIDI-SSI-Mobile/blob/4fb98e0df59623e534afdfcb42927e4571c2af2e/src/src/presentation/util/appRouter.tsx#L100).

appJWT: 

	const didJWT = require("did-jwt");

	const createJWTForAidi = () => {
		const signer = didJWT. (APP_PRIVATE_KEY);
		return await didJWT.createJWT(
			{ name: "APP_NAME" },
			{ alg: "ES256K-R", issuer: APP_DID, signer }
		);
	}

[Implementación en ronda](https://github.com/ong-bitcoin-argentina/DIDI-Ronda/blob/775825fff2705815d90580ab8ce68fc1aee7f63f/api/services/aidi.js#L20).

Se puede obtener mayor información en la documentación de cada biblioteca: 

[Repositorio uPort - React Native uPort Signer](https://github.com/uport-project/react-native-uport-signer).

[Repositorio Decentralized Identity - DID JWT](https://github.com/decentralized-identity/did-jwt).

[uPort Credentials](https://www.npmjs.com/package/uport-credentials).

Luego de tener creados ambos JWT, utilizamos el endpoint [/api/1.0/didi/userApp/validateUser](https://github.com/ong-bitcoin-argentina/DIDI-SSI-Server/blob/1e080e76f88fa35fc153b993a7476a60b82500f9/routes/AppUserAuthRoutes.js#L127).
Este endpoint obtiene información de un usuario registrado en aidi y en caso de que no exista la crea.

Pasamos parámetros:

	Header:
		‘Authorization’:  (appJWT creado mas arriba)
	Body: {
		‘userJWT’:  (userJWT creado más arriba)
	}

Nos va a devolver como respuesta la siguiente información:  
- mail
- phoneNumber
- did
- name
- lastName
- imageId
- imageUrl
- appName

## 5. Integración entre apps a nivel frontend

### Conexión entre apps utilizando el login de aidi

Para facilitar la integración entre las distintas aplicaciones o páginas web con aidi se utilizaron Dynamic links creados en Firebase. En la [siguiente sección](./firebase-config) se ejemplifica una solución para conectar una aplicacion mobile.
Una vez configurado lo anterior, se debe agregar en aidi las referencias a los dynamic links creados.

	URL_LOGIN: dynamic link que apunta al login de aidi
	URL_CREDENTIALS: servicio en particular (no es necesario para la conexión con aidi)

	const links = {
		login: {
			deepLink: "aidi://login",
			dynamicLink: `${Config.URL_LOGIN}`,
		},
		credentials: {
			deepLink: `aidi://credentials/ronda`,
			dynamicLink: `${Config.URL_CREDENTIALS}`,
		},
		playstore: "https://play.google.com/apps/internaltest/4699395559909911910",
		urlPlaystore: "https://play.google.com/store/apps/details?id=com.aidi",
	};

[Implementación en ronda](https://github.com/ong-bitcoin-argentina/DIDI-Ronda/blob/3be9626a4f209b272a9f06c436d69aff54b93c79/app/src/utils/appRouter.js#L6).