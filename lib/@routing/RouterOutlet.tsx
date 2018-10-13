/**
 * @file Decorator function for React-Reactive components
 * @author Kernichnyy Andrey
 * @version 0.0.1
 * @copyright eXlight 2018
 */

import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { IRoutingConfig } from '.';

export interface IRouterOutlet {
    config: IRoutingConfig[];
};

export class RouterOutlet extends React.Component {
    public props: IRouterOutlet;
    
    public render() {
        return (
            <Switch>
                {this.generateRoutes()}
            </Switch>
        );
    }

    private generateRoutes() {
        const { config } = this.props;
        return (
            config.map((route: IRoutingConfig) =>
                <Route path={route.path} component={route.component}/>)
        );
    }
}