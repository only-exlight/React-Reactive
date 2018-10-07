import { BehaviorSubject, Observable } from 'rxjs';

export class ApplicationSerrvice {
    private currentTime: number = 0;
    private time: BehaviorSubject<number>;
    constructor() {
        this.time = new BehaviorSubject(0);
        this.startTimer();
    }

    get workTime(): Observable<number> {
        return this.time.asObservable();
    }

    public startTimer(): void {
        setInterval(() => { 
            this.currentTime++;
            this.time.next(this.currentTime);
        }, 1000);
    }
}
