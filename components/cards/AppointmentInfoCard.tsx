import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import { connect } from 'react-redux';
import { removeAppointment } from '../../store/appointments';

const AppointmentInfoCard = ({ item, removeAppointment }: any) => {
    const handleDelete = (id: number) => {
        Alert.alert(
            "¿Estas seguro/a?",
            "¿Deseas cancelar esta cita?",
            [
                {
                    text: "Si",
                    onPress: () => removeAppointment(id)
                },
                {
                    text: "No",
                },
            ])
    }

    return (item && item.patient &&
        <View style={styles.card} key={item._id}>
            <Text style={styles.title}>Paciente:</Text>
            <Text>{item.patient.fullname}</Text>
            <Text style={styles.title}>Síntomas: </Text>
            <Text>{item.patient.symptoms}</Text>
            <View>
                <TouchableHighlight onPress={() => handleDelete(item._id)} style={styles.delButton}>
                    <Text style={styles.delText}>Remover cita</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}

const mapDispatchToProps = {
    removeAppointment
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

export default connect(null, mapDispatchToProps)(AppointmentInfoCard);