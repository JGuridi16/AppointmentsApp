import { ACTION } from "..";
import Appointment from "../../models/Appointment";

export const addAppointment = (item: Appointment) => {
    return {
        type: ACTION.ADD_APPOINTMENT,
        payload: item
    }
}

export const removeAppointment = (id: number) => {
    return {
        type: ACTION.REMOVE_APPOINTMENT,
        payload: id
    }
}