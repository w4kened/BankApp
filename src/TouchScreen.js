import React from "react";
import styled from "styled-components";
import { Fontistom ,MaterialIcons} from "@expo/vector-icons"

import Text from "../components/Text";



export default TouchScreen = () => {
	return(
		<Container>
			<Text center heavy title color = "#ff6a00" margin = "32px 0 0 0">
				Aplikacja bankowa
			</Text>

			<Touch>
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
		</Container>
	);
};

const Container = styled.SafeAreaView`
	flex: 1;
	background-color: #1e1e1e
	align-items: center;
	justify-content: center;
`;

const Touch = styled.TouchableOpacity``;

const Circle = styled.View`
	background-color: ${props => props.bgColor}
	padding: 30px;
	border-radius: 800px;
`;

