import { IServiceDescriptor } from './index';

export interface IReactAppConfig {
    rootComponent: any;
    components?: any;
    services?: IServiceDescriptor[];
}
