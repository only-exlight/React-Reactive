/**
 * @file Decorator function for React-Reactive services
 * @author Kernichnyy Andrey
 * @version 0.0.2
 * @copyright eXlight 2018
 */
import { IInjector } from './Inject.interface';

export function Injector(params: IInjector): any {
    const { target, services } = params;
    return function () {
        const servicesNames = services.map((service: Function) => service.name);
        target.prototype.servicesNames = servicesNames;
        return target;
    }

}