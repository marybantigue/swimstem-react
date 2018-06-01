import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
// firebase.database.enableLogging(true);
const db = firebase.database();

let teamsRef = db.ref('teams');

export function addTeam(team) {
  console.log('adding team');
  let pushedRef = teamsRef.push(team, function(res) {
    // console.log(res);
  });
  // console.log(pushedRef.getKey);
  return { id: pushedRef.getKey() };
}
