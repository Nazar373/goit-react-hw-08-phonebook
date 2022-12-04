import { LoginForm } from '../../components/LoginForm/LoginForm';
import React from 'react';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

const Login = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
    {/* <Helmet><title>Login</title></Helmet> */}
      {!isLoggedIn && <LoginForm />}
    </>
  );
};

export default Login;
