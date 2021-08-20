import React from 'react';
import { View, StyleSheet } from "react-native";

export const ScreenContainer = ({ children }: any) => (
    <View style={styles.container}>{children}</View>
);

export const CenteredContainer = ({ children }: any) => (
    <View style={styles.centeredContainer}>{children}</View>
)

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1
    },
    centeredContainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});