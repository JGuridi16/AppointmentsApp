export default class Appointment {
    public _id: number | undefined;
    public patient: string = '';
    public symptoms: string = '';

    constructor(){
        this._id = undefined;
    }
}