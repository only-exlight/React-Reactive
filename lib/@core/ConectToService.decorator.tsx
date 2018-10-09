import * as React from 'react';

export interface IConectToService {
    component: any,
    service: Function,
}

export function ConectToService(params: IConectToService): any {
    return function InjectService () {
        class SComponent extends React.Component {
            public service: any;
            constructor(props: any) {
                super(props);
                this.service = SComponent.prototype.service;
            }

            render() {
                return (
                    <params.component service={this.service} />
                );
            }
        }
        SComponent.prototype.service = params.service.name;
        return SComponent;
    }
}