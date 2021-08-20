import React, { useState } from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';
import Appointment from '../models/appointment'
import AppointmentInfoCard from './cards/AppointmentInfoCard';

const AppointmentBoard = () => {
    const [appointments, setAppointments] = useState([
        { _id: 1, patient: 'Pedro', symptoms: 'Flu and cough' },
        { _id: 2, patient: 'Juan', symptoms: 'COVID' },
        { _id: 3, patient: 'Maria', symptoms: 'Cold common' },
    ] as Appointment[]);

    return (
        <>
            {!appointments.length && <Text style={styles.emptyList}>No hay citas disponibles</Text>}
            <FlatList
                data={appointments}
                renderItem={({ item }: any) => (<AppointmentInfoCard item={item} setAppointments={setAppointments} />)}
                keyExtractor={(item: any) => item._id}
            />
        </>
    );
};

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        color: '#FFF',
        marginTop: 40,
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#001f3d'
    },
    emptyList: {
        color: '#e8e8e8',
        marginTop: 50,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default AppointmentBoard;