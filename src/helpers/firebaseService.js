import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyC1eV5IYuPTmF4uC_Zx9Xq9xzjmV-fQW3A",
    authDomain: "react-bloodapp.firebaseapp.com",
    databaseURL: "https://react-bloodapp.firebaseio.com",
    storageBucket: "react-bloodapp.appspot.com",
    messagingSenderId: "241367930399"
};
firebase.initializeApp(config);
export class FirebaseService {

    static firebaseTimeStamp = firebase.database['ServerValue'].TIMESTAMP;
    static ref = firebase.database().ref();
    static storage = firebase.storage().ref();
    static auth = firebase.auth();

    // constructor() { }

    static saveMultipath(multipath) {
        return this.ref.update(multipath);
    } // saveMultipath

    static customAuth(user) {
        return this.auth.createUserWithEmailAndPassword(user.email, user.pass);
    } //AuthNewUser

    static customLogin(user) {
        return this.auth.signInWithEmailAndPassword(user.email, user.pass);
    } //loginUser

    static addNewUser(user) {
        return this.ref.child(user).set();
    } //AuthNewUser

    static getPushRef(path) {
        return this.ref.child(path).push();
    }
    // static uploadImageOnStorageBlob(path, blob) {
    //     return new Promise(res => {
    //         this.storage.child(path).put(blob).then((snapshot) => {
    //             console.log('Uploaded a blob or file!');
    //             // The promise will resolve with a Download URL provided by Firebase Storage
    //             res(snapshot.downloadURL);
    //         })
    //     });
    // }

}