import * as React from 'react';
import { generate } from 'rxjs';

export interface IConectToService {
    component: any,
    services: Function[],
}

export function InjectServices(params: IConectToService): any {
    return function () {
        class SComponent extends React.Component {
            public serviceNames: string[];
            public services: any;
            public servicesInstanses: any;
            constructor(props: any) {
                super(props);
                this.servicesInstanses = { };
                serviceNames.forEach((name: string, index: number) => {
                    const srvName = name.charAt(0).toLowerCase() + name.substr(1);
                    this.servicesInstanses[srvName] = this.services[index];
                });
            }

            public render() {
                return (
                    <params.component {...this.servicesInstanses} />
                );
            }
        }
        const serviceNames = params.services.map((service: Function) => 
            service.name.charAt(0).toLowerCase() + service.name.substr(1));
        SComponent.prototype.serviceNames = serviceNames;
        return SComponent;
    }
}