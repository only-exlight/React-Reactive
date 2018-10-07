import { IReactAppConfig } from '../../lib/@react-app/ReactAppConfig.interface';
import { AppComponent } from './app.component';
import { HeadComponent } from './components/head/index';
import { ApplicationSerrvice } from './services/app.service';

export const REACT_APP: IReactAppConfig = {
    components: [
        HeadComponent,
    ],
    rootComponent: AppComponent,
    services: [{
        name: 'ApplicationService',
        constructor: ApplicationSerrvice
    },{
        name: 'MoreService',
        constructor: ApplicationSerrvice
    }],
};
