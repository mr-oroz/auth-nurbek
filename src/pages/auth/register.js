import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MyBottons from '../../components/my-bottons';
import MyInputs from '../../components/my-inputs';
import { authServices } from '../../http/auth-services';
import './auth.css'
import { useSelector } from 'react-redux';

const initialState = {
  username: '',
  password: '',
  email: ''
}
const Register = () => {
  const [form, setForm] = useState(initialState);
  const { loading } = useSelector(state => state.authReducer)

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
    const data = await authServices.registerServices({ ...form });
    console.log(data)
  }
  return (
    <div className='auth'>
      <form onSubmit={handlerSubmit} className='form'>
        <h1>Register</h1>
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
          <MyInputs
            value={form.email}
            onChange={handlerChange}
            type="text"
            name="email"
            placeholder={'email'} />
          <MyBottons>{loading ? 'Загрузка...' : 'Регистрация'}</MyBottons>
          <Link to='/auth/sign-in'>есть аккаунт?</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;