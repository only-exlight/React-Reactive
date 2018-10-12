import { IRoutingConfig } from '../@routing';
import { IReactAppConfig } from './ReactAppConfig.interface';
import { BrowserRouter } from 'react-router-dom';
import { render, } from 'react-dom';
import * as React from 'react';

export class ReactApp {
    private rootNode: HTMLElement;
    private rootComponent: any;
    private services: any = {};
    private routes: IRoutingConfig[];
    private components: any;

    constructor(
        rootNode: string,
        routes: IRoutingConfig[],
        appConfig: IReactAppConfig,
    ) {
        this.rootNode = document.getElementById(rootNode);
        this.rootComponent = appConfig.rootComponent;
        this.routes = routes;
        this.components = appConfig.components;
        this.initServices(appConfig.services);
        this.initComponent();
    }

    public initApp(): void {
        const RootComponent = this.rootComponent;
        render(
            <BrowserRouter>
                <RootComponent routes={this.routes} />
            </BrowserRouter>, this.rootNode
        );
    }

    private initServices(serviceDescriptor: FunctionConstructor[] = []): void {
        serviceDescriptor.forEach((Srv: FunctionConstructor) => {
            const srvName = Srv.name.charAt(0).toLowerCase() + Srv.name.substr(1);
            this.services[srvName] = new Srv();
        });
    }

    private initComponent() {
        this.components.forEach((cmp: Function) => {
            cmp.prototype.services =
                cmp.prototype.serviceNames.map((srv: string) => {
                    return this.services[srv]
                })
        }
        );
    }
}
