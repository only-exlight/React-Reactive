import { IInjector } from './Inject.interface';

export function Injector(params: IInjector): any {
    const { target, services } = params;
    return function () {
        const servicesNames = services.map((service: Function) => service.name);
        target.prototype.servicesNames = servicesNames;
        return target;
    }

}