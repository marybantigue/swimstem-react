// import firebase from 'firebase/app';

// import { initializeApp, database } from "firebase/app";
import firebase from "firebase";

// require("dotenv").load();

import dotenv from 'dotenv'
dotenv.config();

var config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
firebase.database.enableLogging(true);
const db = firebase.database();
// initializeApp(config);
// const db = database;
// const db = database();

let teamsRef = db.ref('teams')

// export function apiCall(method, path, data) {
//   return new Promise((resolve, reject) => {
//     return axios[method.toLowerCase()](path, data)
//       .then(res => {
//         return resolve(res.data);
//       })
//       .catch(err => {
//         return reject(err.response.data.error);
//       });
//   });
// }


// export const addTeam = (team) => {
  // teamsRef.push(swimmer)
  // console.log("adding team");
  // let pushedRef = teamsRef.push(team)
  // return { id: pushedRef.getKey(), title: team }
// }


  export function addTeam(team) {
    console.log("adding team");
    // return new Promise((resolve, reject) => {
      let pushedRef = teamsRef.push(team, function(res){
        console.log(res);
      });
      console.log(pushedRef.getKey);
      return { id: pushedRef.getKey() };
      // return axios[method.toLowerCase()](path, data)
      //   .then(res => {
      //     return resolve(res.data);
      //   })
      //   .catch(err => {
      //     return reject(err.response.data.error);
      //   });
    // });
  }