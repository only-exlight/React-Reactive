import { ApplicationSerrvice } from '../services/app.service';
import { Injector } from '../../../lib/@core/index';

@Injector({
    target: MoreService,
    services: [ApplicationSerrvice]
})
export class MoreService {
    private time: number = 0;
    constructor(
        private appSrv: ApplicationSerrvice
    ) { 
        appSrv.workTime.subscribe(time => console.log(time));
    }

    myMethod() {
        console.log('myMethod!');
    }
}