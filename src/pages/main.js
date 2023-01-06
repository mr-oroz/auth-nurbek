import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Register from './auth/register';
import SignIn from './auth/sign-in';
import Home from './home';
import { useDispatch, useSelector } from 'react-redux';
import { getMeReduxServices } from '../redux/services';
const Main = () => {
  const { user } = useSelector(state => state.authReducer);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMeReduxServices())
  }, [])

  return (
    <div className='main'>
      <Routes>
        <Route path="/" element={user.username ? <Home username={user.username} /> : <Register />} />
        <Route exact path="/auth/sign-in" element={user.username  ? <Navigate to="/" replace /> : <SignIn />} />
        <Route exact path="/auth/register" element={user.username  ? <Navigate to="/" replace /> : <Register />} />
      </Routes>
    </div>
  );
};

export default Main;