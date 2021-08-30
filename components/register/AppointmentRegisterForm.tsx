import React, { useState } from 'react';
import { useEffect } from 'react';
import { Alert, StyleSheet, TextInput, TouchableHighlight, View } from 'react-native';
import { Text } from 'react-native-elements';
import { MaskedTextInput } from 'react-native-mask-text';
import { connect } from 'react-redux';
import Appointment from '../../models/Appointment';
import Patient from '../../models/Patient';
import { addAppointment } from '../../store/appointments';
import { ScreenContainer } from '../utils/ScreenContainer';
import { Guid } from 'js-guid';

const AppointmentRegisterForm = ({ addAppointment, appointments }: any) => {
    const [rawNumberPhone, setRawNumberPhone] = useState('');
    const [appointment, setAppointment] = useState<Appointment>({
        _id: null,
        patient: new Patient
    } as Appointment);
    const [patient, setPatient] = useState<Patient>({
        _id: null,
        fullname: '',
        age: 0,
        symptoms: '',
        phone: ''
    });

    useEffect(() => {}, [appointments, appointment]);

    const handleSubmit = () => {
        if (patient.fullname && patient.age 
            && patient.phone && patient.symptoms) {
            if (patient.phone.length !== 10) {
                Alert.alert('Número de teléfono inválido');
                return;
            }
            setAppointment({ ...appointment, _id: Guid.newGuid(), patient: { ...patient, _id: Guid.newGuid() } });
            addAppointment(appointment);
        }
        else
            Alert.alert('Complete los campos requeridos');
    }

    const handlePhone = (text: string, rawText: string) => {
        setPatient({ ...patient, phone: rawText });
        setRawNumberPhone(text);
    }

    return (
        <ScreenContainer>
            <View style={styles.form}>
                <View>
                    <Text style={styles.label} >Paciente:</Text>
                    <TextInput
                        onChangeText={text => setPatient({ ...patient, fullname: text })}
                        value={patient.fullname}
                        placeholder="Requerido"
                        maxLength={200}
                        style={styles.textInput} />
                </View>
                <View>
                    <Text style={styles.label} >Síntomas:</Text>
                    <TextInput
                        onChangeText={text => setPatient({ ...patient, symptoms: text })}
                        value={patient.symptoms}
                        placeholder="Requerido"
                        maxLength={500}
                        style={styles.textInput} />
                </View>
                <View>
                    <Text style={styles.label} >Edad:</Text>
                    <TextInput
                        onChangeText={text => setPatient({ ...patient, age: Number(text) ? Number(text) : 0 })}
                        keyboardType='numeric'
                        value={patient.age.toString()}
                        placeholder="Requerido"
                        maxLength={3}
                        style={styles.textInput} />
                </View>
                <View>
                    <Text style={styles.label} >Teléfono:</Text>
                    <MaskedTextInput
                        mask="(999)-999-9999"
                        onChangeText={(text, rawText) => handlePhone(text, rawText)}
                        value={rawNumberPhone}
                        placeholder="Requerido"
                        maxLength={14}
                        keyboardType={'phone-pad'}
                        style={styles.textInput} />
                </View>
                <View>
                    <TouchableHighlight onPress={handleSubmit} style={styles.submitButton}>
                        <Text style={styles.submitText}>Agregar Cita</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </ScreenContainer>
    );
}

const mapDispatchToProps = {
    addAppointment
}

const stateToProps = (state: any) => ({ appointments: state.appointments })

const styles = StyleSheet.create({
    form: {
        display: 'flex',
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#FFF',
    },
    textInput: {
        color: 'black',
        borderWidth: 1,
        borderRadius: 50,
        paddingRight: 10,
        paddingLeft: 20,
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 3
    },
    label: {
        paddingLeft: 20,
        color: '#808080',
        marginTop: 10
    },
    submitButton: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#001f3d',
        marginVertical: 10,
        borderRadius: 50
    },
    submitText: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default connect(stateToProps, mapDispatchToProps)(AppointmentRegisterForm);