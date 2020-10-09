---
id: troubleshooting-rsk
title: Diagnósticos node RSK
---

# Nodo RSK

## Reiniciar nodo
Soliciar acceso a la Máquina virtual al equipo de IT.
- Conectarse a la máquina virtual mediante ssh. 
- Ver el estado de los contenedores

```bash
$ docker ps # Muestra la lista de comportamiento

$ docer logs cca7dfd395e7 # muestra logs del docker con ID cca7dfd395e7
```

- Conectarse al docker

```bash
$ docker exec -it cca7dfd395e7 /bin/bash
```

- Desde Docker, podemos ver los comandos utilizando
```bash
$ tail -n 200 /var/log/rsk/rsk.log  # -n cambia la cantidad de línes a visualizar
```

- Para reiniciar el nodo
```bash 
supervisorctl restart rsk
```
- Salir de docker y de la máquina virtual usando `exit` 2 veces
- Para comprobar el funcionamiento, desde la máquina local

```bash
curl --request POST \
  --url http://testnet.rsk.didi.org.ar:4444/ \
  --header 'content-type: application/json' \
  --data '{
	"jsonrpc":"2.0",
	"method":"eth_blockNumber",
	"params":[],
	"id":1
}'
```