import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import AppointmentInfoCard from '../cards/AppointmentInfoCard';

const AppointmentBoard = ({ appointments }: any) => {
    return (
        <>
            {!appointments.length && <Text style={styles.emptyList}>No hay citas disponibles</Text>}
            <FlatList
                data={appointments}
                renderItem={({ item }: any) => (<AppointmentInfoCard item={item} />)}
                keyExtractor={(item: any, index: number) => item._id}
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
        color: 'grey',
        marginTop: 50,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

const mapStateToProps = (state: any) => ({ appointments: state.appointments })

export default connect(mapStateToProps)(AppointmentBoard);