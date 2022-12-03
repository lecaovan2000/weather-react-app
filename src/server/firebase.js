// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAY73Xth1oqguI3eKRkl-fi4NndJBG_xS8',
    authDomain: 'hung-iot-dhcnhcm.firebaseapp.com',
    databaseURL: 'https://hung-iot-dhcnhcm-default-rtdb.firebaseio.com',
    projectId: 'hung-iot-dhcnhcm',
    storageBucket: 'hung-iot-dhcnhcm.appspot.com',
    messagingSenderId: '310297882520',
    appId: '1:310297882520:web:227f29ca679c8fc5d3c5ed',
    measurementId: 'G-71Z0HCNFRW',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const serverApi = getDatabase(app);
export default serverApi;
