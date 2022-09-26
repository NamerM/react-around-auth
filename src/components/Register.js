import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../src/contexts/CurrentUserContext'
import { Link, useHistory } from "react-router-dom";
// import "./styles/Register.css";
import * as auth from "../utils/auth";


function Register({ isLoading, onRegisterUser, handleSubmit, buttonText = "Sign Up", }) {
  const currentUser = React.useContext(CurrentUserContext)

  const [email, setEmail] = useState('');
  const [password , setPassword] = useState('');

   function handleSubmit(e) {
    e.preventDefault();

    onRegisterUser({
      email,
      password,
      });
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }


	return (
    <div className="reg-form">
      <form className="reg-form__field" onSubmit={handleSubmit}>
        <div className="reg-form__wrapper">
          <h3 className="reg-form__title">Sign Up</h3>
          <label className="reg-form__input">
            <input className="reg-form__textfield" name="email" type="email" placeholder="Email" onChange={handleEmailChange} required />
          </label>
          <label className="reg-form__input">
            <input className="popup__input popup__input_type_signup" name="password" type="password" placeholder="Password" onChange={handlePasswordChange}  required/>
          </label>
        </div>
        <div className="reg-form__wrapper">
          <button className="reg-form__button" type="submit">
            Sign Up
          </button>
          <p className="reg-form__text">
            Already a member? {' '}
            <Link className="reg-form__link" to="/signin">
              Log in here!
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;


// class Register extends React.Component {
//   constructor(props) {
// 	super(props);
// 	this.state = {
// 	  email: "",
// 	  password: "",
// 	  confirmPassword: "", 	};
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this); }
//   handleChange(e) {
// 	const { name, value } = e.target;
// 	this.setState({
// 	  [name]: value,
// 	});   }
//   handleSubmit(e) {
//     e.preventDefault();
// 	if (this.state.password === this.state.confirmPassword) {
// 	  let { password, email } =  this.state;
// 	  auth.signup( password, email).then((res) => {
// 	 if (res) {
// 	     this.setState({ message: "" }, () => {
// 	        this.props.history.push( "/login" ); 	 });
// 	 } else {
// 	   this.setState({ message: "Something went wrong", });
// 	}
//       });
//     }
// }

// render() {
// 	return (
// 	  <div className="register">
// 		<Logo title={"CryptoDucks"} />
// 		<p className="register__welcome">Please register.</p>
// 		<form className="register__form">
// 		  <label>Username:</label>
// 		  <input name="username" type="text" value={this.state.username} onChange={this.handleChange} />
// 		  <label>Email:</label>
// 		  <input name="email" type="email" value={this.state.email} onChange={this.handleChange} />
// 		  <label>Password:</label>
// 		  <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
// 		  <label>Confirm password:</label>
// 		  <input name="confirmPassword" type="password" value={this.state.confirmPassword} onChange={this.handleChange} />
// 		</form>
// 	  	<div className="register__button-container">
// 		  <button oSubmit={this.handleSubmit} className="register__link"> Sign up </button>
// 	    	</div>
// 	    	<div className="register__signin"> <p>Already a member?</p> <Link to="login" className="register__login-link"> Log in here </Link>
// 	    	</div>
// 	  </div> );
//   }
// }

// export default Register;


//      <form className="popup__formfield">
//         <label>Email:</label>
//         <input className="popup__input popup__input_type_signup" name="email" type="email" value={email || ''} onChange={handleEmailChange} />
//         <label>Password:</label>
//         <input className="popup__input popup__input_type_signup" name="password" type="password" value={password || ''} onChange={handlePasswordChange} />
//         <label>Confirm password:</label>
//         <input className="popup__input popup__input_type_signup" name="confirmPassword" type="password" value={confirmpassword || ''} onChange={handleConfirmPasswordChange} />
//         <button onSubmit={handleSubmit}  type="submit" className="popup__save" >
//             {
//               isLoading ? 'Loading...' : (buttonText)
//             }
//           </button>
//       </form>
