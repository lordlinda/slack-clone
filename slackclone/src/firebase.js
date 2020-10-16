import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCul3dkfJ6snkqTyx1qsyleRieyBAilcgQ",
    authDomain: "slack-clone-1e4ae.firebaseapp.com",
    databaseURL: "https://slack-clone-1e4ae.firebaseio.com",
    projectId: "slack-clone-1e4ae",
    storageBucket: "slack-clone-1e4ae.appspot.com",
    messagingSenderId: "908452539267",
    appId: "1:908452539267:web:cf138939413868dfdae4b6",
    measurementId: "G-0N78HMCG6G"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider };
export default db;