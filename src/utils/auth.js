export const BASE_URL = "https://register.nomoreparties.co";

export const signup = (email, password) => {  //register yerine singup var
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


export const signin = (email, password) => {   // login yerine signin
  return fetch(`${BASE_URL}/signin`, {  //BASE_URL değişecek başka const ile  neden src/components/login degil bal
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if(data) {
          localStorage.setItem("token", data.token);   //"token" = "jwt"
          localStorage.setItem("email", email);
          return data;
        } else {
          return
        }
      })
      .catch((err) => console.log(err));
}

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    Authorization:  `Bearer ${localStorage.getItem(token) }`
  })
}

// export const checkToken = (token) => {
//   return fetch(`${BASE_URL}/users/me`, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   })
//   .then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     }
//   })
//   .then((res) => {
//     return res;
//   });
// }
