import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { FieldValue, SnapshotMetadata, arrayUnion } from 'firebase/firestore';
import { setAnalyticsCollectionEnabled } from 'firebase/analytics';
import { json } from 'react-router';

const firebaseConfig = {
  apiKey: "AIzaSyBQnfzTDLkqrOCjSZBNbzTfaXw6rCQbvUE",
  authDomain: "todo-list-db-41c62.firebaseapp.com",
  projectId: "todo-list-db-41c62",
  storageBucket: "todo-list-db-41c62.appspot.com",
  messagingSenderId: "253593632604",
  appId: "1:253593632604:web:aca9702b469d1b94358b99",
  measurementId: "G-2WCLJXEPXG"
};

// export const createUserProfileDocument = async (userAuth, ...additionalData) => {
//   if (!userAuth) {
//     return;
//   } else {
//     const userRef = firestore.doc(`users/${userAuth.uid}`);

//     const snapShot = await userRef.get();

//     if (!snapShot.exists) {
//       const { displayName, email } = userAuth;
//       const craetedAt = new Date();

//       try {
//         await userRef.set({
//           displayName,
//           email,
//           craetedAt,
//           ...additionalData
//         })
//       } catch (error) {
//         console.log('error creating user', error.message);
//       }
//     }

//     return userRef;
//   }


// }



export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return
  } else {

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    
    const userRefCollectionPosts =await userRef.collection('Posts');
  
    const snapShot = await userRef.get();

    console.log(snapShot.exists)
  
    if (!snapShot.exists) {
      const { displayName, email} = userAuth
      const createdAt = new Date();
      const posts = [
        {
          task: 'go to the gym ',
          date: new Date()
        }
      ]
  
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          posts,
          ...additionalData
        })
        userRefCollectionPosts.doc('my tasks');
        console.log('created')
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef
  }
}

export const addUserToFirestore = async (id, newtask) => {
  const userRef = firestore.doc(`users/${id}`);
  const userRefCollectionPosts = userRef.collection('Posts').doc('my tasks')
  const snapshot = await userRefCollectionPosts.get()

  if (!snapshot.exists) {
    userRefCollectionPosts.set({})
  }
  const task = newtask.plan
  const date = newtask.dates

  await userRefCollectionPosts.update({
    newTasks:arrayUnion({
      task,
      date
    })
    })

  // const theTasks = await userRefCollectionPosts.get()

  // const data = theTasks.d
      // const userRef = firestore.doc(`users/${id}`)
  
      // // const userRefCollectionPosts = userRef.collection('Posts');

      // const snapShot = await userRef.get();

      // console.log(snapShot.exists);

  return userRefCollectionPosts
}

Firebase.initializeApp(firebaseConfig);

export const auth = Firebase.auth();
export const firestore = Firebase.firestore();

const provider = new Firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default Firebase;