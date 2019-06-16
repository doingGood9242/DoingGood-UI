import ReactModal from "react-modal";
import React from "react";
import { Form, Button } from 'react-bootstrap'
import "../../../assests/sass/editVolunteerProfile.scss";
// import { Form, Button } from "react-bootstrap";


class ConsumerSignOffModal extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            id: this.props.allPostsByUser.id,
            newUser: '',
            agreedUponPrice:''
        };
        this.producerSignOff=this.producerSignOff.bind(this);
    }

    producerSignOff(){
        this.props.memberdashboardactions.updatePostOnAgreedPrice(this.props.session.id,this.props.allPostsByUser.id,
            this.props.allPostsByUser.offerPrice,'CONSUMER_SIGNOFF');
        if(this.props.session.userRole === "ORGANIZATION"){
            this.props.memberdashboardactions.closeModal()
        }else {
            this.props.handleCloseModal();
        }
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
                        <p>Signed-Off By Requester, Please Sign-Off From Your End.</p>
                        <label className="control-label signOffLabel">Amount Agreed:{ this.props.allPostsByUser.offerPrice}</label>
                    </div>
                        <button className="btn btn-defa
                        ult signOffButton" type="button" onClick={this.producerSignOff}>Sign off</button>
                    </div>
                }
                {(this.props.allPostsByUser.status === 'ACCEPTED') &&
                    <div>
                        <label className="control-label signOffLabel">Post Status :</label>
                        <div>Payment Pending</div>
                        <label className="control-label signOffLabel">Amount Agreed: { this.props.allPostsByUser.offerPrice}</label>
                    </div>
                }
                <button className="btn btn-default goodsAndServicesButton"
                            onClick={this.props.handleCloseModal}>Close
                    </button>
            </ReactModal>
        );
    }
}
export default ConsumerSignOffModal ;