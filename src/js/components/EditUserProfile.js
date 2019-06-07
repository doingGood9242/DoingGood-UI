import ReactModal from "react-modal";
import React from "react";
import { Form, Button } from 'react-bootstrap'
// import { Form, Button } from "react-bootstrap";


class EditUserProfile extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name:'',
            address:'',
            aboutMe:'',
            phoneNumber:'',
            emailId:''
        };
        this.changeName = this.changeName.bind(this);
        this.changeAddress = this.changeAddress.bind(this);
        this.changeAboutMe = this.changeAboutMe.bind(this);
        this.changePhoneNumber = this.changePhoneNumber.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        console.log("User updated");
    }

    changeName(event){
        this.setState({ name:event.target.value})
    }
    changeAddress(event){
        this.setState({ address:event.target.value})
    }
    changeAboutMe(event){
        this.setState({ aboutMe:event.target.value})
    }
    changePhoneNumber(event){
        this.setState({ phoneNumber:event.target.value})
    }
    changeEmail(event){
        this.setState({ emailId:event.target.value})
    }

    render () {
        const customStyles = {
            content : {
                top                   : '5%',
                left                  : '20%',
                right                 : '20%',
                bottom                : 'auto',
                height: '90%',
                overlfow: 'scroll'
            }
        };
        return (
            <ReactModal
                isOpen={this.props.showModal}
                contentLabel="Minimal Modal Example"
                style={customStyles}
            >
                <h4 id="contained-modal-title" className="modal-title">Edit User Profile</h4>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label >Name</Form.Label>
                        <Form.Control type="text" onChange={this.changeName} defaultValue={`${this.props.session.firstName} ${this.props.session.lastName}`} />
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" onChange={this.changeAddress} defaultValue={`${this.props.session.address1}, ${this.props.session.address2}, ${this.props.session.city}, ${this.props.session.state}`}/>
                        <Form.Label>About Me</Form.Label>
                        <Form.Control type="text" onChange={this.changeAboutMe} defaultValue={this.props.session.aboutme}/>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" onChange={this.changePhoneNumber} defaultValue={this.props.session.phoneNumber}/>
                        <Form.Label>Email Id</Form.Label>
                        <Form.Control type="text" onChange={this.changeEmail} defaultValue={this.props.session.email}/>
                    </Form.Group>
                    <button className="btn btn-default goodsAndServicesButton goodsAndServicesButtonRight" onClick={this.handleSubmit} type="button">Save</button>
                    <button className="btn btn-default goodsAndServicesButton" onClick={this.props.handleCloseModal}>Close</button>

                </Form>
            </ReactModal>
        );
    }
}

const props = {};

export default EditUserProfile;