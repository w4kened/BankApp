import React from "react";
import styled from "styled-components";
import { Fontisto, MaterialIcons} from "@expo/vector-icons"

import Text from "./Text";



export default TouchScreen = ({navigation}) => {
	return(
		<Container>
			<Text center heavy title color = "#ff6a00" margin = "32px 0 0 0">
				Aplikacja bankowa
			</Text>
			
			<Touch onLongPress={() => navigation.navigate("Tabs")} delayPressIn={0}>
					<Circle bgColor = "#1e1e1e">
						<Circle bgColor="#5196f405">
							<Circle bgColor="5196f410">
								<Circle bgcolor="5196f430">
									<TouchButton>
										<MaterialIcons name="fingerprint" size = {60} color = "ffffff" />
									</TouchButton>
								</Circle>
							</Circle>
						</Circle>
					</Circle>
			</Touch>

			<Text center heavy large>
				Dotknij sie do czytnika {"\n"} linii papilarnych aby uzyskać dostęp
			</Text>
			<Text center bold margin="16px 0 0 0" color="#9c9c9c">
				Proszę zweryfikować swoją tożsamość {"\n"} przy pomocy Touch ID
			</Text>

			<PinAccess onPress={() => navigation.navigate("Pin")} delayPressIn={0}>
				<Fontisto name="locked" color="#964ff0" size={16} />
				<Text bold margin="0 0 0 8px" color ="#964ff0">Wprowadz PIN</Text>
			</PinAccess>

			<StatusBar barStyle="light-content" />

		</Container>
	);
};

const Container = styled.SafeAreaView`
	flex: 1;
	background-color: #1e1e1e
	align-items: center;
	justify-content: center;
`;

const Touch = styled.TouchableOpacity`
	flex: 1,
	align-items: center;
	justify-content: center;
`;

const Circle = styled.View`
	background-color: ${props => props.bgColor}
	padding: 30px;
	border-radius: 800px;
`;

const TouchButton = styled.TouchableOpacity`
	background-color: #5196f4;
	padding: 8px;
	border-radius: 100px;
`

const StatusBar = styled.StatusBar``;

const PinAccess = styled.TouchableOpacity`
	margin-top: 16px;
	padding: 16px;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`