/* eslint-disable prettier/prettier */

// ERROR
// [2023-08-09T15:43:52.136Z]  @firebase/firestore: Firestore (10.1.0): GrpcConnection RPC 'Listen'
// stream 0x57fbef09 error. Code: 3 Message: 3 INVALID_ARGUMENT: Invalid resource field value in the request.

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

export const tes = () => {
  console.log({ firebaseConfig });
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addData = async (quote: string, author: string): Promise<void> => {
  try {
    const docRef = await addDoc(collection(db, 'quotes'), {
      quote,
      author,
      timestamp: new Date(),
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export const getData = async (): Promise<object> => {
  const querySnapshot = await getDocs(collection(db, 'quotes'));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
  return querySnapshot;
};
