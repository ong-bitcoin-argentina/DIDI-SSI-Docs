---
id: contribuciones
title: Guía de contribución
---

## Reporte de errores

Los Issues y reportes son muy valiosos para este proyecto.

* Los reportes de bugs ayudan al proyecto a ser más estable y evita que esos mismos errores sucedan en el futuro.
* Una pregunta, además de resolver las dudas, muestra dónde los colaboradores pueden mejorar la experiencia del usuario.

## Solicitar funcionalidades

* Las ideas son una valiosa fuente de contribuciones que podés hacer
* Si necesitas realizar una actividad que no está soportada por el proyecto. Probablemente hay otros users con la misma necesidad que se beneficiarán también
* ¿Tenés un caso de uso? No dudes en crear un issue para compartirlo y ponerte en contacto con el equipo

## Resolver bug o agregar funcionalidades

### Branches
* Los desarrollos actuales se llevan acabo desde `develop`. Todas las nuevas features deben salir desde este branch y volver a mergearse a `develop`
* Los releases se mergean a `master` una vez estabilizadas.

### Pull Request
* Una vez realizado el Pull Request, no realizar force-push para mantener la línea de correcciones.
* Agregar una descripción que indique los cambios que se hicieron y la razón de los mismos.

### Proveedores 
* Crear una nueva rama(branch) para el feature desde `develop`
* Revisa y resuelve conflictos con otras ramas.

### Contribuidores open source
Dentro de la lista de issues, hay etiquetas `help wanted` y `good first issue`. Estas son las mejores opciones para empezar a interiorizarse en el proyecto.

Las contribuciones se realizan mediante Forks del proyecto. Para esto

* Crear un fork del proyecto. Para mayor información sobre el proceso de Forks consultar [guía de Atlassian](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow) y [documentaión en Github](https://docs.github.com/es/github/getting-started-with-github/fork-a-repo)
* Crear una nueva rama (branch), a partir de `develop` y trabajar sobre esta nueva rama
* Al realizar el pull request, indicar **issue** releacionados. Utilizar closes #133 si el pull request resuelve algún issue de a lista

### Cómo vincular código con las incidencias de Jira
* `Create commit` Incluya la clave del issue en el mensaje. 
Por ejemplo, un commit como "TIS-1 Initial commit" hará que el issue de TIS-1 pase automáticamente de "Tareas pendientes" a "En curso".
* `Create branch` Incluya la clave del issue en el nombre del branch cuando cree la branch.
Por ejemplo, si nombra su branch como "TIS-2-feature", automáticamente pasará el issue TIS-2 de 'Tareas pendientes' a 'En curso'.
* `Create/Reopen/Decline Merge pull request` Asegúrese de que el pull request incluya commits que hagan referencia al issue.
Por ejemplo, si crea un pull request que tiene "TIS-3" en el título, automáticamente pasará el issue "TIS-3" de "En curso" a "En revisión". Si vuelve a abrir, rechazar o fusionar el pull request, también se transferirá el issue "TIS-3" en consecuencia.
* `Start/Reject/Abandon/Close review` Incluya la clave del issue en el título de la review cuando cree la review.
Por ejemplo, si nombra su review "TIS-4 New story" y comienza la review, automáticamente pasará el issue TIS-4 de "En progreso" a "En revisión". Si rechaza, abandona o cierra la review, también se transferirá el issue "TIS-4" en consecuencia.

Para mayor información consultar [guía sobre referencias de issues en Jira](https://support.atlassian.com/jira-software-cloud/docs/reference-issues-in-your-development-work)

## Puntos importantes

* Actualizar `README.md` con los detalles de los cambios en caso de ser necesario. Esto incluye env varibles, puertos, ubicaciones de los archivos y configuraciones del contenedor Docker.
* Revisar ortografía
* Verificar los check de estado luego de crear el Pull Request


Gracias por contribuir