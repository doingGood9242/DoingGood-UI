import React, { Component } from "react";
import { Link } from 'react-router';
import doingGoodHero from "../../assests/images/home/DoingGood_logo_HERO.png";

class OrgSignUp extends Component {
    constructor(props){
        super(props);
        this.credentials = {
            orgname: '',
            website: '',
            city : '',
            state:'',
            email :'',
            password:'',
            phone:'',
            role : 'charity',
            aboutme:''
        };
        this.state = {
            orgnameValid : false,
            siteValid : false,
            emailValid: false,
            passwordValid : false,
            phoneValid:false,
            allValid : false,
            highlightclass:''
        };
        this.handleValidateName = this.handleValidateName.bind(this);
        this.handleValidateEmail = this.handleValidateEmail.bind(this);
        this.handleValidatePassword = this.handleValidatePassword.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.goToHomePage = this.goToHomePage.bind(this);
        this.goToLogin = this.goToLogin.bind(this);

        this.orgError = 'Please enter Organization name';
        this.emailError = 'Please enter email';
        this.passwordError = 'Please enter password';
    }

    handleValidateName(data) {
        if(!data.target.value) {
            this.setState({orgnameValid: false});
            this.orgError = 'Enter Organization Name';
        }
        else {
            this.orgError = '';
            this.setState({orgnameValid: true});
        }
    }

    handleValidateEmail(data){
        var tempVal = data.target.value;
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(tempVal)) { // OR if (/^[0-9]{1,10}$/.test(+tempVal) && tempVal.length<=10)
            this.setState({emailValid: true});
            this.emailError = '';
        }
        else{
            this.setState({emailValid: false});
            this.emailError = 'Enter valid Email ID'
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
        //   console.log('regex ',passw);
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
            this.passwordError = 'Password should be of minimum 6 character-long';
            //this.credentials.password = data.target.value;
        }
    }

    handleChange(data){
        switch(data.target.name) {
            case 'orgname':
                this.credentials.orgname = data.target.value;
                this.handleValidateName(data);
                break;
            case 'website':
                this.credentials.website = data.target.value;
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
        if(this.state.orgnameValid  && this.state.emailValid && this.state.passwordValid )
        {
            this.state.allValid = true;
        }
        else{
            this.state.allValid = false;
            this.state.orgnameValid ? "" : this.setState({highlightclass:"highlight"});
            this.state.emailValid ? "" : this.setState({highlightclass:"highlight"});
            this.state.passwordValid ? "" : this.setState({highlightclass:"highlight"});
        }
        if(this.state.allValid === true){
            e.preventDefault();
            this.props.signUpUserActions.signupOrg(this.credentials);
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
            <div className="d-flex align-items-center justify-content-center login-wrapper signup-page2">
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="row mb-2">
                                <div className="col-4">
                                    <img src={doingGoodHero} onClick={this.goToHomePage} alt="logo" width="80"/>
                                </div>
                                <div className=" col-8 d-flex justify-content-end align-items-center">
                                    <Link to="/login">Have an account? Login</Link>
                                </div>
                            </div>
                            <div className="form-group mb-2">
                                <label>Organization Name*</label>
                                <input type="text"
                                       onChange={this.handleChange} name="orgname" placeholder={this.orgError} class={this.state.orgnameValid ? 'form-control' : this.state.highlightclass + " form-control"}/>
                            </div>
                            <div className="form-group mb-2">
                                <label>Website</label>
                                <input className="form-control" type="text" onChange={this.handleChange} name="website" placeholder="Please enter website"/>
                            </div>
                            <div className="form-group mb-2">
                                <label>City</label>
                                <input className="form-control" type="text" onChange={this.handleChange} name="city" placeholder="Please enter City"/>
                            </div>
                            <div className="form-group mb-2">
                                <label>State</label>
                                <input className="form-control" type="text" onChange={this.handleChange} name="state" placeholder="Please enter State"/>
                            </div>
                            <div className="form-group mb-2">
                                <label>Email*</label>
                                <input type="email" onChange={this.handleChange} name="email" placeholder={this.emailError}  className={this.state.emailValid ? 'form-control' : this.state.highlightclass + " form-control"}/>
                            </div>
                            <div className="form-group mb-2">
                                <label>Password*</label>
                                <input type="password" name="password" onChange={this.handleChange}  placeholder={this.passwordError} className={this.state.passwordValid ? 'form-control' : this.state.highlightclass + " form-control"}/>
                            </div>
                            <div className="form-group mb-2">
                                <label>Phone Number</label>
                                <input className="form-control" type="text" onChange={this.handleChange} placeholder="Please enter phone number" maxLength='10'/>
                            </div>
                            <div className="form-group mb-3">
                                <label>About Organization</label>
                                <textarea className="form-control" placeholder="About organization" onChange={this.handleChange}/>
                            </div>
                            <button className="btn btn-primary btn-block fw-600 py-2" onClick={this.handleSubmit} type="button">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrgSignUp;
