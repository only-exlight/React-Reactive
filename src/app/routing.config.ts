import { IRoutingConfig } from '../../lib/@routing/RouterConfig.interface';
import { HeadComponent } from './components/head/index';

export const ROUTING: IRoutingConfig[] = [{
    component: HeadComponent,
    path: '/home',
}];
