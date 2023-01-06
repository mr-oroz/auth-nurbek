import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../redux/actions/auth-action';
const Home = ({username}) => {
  const dispatach = useDispatch()
  
  const logout = () => {
    dispatach(logoutAction())
    localStorage.removeItem('nurbek-token')
  }

  return (
    <div className='home'>
      <h1>hello {username}</h1>
      <button onClick={logout}>выйти</button>
    </div>
  );
};

export default Home;