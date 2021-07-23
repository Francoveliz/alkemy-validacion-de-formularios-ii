import {
	FormControl,
	Button,
	FormLabel,
	Input,
	Stack,
	Image,
	Box,
	VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import InputAlert from "../InputAlert";
import { validationSchema } from "./validationSchema";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useEffect, useRef, useState } from "react";
import { getBase64 } from "../../utils/getBase64";
import { BsUpload } from "react-icons/bs"; // profileImage upload icon

const CreateUser = () => {
	const profileImageRef = useRef();
	const [previewImage, setPreviewImage] = useState(null);

	const initialFormValues = {
		nombre: "",
		apellido: "",
		dni: "",
		email: "",
		profileImage: "",
		password: "",
		confirmPassword: "",
		nickName: "",
		description: "",
	};

	const handleInputError = (input, formik) => {
		if (formik.touched[input] && formik.errors[input]) {
			return <InputAlert text={formik.errors[input]} />;
		}
		return null;
	};

	const errorInputRing = (input, formik) => {
		if (formik.touched[input] && formik.errors[input]) {
			return {
				ring: 2,
				ringColor: "red.500",
			};
		}
		return null;
	};

	const handleSubmit = values => {
		console.log(values);
	};

	const formik = useFormik({
		initialValues: initialFormValues,
		validationSchema: validationSchema,
		onSubmit: values => handleSubmit(values),
	});

	useEffect(() => {
		if (formik.values.profileImage) {
			setPreviewImage(formik.values.profileImage);
		}
	}, [formik.values.profileImage]);

	const handleImage = async e => {
		try {
			const image = e.target.files[0];
			const profileImage64 = await getBase64(image);
			formik.setFieldValue("profileImage", profileImage64);
		} catch (error) {
			console.log("Error", error);
		}
	};

	return (
		<VStack spacing={5} boxShadow="lg" p={8} borderRadius="xl" bg="white">
			{/* NOMBRE INPUT */}
			<FormControl>
				<FormLabel>Nombre</FormLabel>
				<Input
					type="text"
					id="nombre"
					value={formik.values.nombre}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					{...errorInputRing("nombre", formik)}
				/>
				{handleInputError("nombre", formik)}
			</FormControl>
			{/* APELLIDO INPUT */}
			<FormControl>
				<FormLabel>Apellido</FormLabel>
				<Input
					type="text"
					id="apellido"
					value={formik.values.apellido}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					{...errorInputRing("apellido", formik)}
				/>
				{handleInputError("apellido", formik)}
			</FormControl>
			{/* DNI INPUT */}
			<FormControl>
				<FormLabel>D.N.I</FormLabel>
				<Input
					type="number"
					id="dni"
					value={formik.values.dni}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					{...errorInputRing("dni", formik)}
				/>
				{handleInputError("dni", formik)}
			</FormControl>
			{/* EMAIL INPUT */}
			<FormControl>
				<FormLabel>Correo electrónico</FormLabel>
				<Input
					type="email"
					id="email"
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					{...errorInputRing("email", formik)}
				/>
				{handleInputError("email", formik)}
			</FormControl>
			{/* PROFILE IMAGE INPUT */}
			<FormControl>
				<FormLabel>Imagen de perfil</FormLabel>
				<Stack direction="column" align="start">
					<Input
						ref={profileImageRef}
						display="none"
						type="file"
						id="profileImage"
						name="profileImage"
						accept="image/png, image/jpeg"
						onChange={handleImage}
					/>
					<Box width={56}>
						{previewImage && (
							<Image
								mb={10}
								objectFit="contain"
								src={previewImage}
								alt="imagen de perfil"
							/>
						)}
					</Box>
					<Stack style={{ margin: 0 }} direction="row" spacing={4}>
						<Button
							size="sm"
							leftIcon={<BsUpload />}
							colorScheme="teal"
							onClick={() => {
								profileImageRef.current.click();
							}}
							variant="outline">
							Subir
						</Button>
					</Stack>
				</Stack>
				{handleInputError("profileImage", formik)}
			</FormControl>
			{/* PASSWORD INPUT */}
			<FormControl>
				<FormLabel>Contraseña</FormLabel>
				<Input
					type="password"
					id="password"
					value={formik.values.password}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					{...errorInputRing("password", formik)}
				/>
				{handleInputError("password", formik)}
			</FormControl>
			{/* CONFIRM PASSWORD INPUT */}
			<FormControl>
				<FormLabel>Confirmar contraseña</FormLabel>
				<Input
					type="password"
					id="confirmPassword"
					value={formik.values.confirmPassword}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					{...errorInputRing("confirmPassword", formik)}
				/>
				{handleInputError("confirmPassword", formik)}
			</FormControl>
			{/* NICKNAME INPUT */}
			<FormControl>
				<FormLabel>Apodo</FormLabel>
				<Input
					type="text"
					id="nickName"
					value={formik.values.nickName}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					{...errorInputRing("nickName", formik)}
				/>
				{handleInputError("nickName", formik)}
			</FormControl>
			{/* DESCRIPTION INPUT */}
			<FormControl>
				<FormLabel>Descripción</FormLabel>
				<CKEditor
					editor={ClassicEditor}
					data={formik.values.description}
					id="description"
					name="description"
					onChange={(event, editor) => {
						const text = editor.getData();
						formik.setFieldValue("description", text);
					}}
					{...errorInputRing("description", formik)}
				/>
				{handleInputError("description", formik)}
			</FormControl>
			<Button colorScheme="blue" onClick={formik.handleSubmit}>
				Enviar
			</Button>
		</VStack>
	);
};

export default CreateUser;
