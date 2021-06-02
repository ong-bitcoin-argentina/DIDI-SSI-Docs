---
id: post-deployment
title: Procedimiento Post-Deployment
---

**IMPORTANTE:** Todos los valores de las variables de entorno utilizadas en esta documentación son meramente ilustrativos y no deben usarse en los ambientes del lector. Para saber los valores de dichas variables será necesario que quien lee examine el archivo `.env` que utilizó para deployar la solución.

## 1. Delegar capacidad de emitir credenciales

**a. Descripción:** Se comandará a *DIDI Server* para que autorice a otros issuer a emitir credenciales. Esta transacción quedará grabada en:

* La instancia *MongoDB* local al servidor contra el que se ejecute la llamada a la API. Especificamente en la BD `didi-server`, dentro de la colección `issuers`. A continuación, un ejemplo de uno de los objetos que se crean en esa colección extraído de nuestro ambiente de *QA*:

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

**IMPORTANTE:** Se podrá observar la transacción específica sobre el Smart Contract (así como sobre cualquier otra dirección de la Testnet de RSK) utilizando la herramienta https://explorer.testnet.rsk.co/.

**b. Prerequisitos:** 

* Es necesario cargar *RBTC* utilizando https://faucet.rsk.co/ a las siguientes direcciones de la Testnet de **RSK** con anterioridad (ejemplo de nuestro ambiente de *QA*):

		#A. DIDI Server
		export DIDI_SERVER_DID="0x7774a33f0a0c810ca079407425a8fb50cc4dde14"

		#B. DIDI Issuer
		export DIDI_ISSUER_DID="0xb9ab0362c18bb3e9b68af4854ffb71834759d6be"

		#C. DIDI Ronda
		export RONDA_DID="did:ethr:0xda9ee55b7237365b1438cf569e1913268acdf8be"
		export RONDA_CONTRACT_OWNER="0xbc41b9df8ebdb88dc0f982ee6ab7feebbf72aaa9"
		export RONDA_REFILL_ORIGIN_ACCOUNT="0xa4ad4b5a84b25a6b254ac5e051980eeebbe6ba1f"

* También hay que cargarle *ether* a las mismas direcciones en **BFA** solicitandoló al canal de Telegram oficial: *BFA Tec*.

**c. Procedimiento:** Se debe realizar una llamada a la API del *DIDI Server* mediante el siguiente comando (ejemplo de nuestro ambiente de *QA*):

	curl --location --request POST 'https://api.qa.didi.org.ar/api/1.0/didi/issuer' \
	--header 'Content-Type: application/x-www-form-urlencoded' \
	--data-urlencode 'name=DIDI Issuer QA' \
	--data-urlencode 'did=did:ethr:0xb9ab0362c18bb3e9b68af4854ffb71834759d6be' \
	--data-urlencode 'callbackUrl=url' \
	--data-urlencode 'token=asdf'

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

## 2. Agregar app/BE autorizado

**a. Descripción:** Por cada servicio de *DIDI* (identificable mediante un *DID*) que sea utilizado como backend de una aplicación diferente de *ai.di*, se lo debe a agregar como autorizado para ser apuntado por una app. Esta transacción queda grabada en:

* La instancia *MongoDB* local al servidor contra el que se ejecute la llamada a la API. Especificamente en la BD `didi-server`, dentro de la colección `appauths`. A continuación, un ejemplo de uno de los objetos que se crean en esa colección extraído de nuestro ambiente de *QA*:

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

	* La app/BE no está autorizad0:

			Status: 500 Internal Server Error.

			{
			    "status": "error",
			    "errorCode": "APP_DID_NOT_FOUND",
			    "message": "La Aplicación con el DID did:ethr:0x7774a33f0a0c810ca079407425a8fb50cc4dde14 no esta autorizada."
			}

## 3. Crear usuarios administradores para los issuer.

**a. Descripción:** Se darán de alta usuarios administradores para los módulos *Issuer* (genéricos) de *DIDI*. Estos son aquellos bajo URLs como las siguientes (ejemplo para nuestro ambiente de QA):

	#DIDI Issuer
	https://issuer.qa.didi.org.ar/

**b. Prerequisitos:** La solución de *DIDI* se debe haber deployado con con la variable `ENABLE_INSECURE_ENDPOINTS` en *true* en el archivo `.env`.

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


