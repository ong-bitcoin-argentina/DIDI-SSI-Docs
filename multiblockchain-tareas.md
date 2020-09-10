# Tareas
- Crear DIDI-SSI-BlockchainManager (con código actual de DIDI e Issuer)
- Pensar la arquitectura e interfaz de ese nuevo repositorio para que soporte de forma abstracta, multiblochain
  - Se crearán distintos servicios específicos de cómo pedir gas, etc., para cada blockchain soporta
  - El usuario del BlockchainManager eligirá qué modulo específico quiere
  - Por default es la actual testnet de RSK
- Alta de Issuer en DIDI (name - netId), con la delegación hecha en la network elegida
- Llevar el servicio llamado "BlockchainService" a una lib en común (hoy día está en DIDI y en el Issuer)
- Arreglar la recorrida de eventos (no funciona)

# Networks soportadas
- rsk
- ethereum
- lacchain
- bfa

# Alta y delegación
1) Levanto un servicio de Issuer (por variable de entorno tengo la blockchain que uso)
2) Creo un issuer en la DB de DIDI donde se relacionan nombre y did del issuer
3) DIDI crea una transacción (addDelegate) que lo agrega como delegate válido (basado en el did pasado por el issuer)

# Validar delegación
1) Con el did almacenado en la DB ejecuto una función del BlockchainService

# Revocación
1) Con el did almacenado en la DB ejecuto una función del BlockchainService
2) Marco en la DB al Issuer como deshabilitado