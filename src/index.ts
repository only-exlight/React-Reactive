import { ReactApp } from '../lib/@react-app/ReactApp.class';
import { REACT_APP } from './app/app.config';
import { ROUTING } from './app/routing.config';

export const APP = new ReactApp('root', ROUTING, REACT_APP);
console.log(APP);
APP.initApp();