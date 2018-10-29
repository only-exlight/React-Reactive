import { BehaviorSubject, Observable } from 'rxjs';

export class CountService {
    private count: number = 1;
    private count$: BehaviorSubject<number> = new BehaviorSubject(this.count);
    
    get currentCount() : Observable<number> {
        return this.count$.asObservable();
    }

    public plus() {
        this.count++;
        this.count$.next(this.count);
    }

    public minus() {
        this.count--;
        this.count$.next(this.count);
    }
}