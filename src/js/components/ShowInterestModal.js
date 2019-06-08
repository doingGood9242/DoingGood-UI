import ReactModal from "react-modal";
import React from "react";

class ShowInterestModal extends React.Component {
    constructor () {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        this.props.searchPostingAction.showInterestdAction(this.props.posts.id, this.props.session.id);
        this.props.handleCloseModal();
    }
    render () {
        const customStyles = {
            content : {
                top                   : '5%',
                left                  : '20%',
                right                 : '20%',
                bottom                : 'auto',
            }
        };

        return (
            <ReactModal
                isOpen={this.props.showInterestModal}
                contentLabel="Minimal Modal Example"
                style={customStyles}
            >
                <h4 id="contained-modal-title" className="modal-title">Show Interest</h4>
                <div className="form-group">
                    <label className="control-label">Goods/Service:</label>
                    <label className="control-label">{this.props.posts.goodOrService}</label>
                    <br/>
                        <label className="control-label">Description:</label>
                        <label className="control-label">{this.props.posts.description}</label>
                        <br/>
                            <label className="control-label">Rate:</label>
                    <label className="control-label">{this.props.posts.rate}</label>
                    <br/>
                    <label className="control-label">Rate Type:</label>
                    <label className="control-label">{this.props.posts.rateType}</label>
                    <br/>
                    <label className="control-label">Let's Connect, do you
                    want to send email to the person who has posted?</label>
                    <br/>
                </div>
                <hr/>
                    <button className="btn btn-default goodsAndServicesButton goodsAndServicesButtonRight" onClick={this.props.handleCloseModal} type="button">No</button>
                    <button className="btn btn-default goodsAndServicesButton goodsAndServicesButtonRight" onClick={this.handleSubmit}>Yes</button>
                    <button className="btn btn-default goodsAndServicesButton" onClick={this.props.handleCloseModal}>Close</button>
            </ReactModal>
        );
    }
}

const props = {};

export default ShowInterestModal;