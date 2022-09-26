import React from "react";
import { Link, withRouter } from "react-router-dom";
import * as auth from "../utils/auth.js";
// import "./styles/Login.css";

const Login = ({ handleSubmit }) => {
  const currentUser = React.useContext(CurrentUserContext)

  const [email, setEmail] = useState('');
  const [password , setPassword] = useState('');



  function handleChange(e) {
    const { name, value } = e.target;
    this.setState({
	[name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!this.state.username || !this.state.password) {
	return;
  }
         auth.signin  (this.state.username, this.state.password)
     .then((data) => {
      if (data.jwt) {         // you need to check if the data has a jwt
        this.setState({ 	  // reset the state then in the callback,
        username: '', password: '', message: '' }, () => {
        value.handleLogin(); // set the parent App's loggedIn state to true,
        this.props.history.push('/ducks');  // then redirect to '/diary'
         })
       }
          })
          .catch(err => console.log(err)); // this is fired if the user not found }
    }


    return (
      <div className="sign-form">
        <form className="sign-form__field" onSubmit={handleSubmit}>
          <div className="sign-form__area">
            <h3 className="sign-form__title">Sign Up</h3>
            <label className="sign-form__input">
              <input className="sign-form__textfield" name="email" type="email" placeholder="Email" onChange={handleEmailChange} required />
            </label>
            <label className="sign-form__input">
              <input className="popup__input popup__input_type_signup" name="password" type="password" placeholder="Password" onChange={handlePasswordChange}  required/>
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

    export default Login;
