<<<<<<< HEAD
const BASE_URL = 'http://10.58.52.89:3000';

export const API = {
  user: `${BASE_URL}/user`,
  items: `${BASE_URL}/items`,
=======
export const API = {
  user: `${process.env.REACT_APP_BASE_URL}/user`,
  items: `${process.env.REACT_APP_BASE_URL}/items`,
  cart: `${process.env.REACT_APP_BASE_URL}/carts`,
  signin: `${process.env.REACT_APP_BASE_URL}/signin`,
  signup: `${process.env.REACT_APP_BASE_URL}/signup`,
>>>>>>> main
};
