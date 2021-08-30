import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import { CenteredContainer } from './ScreenContainer';

export const Splash = ({ navigation }: any) => {
    return (<CenteredContainer>
        <Text>Loading...</Text>
    </CenteredContainer>);
};

export const Separator = () => (
    <View style={styles.separator} />
);

export const styles = StyleSheet.create({
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