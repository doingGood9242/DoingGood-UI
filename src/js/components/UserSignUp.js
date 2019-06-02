import React, { Component } from "react";
import { Link } from 'react-router';
import doingGoodHero from "../../assests/images/home/DoingGood_logo_HERO.png";


class UserSignUp extends Component {
    constructor(props){
        super(props);
        this.credentials = {
            firstname: '',
            lastname: '',
            city : '',
            state:'',
            email :'',
            password:'',
            phone:'',
            role : 'member',
            aboutme:''
        };
        this.state = {
            firstnameValid : false,
            lastnameValid : false,
            emailValid: false,
            passwordValid : false,
            phoneValid:false,
            allValid : false,
            highlightclass:''
        };

        this.handleValidateFirstName = this.handleValidateFirstName.bind(this);
        this.handleValidateLastName = this.handleValidateLastName.bind(this);
        this.handleValidateEmail = this.handleValidateEmail.bind(this);
        this.handleValidatePassword = this.handleValidatePassword.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.goToHomePage = this.goToHomePage.bind(this);
        this.goToLogin = this.goToLogin.bind(this);

        this.firstnameError = 'Please enter first name';
        this.lastnameError = 'Please enter last name';
        this.emailError = 'Please enter email';
        this.passwordError = 'Please enter password';
        this.phoneError = 'Please enter phone number';
    }

    handleValidateFirstName(data) {
        if(!data.target.value) {
            this.setState({firstnameValid: false});
            this.firstnameError = 'Enter Organization Name';
        }
        else {
            this.firstnameError = '';
            this.setState({firstnameValid: true});
        }
    }

    handleValidateLastName(data){
        if(!data.target.value) {
            this.setState({lastnameValid: false});
            this.lastnameError = 'Enter Organization Name';
        }
        else {
            this.lastnameError = '';
            this.setState({lastnameValid: true});
        }
    }

