import * as yup from "yup";

const onlyTextRegex = /^[aA-zZ\s]+$/;

const atLeastOneNumAndLetterRegex =
	/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

export const validationSchema = yup.object({
	nombre: yup
		.string()
		.required("Campo obligatorio")
		.min(2, "El campo debe contener al menos 2 caracteres")
		.matches(
			onlyTextRegex,
			"No se permiten números ni símbolos en este campo"
		),
	apellido: yup
		.string()
		.required("Campo obligatorio")
		.min(2, "El campo debe contener al menos 2 caracteres")
		.matches(
			onlyTextRegex,
			"No se permiten números ni símbolos en este campo"
		),
	dni: yup
		.string()
		.required("Campo obligatorio")
		.min(7, "La longitud del campo debe ser entre 7 y 8 caracteres")
		.max(8, "La longitud del campo debe ser entre 7 y 8 caracteres"),
	email: yup
		.string()
		.required("Campo obligatorio")
		.email("Debe ser un correo electrónico valido"),
	profileImage: yup
		.string()
		.required("Campo obligatorio")
		.test(
			"image type validation",
			"Formatos válidos jpg o png",
			(value, context) => profileImageTest(value, context)
		),
	password: yup
		.string()
		.required("Campo obligatorio")
		.min(8, "La longitud del campo debe ser de al menos 8 caracteres")
		.matches(
			atLeastOneNumAndLetterRegex,
			"El campo debe contener al menos una letra y un número"
		)
		.test(
			"password validation",
			"El nombre, el apellido o nickname no puede estar incluido en la contraseña",
			(value, context) => passwordTest(value, context)
		),
	confirmPassword: yup
		.string()
		.required("Campo obligatorio")
		.oneOf([yup.ref("password"), null], "Las contraseñas no coinciden"),
	nickName: yup.string().notRequired(),
	description: yup.string().notRequired(),
});

const profileImageTest = (value, context) => {
	if (
		value?.includes("image/png") ||
		value?.includes("image/jpg") ||
		value?.includes("image/jpeg")
	) {
		return true;
	}
	return false;
};

const passwordTest = (value, context) => {
	if (
		value?.includes(context.parent.nombre) ||
		value?.includes(context.parent.apellido) ||
		value?.includes(context.parent.nickName)
	) {
		return false;
	}
	return true;
};
