import {initializeApp} from "firebase/app"
import {getFirestore, collection} from "firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
	apiKey: "AIzaSyD7caSfwDpQJ_wvxZsfHctjvOt7OiBGzFw",
	authDomain: "fir-react-chatroom-3f1ce.firebaseapp.com",
	projectId: "fir-react-chatroom-3f1ce",
	storageBucket: "fir-react-chatroom-3f1ce.appspot.com",
	messagingSenderId: "823782518019",
	appId: "1:823782518019:web:fe79c3dbe2d5ef83b78d36"
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore()
  export const userColRef = collection(db, "users")
  export const auth = getAuth(app)
