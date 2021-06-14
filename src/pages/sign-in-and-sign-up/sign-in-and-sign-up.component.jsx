import React from 'react';

import SignIn from '../../components/sign-in/signin.component';
import SignUp from '../../components/sign-up/signup.component';

import './sign-in-and-sign-up.styles.jsx';

import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;