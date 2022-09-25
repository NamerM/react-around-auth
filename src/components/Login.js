import React from "react";
import { Link, withRouter } from "react-router-dom";
import * as auth from "../utils/auth.js";
// import "./styles/Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
	[name]: value,
    });
  }

  handleSubmit(e) {
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


    render() {  //css kontrol tüm sınıflar
      return (
        <div onSubmit={this.handleSubmit} className="login">
      <p className="login__welcome"> This app contains highly sensitive information. Please sign in 	or register to access CryptoDucks.
      </p>
      <p className="login__error">
        {this.state.message}
      </p>
      <form onSubmit={this.handleSubmit} className="login__form">
        <label for="username">Username:</label>
        <input id="username" required name="username" type="text" value={this.state.username} onChange={this.handleChange} />
        <label for="password">Password:</label>
        <input id="password" required name="password" type="password" value={this.state.password} onChange={this.handleChange} />
        <div className="login__button-container">
          <button type="submit" className="login__link"> Log in </button>
        </div>
      </form>
      <div className="login__signup">
        <p>Not a member yet?</p>
        <Link to="/register" className="signup__link"> Sign up here </Link>
      </div>
        </div>
      );
     }
    }

    export default Login;
