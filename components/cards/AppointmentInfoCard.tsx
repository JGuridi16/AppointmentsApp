import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import Appointment from '../../models/appointment';

export default function AppointmentInfoCard({ item, setAppointments }: any) {
    const handleDelete = (id: number) => {
        Alert.alert(
            "¿Estas seguro/a?",
            "¿Deseas cancelar esta cita?",
            [
                {
                    text: "Si",
                    onPress: () => {
                        setAppointments((items: Appointment[]) => items.filter(x => x._id !== id));
                    },
                },
                {
                    text: "No",
                },
            ])
    }

    return (
        <View style={styles.card} key={item._id}>
            <Text style={styles.title}>Paciente:</Text>
            <Text>{item.patient}</Text>
            <Text style={styles.title}>Síntomas: </Text>
            <Text>{item.symptoms}</Text>
            <View>
                <TouchableHighlight onPress={() => handleDelete(item._id)} style={styles.delButton}>
                    <Text style={styles.delText}>Remover cita</Text>
                </TouchableHighlight>
            </View>
        </View>);
}

const styles = StyleSheet.create({
    card: {
        borderStyle: 'solid',
        backgroundColor: '#FFF',
        borderBottomColor: '#e1e1e1',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    title: {
        fontWeight: 'bold'
    },
    delButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#cc0000',
        marginVertical: 10,
        borderRadius: 50
    },
    delText: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});