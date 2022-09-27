import React, { useState} from 'react';
import { Link } from "react-router-dom";

const Register = ({ onRegisterUser }) => {  //property name used on return
  const [email, setEmail] = useState('');
  const [password , setPassword] = useState('');

   function handleSubmit(e) {
    e.preventDefault();
    const userData = {
      email,
      password,
    }
    onRegisterUser(userData);  //app.js function name
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

	return (
    <div className="sign-form">
      <form className="sign-form__field" onSubmit={handleSubmit}>
        <div className="sign-form__area">
          <h3 className="sign-form__title">Sign Up</h3>
          <label className="sign-form__input">
            <input className="sign-form__textfield"
              value={email}
              name="email"
              type="text"
              placeholder="Email"
              onChange={handleEmailChange} required />
          </label>
          <label className="sign-form__input">
            <input
              className="sign-form__textfield"
              value={password}
              name="password"
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}  required/>
          </label>
        </div>
        <div className="sign-form__area">
          <button className="sign-form__button" type="submit">
            Sign Up
          </button>
          <p className="sign-form__text">
            Already a member? {' '}
            <Link className="sign-form__link" to="/signin">
              Log in here!
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;


// class signister extends React.Component {
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
