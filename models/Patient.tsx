import { Guid } from "js-guid";

export default class Patient {
    public _id: Guid | null;
    public fullname: string = '';
    public age: number = 0;
    public symptoms: string = ''
    public phone: string = '';

    constructor(){
        this._id = null;
    }
}