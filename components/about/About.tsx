import React from "react";
import { Text } from "react-native-elements";
import { ScreenContainer } from "../utils/ScreenContainer";

export const About = ({ route, navigation }: any) => {
    return (
        <ScreenContainer>
            <Text style={{ textAlign: 'center' }}>This is about page</Text>
        </ScreenContainer>
    );
};