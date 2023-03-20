import { getRedirectResult } from 'firebase/auth'
import React, { useEffect } from 'react'
import Button from '../../components/Button/Button';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { signInWithGooglePopup, createDocumentFromAuth } from '../../utils/firebase/firebase'

function SignIn() {
  // Signin with redirect
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const useRefDoc = await createDocumentFromAuth(response.user)
  //     }

  //   }
  //   return () => {
  //     fetchData()
  //   }
  // }, [])
  const signInWithPopup = async () => {
    const { user } = await signInWithGooglePopup();
    createDocumentFromAuth(user)
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <SignUpForm />
      <Button onClick={signInWithPopup} buttonType="google" children="Sign in with Google" />
    </div>
  )
}

export default SignIn