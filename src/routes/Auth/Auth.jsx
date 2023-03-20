import SignInForm from '../../components/SignInForm/SignInForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import './auth.styles.scss'

function Auth() {
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

  return (
    <div className='auth-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Auth