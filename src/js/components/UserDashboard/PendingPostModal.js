import ReactModal from "react-modal";
import React from "react";
import { Form, Button } from 'react-bootstrap'
import "../../../assests/sass/editVolunteerProfile.scss";
// import { Form, Button } from "react-bootstrap";


class PendingPostModal extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            goodsOrServicesSelected: this.props.allPostsByUser.goodOrService,
            goods:this.props.allPostsByUser.goodOrService,
            description:this.props.allPostsByUser.description,
            rate:this.props.allPostsByUser.rate,
            minimum:this.props.allPostsByUser.minimum,
            maximum:this.props.allPostsByUser.maximum,
            rateType:this.props.allPostsByUser.rateType,
            id: this.props.allPostsByUser.id,
            postType:this.props.allPostsByUser.postType,
            newUser: 0,
            newOrg: 0,
            agreedUponPrice:null,
            checkedGood: this.props.allPostsByUser.goodOrService ? (this.props.allPostsByUser.goodOrService === 'GOOD') : false,
            checkedService: this.props.allPostsByUser.goodOrService ? (this.props.allPostsByUser.goodOrService === 'SERVICE') : false,
            checkedPerItem: this.props.allPostsByUser.rateType ? (this.props.allPostsByUser.rateType === 'PERITEM') : false,
            checkedPerDay: this.props.allPostsByUser.rateType ? (this.props.allPostsByUser.rateType === 'PERHOUR') : false,
            checkedPerHour: this.props.allPostsByUser.rateType ? (this.props.allPostsByUser.rateType === 'PERDAY') : false
        };
        this.goodsOrServicesSelected = this.goodsOrServicesSelected.bind(this);
        this.goods = this.goods.bind(this);
        this.description = this.description.bind(this);
        this.rate = this.rate.bind(this);
        this.minimum = this.minimum.bind(this);
        this.maximum = this.maximum.bind(this);
        this.rateType = this.rateType.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onUserChange = this.onUserChange.bind(this);
        this.onOrgChange = this.onOrgChange.bind(this);
        this.producerSignOff=this.producerSignOff.bind(this);
        this.agreedPrice=this.agreedPrice.bind(this);
    }
    goodsOrServicesSelected(event){
        this.setState({ goodsOrServicesSelected:event.target.value,
            checkedService: event.target.value !== "GOOD",
            checkedGood: event.target.value !== "SERVICE"})
    }
    goods(event){
        this.setState({ goods:event.target.value})
    }
    description(event){
        this.setState({ description:event.target.value})
    }
    rate(event){
        this.setState({ rate:event.target.value})
    }
    minimum(event){
        this.setState({ minimum:event.target.value})
    }
    maximum(event){
        this.setState({ maximum:event.target.value})
    }
    rateType(event){
        this.setState({ rateType:event.target.value,
            checkedPerItem: event.target.value !== "PERHOUR" ,
            checkedPerDay: event.target.value !== "PERDAY",
            checkedPerHour: event.target.value !== "PERITEM"})
    }

    handleSubmit(event){
        this.props.memberdashboardactions.updatePostsByUserAction(
            this.state.goodsOrServicesSelected,
            this.state.goods,
            this.state.description,
            this.state.rate,
            this.state.minimum,
            this.state.maximum,
            this.state.rateType,
            this.state.postType,
            this.props.session ?  this.props.session.id : 0,
            this.props.allPostsByUser.id);
        this.props.handleCloseModal();
    }
    onUserChange(event){
            this.setState({newUser: event.target.value});
    }

    onOrgChange(event){
            this.setState({newOrg: event.target.value });
    }
    producerSignOff(){
        this.props.memberdashboardactions.updatePostOnAgreedPrice(this.state.newUser,this.props.allPostsByUser.id,
            this.state.agreedUponPrice,'PRODUCER_SIGNOFF');
        this.props.handleCloseModal();
    }
    agreedPrice(event){
        this.setState({agreedUponPrice:event.target.value})
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
        const listOfUsers =this.props.allPostsByUser.consumers.interestedMembers;
        const listOfOrgs =this.props.allPostsByUser.consumers.interestedOrganization;
        return (
            <ReactModal
                isOpen={this.props.showModal}
                contentLabel="Minimal Modal Example"
                style={customStyles}
            >
                <h5 id="contained-modal-title" className="modal-title">Edit Post Details</h5>
                <label className="skill-text">Post Details:</label>
                <Form>
                    <Form.Group controlId="formBasicEmail" className="pendingPostFormFormGroup">
                        <Form.Label className="skill-text">Services/Goods Required</Form.Label>
                        <div>
                            <input className="goodsAndServices" type="radio" value="GOOD" name="goodRequired"
                                   onChange={this.goodsOrServicesSelected} checked={this.state.checkedGood}/>Goods
                            <input className="goodsAndServices" type="radio" value="SERVICE" name="goodRequired"
                                   onChange={this.goodsOrServicesSelected} checked={this.state.checkedService}/>Services
                        </div>
                        <Form.Label>Goods/Service:</Form.Label>
                        <input className='form-control' type="text" onChange={this.goods}
                               defaultValue={this.props.allPostsByUser ? this.props.allPostsByUser.goodOrService : null}/>
                        <Form.Label>Description:</Form.Label>
                        <Form.Control type="text" onChange={this.description}
                                      defaultValue={this.props.allPostsByUser ? this.props.allPostsByUser.description :null}/>
                        <Form.Label>Rate:</Form.Label>
                        <Form.Control type="text" onChange={this.rate} defaultValue={this.props.allPostsByUser ? this.props.allPostsByUser.rate : null}/>
                        <Form.Label>Minimum:</Form.Label>
                        <Form.Control type="text" onChange={this.minimum}
                                      defaultValue={this.props.allPostsByUser ? this.props.allPostsByUser.minimum : null}/>
                        <Form.Label>Maximum:</Form.Label>
                        <Form.Control type="text" onChange={this.maximum}
                                      defaultValue={this.props.allPostsByUser ? this.props.allPostsByUser.maximum : null}/>
                        <Form.Label>Rate Type</Form.Label>
                        {this.state.goodsOrServicesSelected === "GOOD" &&
                        <div>
                            <input type="radio" id="perItem" className="goodsAndServices" value="PERITEM"
                                   name="rateType" onChange={this.rateType} checked={this.state.checkedPerItem}/>
                            <label htmlFor="perItem">Per Item</label>
                        </div>
                        }
                        {this.state.goodsOrServicesSelected === "SERVICE" &&
                        <div>
                            <input type="radio" id="perHour" className="goodsAndServices" value="PERHOUR"
                                   name="rateType" onChange={this.rateType} checked={this.state.checkedPerHour}/>
                            <label htmlFor="perHour">Per Hour</label>
                            <input type="radio" id="perDay" className="goodsAndServices" value="PERDAY" name="rateType"
                                   onChange={this.rateType} checked={this.state.checkedPerDay}/>
                            <label htmlFor="perDay">Per Day</label>
                        </div>
                        }
                        <button className="btn btn-default signOffButton"
                                onClick={this.handleSubmit} type="button">Save Post
                        </button>
                    </Form.Group>
                    <label className="control-label signOffLabel">Post Status:</label>
                    <div>Following Volunteers and Charity Organisations have shown interest in your post.</div>
                    <label className="skill-text"> Select: </label>
                    <div className="form-group m-0">
                        <select className="form-control" onChange={this.onUserChange} disabled={this.state.newOrg}>r
                                {listOfUsers && listOfUsers.map((user)=>
                            <option value={user.id}>{user.name}</option>
                            )}

                        </select>
                        <br/>
                        <div>OR</div>
                        <br/>
                        <select className="form-control" onChange={this.onOrgChange} disabled={this.state.newUser}>
                            {listOfOrgs && listOfOrgs.map((user)=>
                                <option value={user.id}>{user.name}</option>
                            )}

                        </select>
                        <br/>
                        <Form.Label>Agreed upon price:</Form.Label>
                        <Form.Control onChange={this.agreedPrice} required/>
                        <br/>
                        <button className="btn btn-default signOffButton" type="button" onClick={this.producerSignOff} disabled={!this.state.agreedUponPrice}>Sign off</button>
                    </div>
                    <button className="btn btn-default goodsAndServicesButton"
                            onClick={this.props.handleCloseModal}>Close
                    </button>

                </Form>
            </ReactModal>
        );
    }
}
export default PendingPostModal;