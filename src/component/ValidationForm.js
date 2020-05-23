import React from "react"
import "./ValidatonForm.css"
class  ValidationForm extends React.Component{


	ValidateForm = async (e) =>{
		e.target.elements.Email.onchange=()=>{
			document.getElementById("ErrorEmail").style.display = "none";
		}
		e.target.elements.Password.onchange=()=>{
			document.getElementById("ErrorPassword").style.display = "none";
		}

		e.preventDefault();
		if(e.target.elements.Email.value === "Oleg" && e.target.elements.Password.value === "21"){
			this.props.history.push("/Main");
			document.cookie="passed=true; max-age=100";
		}
		else {
			if(e.target.elements.Email.value !== "Oleg"){
				document.getElementById("ErrorEmail").style.display = "inherit";
			}
			if(e.target.elements.Password.value !== "21"){
				document.getElementById("ErrorPassword").style.display = "inherit";
			}
		}
	}






	render() {
		return (

		<div className="form-style-10">
			<h1>Sign Up Now!<span>Sign up and tell us what you think of the site!</span></h1>
			<form onSubmit={this.ValidateForm }>
				<div className="section">First Name & Password</div>
				<label>Email <input type="text" name="Email" /> <span id="ErrorEmail">*Wrong Email </span></label>
				<label>Password <input type="password" name="Password"/><span  id="ErrorPassword">*Wrong Password </span></label>
				<div className="button-section">
					<input type="submit" name="Sign Up"/>
				</div>
			</form>
		</div>



		);
	}
}

export default ValidationForm;