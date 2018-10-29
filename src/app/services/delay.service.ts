import { BehaviorSubject, Observable } from 'rxjs';

export class DelayService {
    private delay: number = 1000;
    private delay$: BehaviorSubject<number> = new BehaviorSubject(this.delay);

    constructor () { }

    get delayTime(): Observable<number> {
        return this.delay$.asObservable();
    }

    setDelay(d: number) {
        this.delay = d;
        this.delay$.next(this.delay);
    }

}