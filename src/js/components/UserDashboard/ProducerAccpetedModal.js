import ReactModal from "react-modal";
import React from "react";
import { Form, Button } from 'react-bootstrap'
import "../../../assests/sass/editVolunteerProfile.scss";
// import { Form, Button } from "react-bootstrap";


class ProducerAccpetedModal extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            id: this.props.allPostsByUser.id,
            newUser: '',
            agreedUponPrice:''
        };
        this.makeAPayment=this.makeAPayment.bind(this);
    }

    makeAPayment(){
        console.log("payment");
    }

    render () {
        const customStyles = {
            content : {
                top                   : '5%',
                left                  : '20%',
                right                 : '20%',
                bottom                : 'auto',
                height: 'auto',
                overlfow: 'scroll'
            }
        };
        return (
            <ReactModal
                isOpen={this.props.allPostsByUser && (this.props.allPostsByUser.status === 'ACCEPTED' ||
                    this.props.allPostsByUser.status === 'PENDING_CONSUMER_SIGNOFF') ? this.props.showModal : false}
                contentLabel="Minimal Modal Example"
                style={customStyles}
            >
                <h4 id="contained-modal-title" className="modal-title">Details :</h4>
                {(this.props.allPostsByUser.status === 'PENDING_CONSUMER_SIGNOFF') &&
                <div>
                    <label className="control-label signOffLabel">Post Status :</label>
                    <div>
                        <p>Final Sign-Off From Helper Pending.</p>
                        <label className="control-label signOffLabel">Amount Agreed:{ this.props.allPostsByUser.offerPrice}</label>
                    </div>
                </div>
                }
                {(this.props.allPostsByUser.status === 'ACCEPTED') &&
                <div>
                    <label className="control-label signOffLabel">Post Status :</label>
                    <br/>
                    <label className="control-label signOffLabel">Amount Agreed: { this.props.allPostsByUser.offerPrice}</label>
                    <div>Final Sign-Off Given By Helper. Please proceed with payment.</div>
                    <button className="btn btn-default signOffButton"
                            type="button" onClick={this.makeAPayment}>Make Payment</button>
                </div>
                }
                <button className="btn btn-default goodsAndServicesButton"
                        onClick={this.props.handleCloseModal}>Close
                </button>
            </ReactModal>
        );
    }
}
export default ProducerAccpetedModal ;