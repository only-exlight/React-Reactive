import * as React from 'react';
import { ReactApp } from '../@react-app/ReactApp.class';

export interface IConectToService {
    component: any,
    service: string,
    application: ReactApp
}

export function ConectToService(params: IConectToService): any {
    return function InjectService () {
        class SComponent extends React.Component {
            public decoreServece: boolean;
            public service: any;
            constructor(props: any) {
                super(props);
                this.service = SComponent.prototype.service;
                this.decoreServece = true;
            }

            render() {
                return (
                    <params.component service={this.service} />
                );
            }
        }

        SComponent.prototype.decoreServece = true;
        SComponent.prototype.service = params.service;

        return SComponent;
    }
}