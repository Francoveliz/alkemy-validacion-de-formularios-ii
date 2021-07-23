import { Alert, AlertIcon } from "@chakra-ui/react";
import React from "react";

const InputAlert = ({ text }) => {
	return (
		<Alert
			justifyContent="center"
			status="error"
			borderRadius="base"
			mt={2}>
			<AlertIcon />
			{text}
		</Alert>
	);
};

export default InputAlert;
