import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDgfEgFV4f0qaxU9QRkRXEs4x3wKPJC7QQ',
  authDomain: 'authenticationapp-8d24d.firebaseapp.com',
  projectId: 'authenticationapp-8d24d',
  storageBucket: 'authenticationapp-8d24d.appspot.com',
  messagingSenderId: '958659760706',
  appId: '1:958659760706:web:28d49b94a2b568bc4753db',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
