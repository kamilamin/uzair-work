import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyByzDHgb1HA5NmmszlEXXQmR1DxaxJT_yw",
    authDomain: "business-portal-c5066.firebaseapp.com",
    databaseURL: "https://business-portal-c5066.firebaseio.com",
    projectId: "business-portal-c5066",
    storageBucket: "business-portal-c5066.appspot.com",
    messagingSenderId: "65159658490"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals')