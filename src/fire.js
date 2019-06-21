import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDNFzomSnKq8yfM0QU13p-SpgdpNyUXqVI",
    authDomain: "simple-react-app-520c2.firebaseapp.com",
    databaseURL: "https://simple-react-app-520c2.firebaseio.com",
    projectId: "simple-react-app-520c2",
    storageBucket: "",
    messagingSenderId: "165381353945",
    appId: "1:165381353945:web:d12a33580a894c57"
};

var fire = firebase.initializeApp(config);

export default fire;