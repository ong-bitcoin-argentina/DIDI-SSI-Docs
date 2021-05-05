---
id: aidi-validacionIdentidad
title: ai·di | Validación de Identidad en ai·di
---

## Validación de Identidad o validación alternativa por parte del emisor.
Desde la pantalla de inicio figura la opción de validación de identidad. Presionando en “validar DNI” se accede al proceso de validación con RENAPER.

El primer paso de la validación es escanear la parte delantera del DNI: al presionar el ícono de la cámara se abrirá un recuadro donde tenemos que apuntar y enfocar con la cámara del celular a nuestro documento.
Es importante que esté en foco y se vea bien el código de barras,  que no se corte ninguna parte del DNI y no haya sombras importantes. 

Cuando se pone el tic verde pasamos al paso 2 y repetimos con la parte de atrás del DNI.
La prueba de vida sirve para demostrar que realmente somos quienes decimos ser. Es una instancia de seguridad para que no pueda cualquier persona con una foto nuestra abrir un usuario falso. 
Lo primero es enfocar nuestras caras dentro del rectángulo azul, automáticamente cuando esté en posición correcta comenzará a escanear y nos pedirá que miremos a alguno de nuestro hombros (derecho o izquierdo) es importante volver la mirada a la cámara.

Una vez concluido satisfactoriamente el proceso muestra los datos recaudados, de ser correctos se avanza presionando “OK”, de lo contrario se vuelve hacia atrás con la flecha y se iniciará el proceso de Renaper desde cero.  
	

Dado que esta validación es condición necesaria por parte del emisor en el caso de uso implementado hoy día, existiría un bloqueante en aquellos escenarios en los que un usuarix no pueda validar su identidad. Esto puede suceder, por ejemplo, porque la API no reconoce correctamente la información del usuarix, o porque cuentan con un celular con la cámara averiada.

De aquí se desprendió la necesidad de realizar lo que llamamos Validación alternativa de Identidad. Es un flujo que se inicia desde la app ai·di por la que se le declara al emisor de credenciales su número de DNI junto a su Nombre, teléfono y mail (estos últimos validados durante la creación de la cuenta ai·di). Es entonces, el emisor, el responsable de verificar que estos datos sean corrector y finalmente validar la identidad mediante la aprobación de la solicitud desde la plataforma de emisión de credenciales.
En caso de que el emisor ya cuente con datos identitarios de la persona, el flujo culmina con la emisión de las credenciales asociadas a ese usuario/DID.
