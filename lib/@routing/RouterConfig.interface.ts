import { StatelessComponent, ComponentClass } from 'react';

export interface IRoutingConfig {
    path: string;
    component: StatelessComponent | ComponentClass;
    children?: IRoutingConfig[];
}
