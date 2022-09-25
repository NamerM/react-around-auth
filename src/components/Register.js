import React, { Button } from "react";    //notlardan aldım değişecek
import { Link, useHistory } from "react-router-dom";
import Logo from "./Logo.js";
// import "./styles/Register.css";
import * as auth from "../../utils/auth";

class Register extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
	  username: "",
	  email: "",
	  password: "",
	  confirmPassword: "", 	};
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this); }
  handleChange(e) {
	const { name, value } = e.target;
	this.setState({
	  [name]: value,
	});   }
  handleSubmit(e) {
    e.preventDefault();
	if (this.state.password === this.state.confirmPassword) {
	  let { username, password, email } =  this.state;
	  auth.register(username, password, email).then((res) => {
	 if (res) {
	     this.setState({ message: "" }, () => {
	        this.props.history.push( "/login" ); 	 });
	 } else {
	   this.setState({ message: "Something went wrong", });
	}
      });
    }
}
render() {
	return (
	  <div className="register">
		<Logo title={"CryptoDucks"} />
		<p className="register__welcome">Please register.</p>
		<form className="register__form">
		  <label>Username:</label>
		  <input name="username" type="text" value={this.state.username} onChange={this.handleChange} />
		  <label>Email:</label>
		  <input name="email" type="email" value={this.state.email} onChange={this.handleChange} />
		  <label>Password:</label>
		  <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
		  <label>Confirm password:</label>
		  <input name="confirmPassword" type="password" value={this.state.confirmPassword} onChange={this.handleChange} />
		</form>
	  	<div className="register__button-container">
		  <button onClick={this.handleSubmit} className="register__link"> Sign up </button>
	    	</div>
	    	  <div className="register__signin"> <p>Already a member?</p> <Link to="login" className="register__login-link"> Log in here </Link>
	    	</div>
    	  </div> );
  }

}
export default Register;
