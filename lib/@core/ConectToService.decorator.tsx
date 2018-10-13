/**
 * @file Decorator function for React-Reactive components
 * @author Kernichnyy Andrey
 * @version 0.0.2
 * @copyright eXlight 2018
 */

import * as React from 'react';
import { IInjector } from './Inject.interface';

export function InjectServices(params: IInjector): any {
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
                    <params.target {...this.servicesInstanses} />
                );
            }
        }
        const serviceNames = params.services.map((service: Function) => 
            service.name.charAt(0).toLowerCase() + service.name.substr(1));
        SComponent.prototype.serviceNames = serviceNames;
        return SComponent;
    }
}