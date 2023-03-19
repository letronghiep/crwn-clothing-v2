import React from 'react'
import { signInWithGooglePopup, createDocumentFromAuth } from '../../utils/firebase/firebase'

function SignIn() {
  const signInWithPopup = async () => {
    const { user } = await signInWithGooglePopup();
   createDocumentFromAuth(user)
  }

  return (
    <div>
      <h1>Hello </h1>
      <button onClick={signInWithPopup}>Sign In With Google</button>

    </div>
  )
}

export default SignIn