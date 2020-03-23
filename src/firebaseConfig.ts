import * as firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyAiCiJ0wMNpiC4PUmLjmZaNBZwGk-OFPG8",
    authDomain: "help-fb49e.firebaseapp.com",
    databaseURL: "https://help-fb49e.firebaseio.com",
    projectId: "help-fb49e",
    storageBucket: "help-fb49e.appspot.com",
    messagingSenderId: "254999357169",
    appId: "1:254999357169:web:b452a2a9c334b639586b50"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var provider = new firebase.auth.GoogleAuthProvider();
  export async function loginUser(){
    try {  
    const res = await firebase.auth().signInWithRedirect(provider)
        return res
    } catch(error) {
        console.log(error)
        return false
    }
  }

  export function getCurrentUser(){
      return new Promise((resolve, reject) => {
          const unsubscribe = firebase.auth().onAuthStateChanged(function(user) {
              if (user) {
                  resolve(user)
              } else{
                  resolve(null)
              }
              unsubscribe()
          })
      })
    };
