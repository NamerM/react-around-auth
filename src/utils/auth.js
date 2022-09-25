const BASE_URL = "https://register.nomoreparties.co";

export const signup = (username, password, email) => {
  return fetch(`${BASE_URL}/src/utils/auth/local`, {
    method: "POST",
    headers: {
	  "Accept": "application/json",
	  "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password, email }),
  })
    .then((response) => {
	try {
	 if (response.status === 200) {
	   return response.json();
	  }
	 } catch (e) { return e;
	 }
    })
    .catch((err) => console.log(err));
 };


export const signin = (identifier, password) => {
  return fetch(`${BASE_URL}/src/utils/auth/local`, {  //BASE_URL değişecek başka const ile
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ identifier, password }),
  }).then((response) => response.json())
  .then((data) => {
    if(data.jwt) {
        localStorage.setItem("token", token);   //"token" = "jwt"
        return data;
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

