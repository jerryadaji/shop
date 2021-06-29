import React from 'react';
import {auth, provider} from '../../firebase';
import {useDispatch, useSelector} from 'react-redux';
import { setActiveUser, setUserLogoutState } from '../../redux';

import Title from "../Title";
import Button from "../buttons/Button";

const Account = () => {
  // Initiaize Dispatch
  const dispatch = useDispatch();

  // Check User
  auth.onAuthStateChanged(user => {
    if(user){
      dispatch(setActiveUser({
        userName: user.displayName,
        userEmail: user.email
      }))
    }
  })

  // Fetch User data from store
  const userName = useSelector(state => state.user.userName);
  const userEmail = useSelector(state => state.user.userEmail);

  const handleSignIn = () => {
    auth.signInWithPopup(provider)
    .then(res => {
      dispatch(setActiveUser({
        userName: res.user.displayName,
        userEmail: res.user.email
      }))
    })
    .catch(error => console.log(error.message))
  };
  const handleSignOut = () => {
    auth.signOut()
    .then(() => dispatch(setUserLogoutState()))
    .catch(error => console.log(error.message))
  };

  return (
    <section className="container">
      <Title>My Account</Title>
      {userName && 
        <>
          <p className="mb-1">{userName}</p>
          <p className="mb-2">{userEmail}</p>
          <Button
            type="secondary"
            title="Sign Out"
            className="mr-3"
            onClick={handleSignOut}
          />
        </>
      }
      {!userName && 
        <Button
          type="primary"
          title="Sign In"
          className="mr-3"
          onClick={handleSignIn}
        />
      }
    </section>
  )
}

export default Account;