    handleValidateEmail(data){
        var tempVal = data.target.value;
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(tempVal)) {
            this.setState({emailValid: true});
            this.emailError = '';
        }
        else{
            this.setState({emailValid: false});
            this.emailError = 'Enter valid Email ID'
        }
        if(!tempVal){
            this.emailError = 'Enter Email ID'
        }
    }

    handleValidatePhone(data){
        var tempVal = data.target.value;
        if (/^[0-9]{1,10}$/.test(+tempVal) && /^(?=(?:\D*\d){3,})[a-zA-Z0-9_/+*.-]{10,}$/.test(+tempVal)){ // OR if (/^[0-9]{1,10}$/.test(+tempVal) && tempVal.length<=10)
            this.setState({phoneValid: true});
            this.credentials.phone = data.target.value;
            this.phoneError = '';
        }
        else if(!tempVal){
            this.phoneError = '';
        }
        else{
            this.setState({phoneValid: false});
            this.phoneError = 'Cell number must be of 10 digits';
        }
    }

    handleValidatePassword (data){
        var passw = /^(([a-zA-Z]+\d+)|(\d+[a-zA-Z]+))[a-zA-Z0-9]*$/;
        var tempVal = data.target.value;
        if(tempVal.match(passw))
        {
            this.passwordError = '';
            this.setState({passwordValid: true});
            this.credentials.password = data.target.value;
        }
        else
        {
            this.setState({passwordValid: false});
            this.passwordError = 'Password should be of minimum 6 character lengths including alphanumeric numbers and atleast one special character.';
            this.credentials.password = data.target.value;
        }
    }

    handleChange(data){
        switch(data.target.name) {
            case 'firstname':
                this.credentials.firstname = data.target.value;
                this.handleValidateFirstName(data);
                break;
            case 'lastname':
                this.credentials.lastname = data.target.value;
                this.handleValidateLastName(data);
                break;
            case 'city':
                this.credentials.city = data.target.value;
                break;
            case 'state':
                this.credentials.state = data.target.value;
                break;
            case 'email':
                this.credentials.email = data.target.value;
                this.handleValidateEmail(data);
                break;
            case 'phone':
                this.credentials.phone = data.target.value;
                this.handleValidatePhone(data);
                break;
            case 'password':
                this.credentials.password = data.target.value;
                this.handleValidatePassword(data);
                break;
            case 'aboutme':
                this.credentials.aboutme = data.target.vaue;
                break;
        }

    }

    handleSubmit(e){
        if(this.state.firstnameValid  && this.state.lastnameValid  && this.state.emailValid
            && this.state.passwordValid){
            this.state.allValid = true;
        }
        else{
            this.setState({allValid: false});
            this.state.firstnameValid ? "" : this.setState({highlightclass:"highlight"});
            this.state.lastnameValid ? "" : this.setState({highlightclass:"highlight"});
            this.state.emailValid ? "" : this.setState({highlightclass:"highlight"});
            this.state.passwordValid ? "" : this.setState({highlightclass:"highlight"});
        }
        if(this.state.allValid === true){
            e.preventDefault();
            this.props.signUpUserActions.signupUser(this.credentials);
            this.setState({credentials: {}});
        }
    }

    goToHomePage(){
        this.props.signUpUserActions.displayhomepage();
    }

    goToLogin(){
        this.props.signUpUserActions.gotologin();
    }

    render() {
        return (
            <div className="d-flex align-items-center justify-content-center login-wrapper signup-page">
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="row mb-2">
                                <div className="col-4">
                                    <img src={doingGoodHero} onClick={this.goToHomePage} width="80"/>
                                </div>
                                <div className="col-8 d-flex justify-content-end align-items-center">
                                    <Link to="/login">Have an account? Login</Link>
                                </div>
                            </div>
                            <div className="form-group mb-2">
                                <label>First Name*</label>
                                <input name="firstname" onChange={this.handleChange} type="text" required placeholder={this.firstnameError} className={this.state.firstnameValid ? 'form-control' : this.state.highlightclass +" form-control"}/>
                            </div>
                            <div className="form-group mb-2">
                                <label>Last Name*</label>
                                <input name="lastname" className="form-control" onChange={this.handleChange} type="text" required placeholder={this.lastnameError} className={this.state.lastnameValid ? 'form-control' : this.state.highlightclass +" form-control"}/>
                            </div>
                            <div className="form-group mb-2">
                                <label>City</label>
                                <input name="city" className="form-control" onChange={this.handleChange} type="text" placeholder="Please enter City"/>
                            </div>
                            <div className="form-group mb-2">
                                <label>State</label>
                                <input name="state" className="form-control" onChange={this.handleChange} type="text" placeholder="Please enter State"/>
                            </div>
                            <div className="form-group mb-2">
                                <label>Email*</label>
                                <input name="email" onChange={this.handleChange} type="email" required placeholder={this.emailError} className={this.state.emailValid ? 'form-control' : this.state.highlightclass+" form-control"}/>
                            </div>
                            <div className="form-group mb-2">
                                <label>Password*</label>
                                <input name="password" onChange={this.handleChange} type="password" required placeholder={this.passwordError} className={this.state.passwordValid ? 'form-control' : this.state.highlightclass+" form-control"}/>
                            </div>
                            <div className="form-group mb-2">
                                <label>Phone Number</label>
                                <input name="phonenumber" className="form-control" onChange={this.handleChange} type="text" placeholder="Please enter phone number" maxLength='10'/>
                            </div>
                            <div className="form-group mb-3">
                                <label>About Me</label>
                                <textarea name="aboutme" className="form-control" onChange={this.handleChange} placeholder="About me" />
                            </div>
                            <button name="signupbutton" className="btn btn-primary btn-block fw-600 py-2" onClick={this.handleSubmit} type="button">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

UserSignUp.propTypes = {

};

export default UserSignUp;
