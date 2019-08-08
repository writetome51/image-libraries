import { Stitch } from 'mongodb-stitch-browser-sdk';

import { super_secret } from '../../../.secret';

// TODO: Add your Stitch app's App ID
const APP_ID = 'serverless-functions-rhfqi';

// TODO: Initialize the app client
const app = Stitch.hasAppClient(APP_ID) ? Stitch.getAppClient(APP_ID) : Stitch.initializeAppClient(APP_ID);

export { app };


console.log(super_secret);
