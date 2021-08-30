import Appointment from '../models/Appointment';
import { createStore } from 'redux';
import { Guid } from 'js-guid';

export enum ACTION {
    ADD_APPOINTMENT,
    REMOVE_APPOINTMENT
}

type Action = {
    type: ACTION;
    payload: any;
}

const initialState: any= {
    appointments: [
        { _id: Guid.newGuid(), patient: { _id: Guid.newGuid(), fullname: 'Pedro', age: 19, symptoms: 'Flu and cough', phone: '8091230000' } },
        { _id: Guid.newGuid(), patient: { _id: Guid.newGuid(), fullname: 'Juan', age: 24, symptoms: 'COVID', phone: '8091230000' } },
        { _id: Guid.newGuid(), patient: { _id: Guid.newGuid(), fullname: 'Maria', age: 19, symptoms: 'Cold Common', phone: '8091230000' } }
    ] as Appointment[],
    user: {}
};

export const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ACTION.ADD_APPOINTMENT:
            return {
                ...state,
                appointments: [...state.appointments, action.payload]
            };
        
        case ACTION.REMOVE_APPOINTMENT:
            return {
                ...state,
                appointments: state.appointments.filter((item: Appointment) => item._id !== action.payload)
            };

        default:
            return state;
    }
};

export const store = createStore(reducer);