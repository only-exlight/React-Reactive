import * as React from 'react';
import { ApplicationSerrvice } from '../../services/app.service';
import { InjectServices } from '../../../../lib/@core';

interface IHeadComponentState {
    time: number;
}

interface IHeadComponentProps {
    service: ApplicationSerrvice
}

/**
    From Angular realisation
    constructor(
        private appSrv: ApplicationSerrvice
    ) { }
 */

@InjectServices({
    component: HeadComponent,
    service: ApplicationSerrvice
})

export class HeadComponent extends React.Component<IHeadComponentProps> {
    public state: IHeadComponentState;

    constructor(props: any) {
        super(props);
        this.state = {
            time: 0
        };
    }

    componentDidMount() {
        this.props.service.workTime.subscribe(time => this.setState({ time: time}));
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
