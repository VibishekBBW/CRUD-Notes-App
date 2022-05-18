// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import conf from '../../auth_config.json';


export const environment = {
  production: false,
  firebaseConfig: {
  apiKey: "AIzaSyC8kCuhPYcQJn2Z-NPxjlxqFa3MTOjn2go",
  authDomain: "notes-app-3db03.firebaseapp.com",
  projectId: "notes-app-3db03",
  storageBucket: "notes-app-3db03.appspot.com",
  messagingSenderId: "742089729018",
  appId: "1:742089729018:web:c7d99b6b2edecf32ceba43"
  },
  auth: {
    domain: conf.domain,
    clientId: conf.clientId,
    redirectUri: window.location.origin
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Initialize Firebase

