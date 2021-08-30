import { Guid } from "js-guid";
import Patient from "./Patient";

export default class Appointment {
    public _id: Guid | null;
    public patient: Patient | null;
    public patientId: string | null;

    constructor(){
        this._id = null;
        this.patient = new Patient();
        this.patientId = null;
    }
}