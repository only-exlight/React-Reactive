import * as React from 'react';
import { ApplicationSerrvice } from '../../services/app.service';
import { ConectToService, IConectToService } from '../../../../lib/@core';
import { APP } from '../../../index';

interface IHeadComponentState {
    time: number;
}

interface IHeadComponentProps {
    service: ApplicationSerrvice
}

@ConectToService({
    component: HeadComponent,
    service: 'ApplicationService',
    application: APP
})

export class HeadComponent extends React.Component<IHeadComponentProps> {
    private timeService: ApplicationSerrvice;
    public state: IHeadComponentState;

    constructor(props: any) {
        super(props);
        this.timeService = new ApplicationSerrvice();
        this.state = {
            time: 0
        };
    }

    componentDidMount() {
        this.props.service.workTime.subscribe(time => this.setState({ time: time}));
        // this.timeService.workTime.subscribe(time => this.setState({ time: time }))
    }

    public render() {
        return (
            <div>
                <h1>Head</h1>
                <span>Page time:</span>
                <span>{this.state.time}</span>
            </div>
        );
    }
}
