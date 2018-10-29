import * as React from 'react';
import { ApplicationSerrvice } from '../../services/app.service';
import { CountService } from '../../services/count.service';
import { DelayService } from '../../services/delay.service';
import { InjectServices } from '../../../../lib/@core';
import { Subscription } from 'rxjs';

interface IHeadComponentState {
    time: number;
    count: number;
    delay: number;
}

interface IHeadComponentProps {
    applicationSerrvice: ApplicationSerrvice;
    countService: CountService;
    delayService: DelayService;
}

/**
    From Angular realisation
    constructor(
        private appSrv: ApplicationSerrvice
    ) { }
 */

@InjectServices({
    target: HeadComponent,
    services: [ApplicationSerrvice, CountService, DelayService ]
})

export class HeadComponent extends React.Component<IHeadComponentProps> {
    public state: IHeadComponentState;
    private subscriptions: Subscription[] = [];
    constructor(props: any) {
        super(props);
        this.state = {
            time: null,
            count: null,
            delay: null
        };
    }

    componentDidMount() {
        this.subscriptions.push(
            this.props.applicationSerrvice.workTime.subscribe(time => this.setState({ time: time }))
        );
        this.subscriptions.push(
            this.props.countService.currentCount.subscribe(count => this.setState({ count: count }))
        );
        this.subscriptions.push(
            this.props.delayService.delayTime.subscribe(d => this.setState({ delay: d }))
        );
    }

    componentWillUnmount() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    public render() {
        return (
            <div>
                <h1>Дом</h1>
                <span>{`Время страницы: ${this.state.time}`}</span>
                <hr/>
                <div>{`Множитель ${this.state.count}`}</div>
                <div>
                    <button onClick={() => this.props.countService.plus()}>Больше</button>
                    <button onClick={() => this.props.countService.minus()}>Меньше</button>
                </div>
                <div>
                    <span>Задержка: </span>
                    <input type="number" min={0} max={10000} step={100} value={this.state.delay}
                        onChange={(e) => this.props.delayService.setDelay(Number(e.target.value))} />
                </div>
            </div>
        );
    }
}
