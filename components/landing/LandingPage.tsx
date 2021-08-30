import React from "react";
import { View, Button } from "react-native";
import { Separator, styles } from "../utils";

const LandingPage = ({ route, navigation }: any) => {
    return (<View style={styles.container}>
        <Button
            title="Iniciar sesión"
            onPress={() =>
                navigation.navigate("App", {
                    screen: "App"
                })
            }
        />
        <Separator />
        <Button
            title="Crear cuenta"
            onPress={() =>
                navigation.navigate("CreateAccount", {
                    screen: "CreateAccount"
                })
            }
        />
    </View>);
};

export default LandingPage;