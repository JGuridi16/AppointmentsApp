import React from "react";
import { Button } from "react-native";
import { ScreenContainer } from "../utils/ScreenContainer";
import AppointmentBoard from "./AppointmentBoard";

const Home = ({ navigation }: any) => {
    return (
        <ScreenContainer>
            <AppointmentBoard />
            <Button
                title="Log Out"
                onPress={() =>
                    navigation.navigate("SignIn", {
                        screen: "SignIn",
                        params: {
                            name: "Landing Page"
                        }
                    })
                }
            />
        </ScreenContainer>
    );
};

export default Home;