/**
 * @file Class ReactReactive Application
 * @author Kernichnyy Andrey
 * @version 0.0.3
 * @copyright eXlight 2018
 */

import { IRoutingConfig } from '../@routing';
import { IReactAppConfig } from './ReactAppConfig.interface';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
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

    private initServices(serviceDscr: FunctionConstructor[] = []): void {
        // TODO: Если у серивис зависит от себя.
        serviceDscr.forEach((Srv: any) => {
            const srvName = this.getInstanceName(Srv.name);
            if (Srv.prototype.servicesNames) {
                const dpndsList = this.getDependencies(Srv.prototype.servicesNames, serviceDscr);
                this.services[srvName] = new Srv(...dpndsList);
            } else {
                if (!this.services[srvName]) {
                    this.services[srvName] = new Srv();
                }
            }
        });
    }

    private getDependencies(dpndsList: string[] = [], serviceDscr: any[] = []): object[] {
        const instanceList: object[] = [];

        dpndsList.forEach(dpnd => {
            const instName = this.getInstanceName(dpnd);
            if (this.services[instName]) {
                instanceList.push(this.services[instName]);
            } else {
                const SrvInst = serviceDscr.find(srv => srv.name === dpnd);
                if (SrvInst.prototype.servicesNames) {
                    const dpndsList = this.getDependencies(SrvInst.prototype.servicesNames, serviceDscr);
                    this.services[instName] = new SrvInst(...dpndsList);
                    instanceList.push(this.services[instName]);
                } else {
                    this.services[instName] = new SrvInst();
                    instanceList.push(this.services[instName]);
                }
            }
        })

        return instanceList;
    }

    private getInstanceName(className: string) {
        return className.charAt(0).toLowerCase() + className.substr(1);
    }

    private initComponent() {
        this.components.forEach((cmp: Function) =>
            cmp.prototype.services =
            cmp.prototype.serviceNames.map((srv: string) => this.services[srv])
        );
    }
}
