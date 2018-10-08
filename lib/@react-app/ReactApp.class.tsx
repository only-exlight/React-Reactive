import { IRoutingConfig } from '../@routing';
import { IServiceDescriptor } from './index';
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
        console.log(this.components);
        render(
            <BrowserRouter>
                <RootComponent routes={this.routes} />
            </BrowserRouter>, this.rootNode
        );
    }

    private initServices(serviceDescriptor: IServiceDescriptor[] = []): void {
        serviceDescriptor.forEach((descriptor: IServiceDescriptor) => {
            this.services[descriptor.name] = new descriptor.constructor();
        });
    }

    private initComponent() {
        this.components.forEach((c: Function) => {
            c.prototype.service = this.services[c.prototype.service];
        });
    }
}