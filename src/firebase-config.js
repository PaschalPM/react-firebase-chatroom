import {initializeApp} from "firebase/app"
import {getFirestore, collection} from "firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
	apiKey: "AIzaSyAewXtr5QKzkIwVLIn1Y4S1IJqYfyzVqU4",
	authDomain: "fir-react-chatroom-e5e59.firebaseapp.com",
	projectId: "fir-react-chatroom-e5e59",
	storageBucket: "fir-react-chatroom-e5e59.appspot.com",
	messagingSenderId: "808004944224",
	appId: "1:808004944224:web:7eaddf48ba1b8c776c1e05"
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore()
  export const userColRef = collection(db, "users")
  export const auth = getAuth(app)
