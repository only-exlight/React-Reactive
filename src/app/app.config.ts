import { IReactAppConfig } from '../../lib/@react-app/ReactAppConfig.interface';
import { AppComponent } from './app.component';
import { HeadComponent } from './components/head/index';
import { ApplicationSerrvice } from './services/app.service';
import { MoreService } from './services/more.service';

export const REACT_APP: IReactAppConfig = {
    rootComponent: AppComponent,
    components: [
        HeadComponent,
    ],
    services: [
        ApplicationSerrvice,
        MoreService
    ],
};
