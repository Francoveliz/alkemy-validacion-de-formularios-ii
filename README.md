# Alkemy validacion de formularios ii

## Objetivo de aprendizaje:

Validar formularios básicos a través de la librería Formik para sumar al aprendizaje de desarrollo de vistas.

## Consignas:

1. Crear el componente CreateUser con los siguientes campos:

- Nombre (solo texto, más de 2 caracteres, obligatorio)
- Apellido (solo texto, más de 2 caracteres, obligatorio)
- DNI (numérico entre 7 y 8 caracteres, obligatorio)
- Email (Formato de email válido, obligatorio)
- Profile Image (png o jpg, obligatorio)
- Password (mínimo 8 caracteres, al menos una letra y un número, no puede contener el nombre ni el apellido ni el nickname, obligatorio)
- Confirm Password (debe ser igual a Password, obligatorio)
- NickName (alfanumérico, opcional)
- Description (multilínea, opcional)

2. La validación de los campos debe estar realizada con Formik
3. Al guardar, si las validaciones son correctas, debe guardar los campos en un objeto y mostrarlo por consola
4. El campo de descripción debe estar implementado con CKEditor
5. Si luego de confirmar un campo es incorrecto debe marcarse cada uno de ellos con el borde con rojo.

## Criterio de aceptación:

- Entregar en un repositorio público.
- Se debe utilizar Formik y CKEditor
- Todos los campos que tengan restricciones deben estar validados.

# Usage

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
