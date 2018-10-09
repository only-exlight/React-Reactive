import { ReactApp } from '../lib/@react-app/ReactApp.class';
import { REACT_APP } from './app/app.config';
import { ROUTING } from './app/routing.config';

new ReactApp('root', ROUTING, REACT_APP).initApp();