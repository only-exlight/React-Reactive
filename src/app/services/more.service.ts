import { ApplicationSerrvice } from '../services/app.service';

export class MoreService {
    private time: number;
    constructor(
        private appSrv : ApplicationSerrvice
    ) {
        
    }

    myMethod() {
        this.appSrv.workTime.subscribe(e => this.time = e);
        console.log(this.time);
    }
}