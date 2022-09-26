export const BASE_URL = "https://register.nomoreparties.co";

export const signup = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      if (response.status === 201) {
        return response.json();
      }
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
 };


export const signin = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {  //BASE_URL değişecek başka const ile  neden src/components/login degil bal
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((token) => {
      if(token) {
          localStorage.setItem('token', token);   //"token" = "jwt"
          return token;
        } else {
          return
        }
      })
      .catch((err) => console.log(err));
}

export const checkToken = () => {
  return fetch(`${BASE_URL}/users/me`, {
    Authorization:  `Bearer ${localStorage.getItem('token') }`
  })
}

