import ReactModal from "react-modal";
import React from "react";
import { Form, Button } from 'react-bootstrap'
// import { Form, Button } from "react-bootstrap";


class EditOrgProfile extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            organizationName: props.session.organizationName,
            websiteUrl:props.session.websiteUrl,
            aboutMe:props.session.aboutMe,
            emailId:props.session.email,
        };
        this.changeOrgName = this.changeOrgName.bind(this);
        this.changeWebsiteUrl = this.changeWebsiteUrl.bind(this);
        this.changeAboutMe = this.changeAboutMe.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        this.props.memberdashboardactions.OrgUpdateAction(
            this.state.organizationName,
            this.state.websiteUrl,
            this.state.aboutMe,
            this.state.emailId,
            this.props.session.id
        );
        this.props.memberdashboardactions.closeModal();
    }

    changeOrgName(event){
        this.setState({ organizationName:event.target.value})
    }
    changeWebsiteUrl(event){
        this.setState({ websiteUrl:event.target.value})
    }
    changeAboutMe(event){
        this.setState({ aboutMe:event.target.value})
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
                        <Form.Label >First name</Form.Label>
                        <Form.Control type="text" onChange={this.changeOrgName} defaultValue={this.props.session.firstName} />
                        <Form.Label>About Me</Form.Label>
                        <Form.Control type="text" onChange={this.changeAboutMe} defaultValue={this.props.session.aboutme}/>
                        <Form.Label>WebsiteUrl</Form.Label>
                        <Form.Control type="text" onChange={this.changeWebsiteUrl} defaultValue={this.props.session.websiteUrl}/>
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

export default EditOrgProfile;