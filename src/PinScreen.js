import React from "react";
import styled from 'styled-components'

import Text from "./Text";

export default PinScreen = () => {
	return (
		<Container>
			<Text>Aplikacja bankowa</Text>
			<Text>Wprowadz PIN</Text>
		</Container>
	);
}

const Container = styled.SafeAreaView`
	flex: 1;
	background-color: #1e1e1e;
`;