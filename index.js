/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { Sentry } from 'react-native-sentry';
Sentry.config('https://973a93feabdb43e693886599e6871ded@sentry.io/1378663').install();

AppRegistry.registerComponent(appName, () => App);
