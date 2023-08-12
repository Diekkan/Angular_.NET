# Angular_.NET

## Backend

Crea una API que permita realizar operaciones (Crear y Leer) sobre una entidad "Task". Cada tarea debe tener un identificador único, una descripción y un indicador de si ha sido completada o no.

La API debe exponer los siguientes endpoints:

### GET /api/tasks: devuelve una lista de todas las tareas.
### GET /api/tasks/{id}: devuelve la tarea con el identificador especificado en la URL.
### POST /api/tasks: crea una nueva tarea con la información proporcionada en el cuerpo de la solicitud.

Por favor incluir validaciones básicas en la creación de tareas, como la validación de campos requeridos y la comprobación de que la descripción no está vacía y tenga un largo máximo de 100 carcteres.

## Ejercicio 2

Implementar un formulario en Angular para crear Tasks, en el formulario se debe ingresar la descripción y la fecha.

Al clickear el botón se debe agregar la Task a una lista que debe ser desplegada en otro componente.

Al desplegar las Tasks cada una de ellas debe tener un botón para marcarla como finalizada y otro botón para eliminarla. Las tareas finalizadas deben aparecer con la descripción en color gris, el texto tachado (text-decoration: line-through;), y deben aparecer al final de la lista.

 