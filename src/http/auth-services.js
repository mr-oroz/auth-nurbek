import instance from "./settings";


const signInServices = data => {
  return instance.post('/auth/token/login/',data)
}

const registerServices = data => {
  return instance.post('/auth/users/', data)
}
const getMe = () => {
  return instance.get('/auth/users/me/')
}

export const authServices = {
  signInServices,
  registerServices,
  getMe
}