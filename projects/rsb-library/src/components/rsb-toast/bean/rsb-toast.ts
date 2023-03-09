export class RsbToast {
    title:string;
    message:string;
    type:string;
    constructor(title?:string, message?:string, type?:string){
        this.title = title;
        this.message = message;
        this.type = type;
    }
}
