/**
 * @file Decorator function for React-Reactive components
 * @author Kernichnyy Andrey
 * @version 0.0.1
 * @copyright eXlight 2018
 */

import { StatelessComponent, ComponentClass } from 'react';

export interface IRoutingConfig {
    path: string;
    component: StatelessComponent | ComponentClass;
    children?: IRoutingConfig[];
}
