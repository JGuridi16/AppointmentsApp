import React from 'react';
import { Text, Button, View, StyleSheet } from "react-native";
import AppointmentBoard from '../AppointmentBoard';
import { CenteredContainer, ScreenContainer } from '../utils/ScreenContainer';

export const Splash = ({ navigation }: any) => {
    return (<CenteredContainer>
        <Text>Loading...</Text>
    </CenteredContainer>);
};

export const LandingPage = ({ navigation }: any) => {
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

export const Home = ({ navigation }: any) => {
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

export const CreateAccount = ({ navigation }: any) => {
    return (<ScreenContainer>
        <Text style={{ textAlign: 'center' }}>Crear cuenta</Text>
    </ScreenContainer>);
};

export const Register = ({ navigation }: any) => {
    return (<ScreenContainer>
        <Text style={{ textAlign: 'center' }}>Registrar nueva cita</Text>
    </ScreenContainer>);
};

export const About = ({ navigation }: any) => {
    return (
        <ScreenContainer>
            <Text style={{ textAlign: 'center' }}>This is about page</Text>
        </ScreenContainer>
    );
};

const Separator = () => (
    <View style={styles.separator} />
);

const styles = StyleSheet.create({
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});