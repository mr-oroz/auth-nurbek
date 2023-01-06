import React, { useState } from 'react';
import MyBottons from '../../components/my-bottons';
import MyInputs from '../../components/my-inputs';
import { authServices } from '../../http/auth-services';
import './auth.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMeReduxServices } from '../../redux/services';
const initialState = {
  username: '',
  password: ''
}
const SignIn = () => {
  const [form, setForm] = useState(initialState);
  const {loading} = useSelector(state => state.authReducer)
  console.log(loading)
  const dispatch = useDispatch()
  const handlerChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handlerSubmit = async (e) => {
    e.preventDefault();
    setForm(initialState);
    console.log({ ...form })
    const data = await authServices.signInServices({...form});
    dispatch(getMeReduxServices())
    console.log(data)
    localStorage.setItem('nurbek-token', JSON.stringify(data.data.auth_token))
  }
  return (
    <div className='auth'>
      <form onSubmit={handlerSubmit} className='form'>
        <h1>Sign-In</h1>
        <div className="form-controls">
          <MyInputs
            value={form.username}
            onChange={handlerChange}
            type="text"
            name="username"
            placeholder={'username'} />
          <MyInputs
            value={form.password}
            onChange={handlerChange}
            type="password"
            name="password"
            placeholder={'password'} />
          <MyBottons>{loading ? 'Загрузка...' : 'Войти'}</MyBottons>
          <Link to='/auth/register'>нет аккаунта?</Link>
        </div>
      </form>
    </div>

  );
};

export default SignIn;