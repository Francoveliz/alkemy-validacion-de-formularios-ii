import CreateUser from "./Components/create-user/CreateUser";
import { Box, Container } from "@chakra-ui/react";
function App() {
	return (
		<Box bg="blue.900">
			<Container py={10}>
				<CreateUser />
			</Container>
		</Box>
	);
}

export default App;
