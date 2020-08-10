// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyBAEWq9IE_d7cKpES4OM55DP_fh1vZtV_Q',
    authDomain: 'news-angular-app.firebaseapp.com',
    databaseURL: 'https://news-angular-app.firebaseio.com',
    projectId: 'news-angular-app',
    storageBucket: 'news-angular-app.appspot.com',
    messagingSenderId: '235763467450',
    appId: '1:235763467450:web:45787ce54d520209342e83',
  },
  newsApiKey: '6ce4bc6d03364cfb808d26a409e34f1a'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
