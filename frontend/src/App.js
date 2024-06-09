import React, { useEffect } from 'react'
import Login from "./componenets/auth/Login";
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Quora from './componenets/Quora';
import { login, selectUser } from './feature/userSlice';
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const dispatch = useDispatch();
  const user=useSelector(selectUser)

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(
          login({
            userName: authUser.displayName,
            photo: authUser.photoURL,
            email: authUser.email,
            uid: authUser.uid,
          })
        );
        console.log("AuthUser", authUser);
      }
    });
  }, [dispatch]);
  return (
    <div className="App">
    {user ?<Quora/>:<Login/>}  
    </div>
  );
}

export default App;
