import React from "react";
import ReactModal from "react-modal";
import { Link } from 'react-router';
import {Form} from "react-bootstrap";

const RedirectToLoginModal = (props) => {
    const { showModal, handleCloseModal } = props;
    const customStyles = {
        content : {
            top                   : '5%',
            left                  : '20%',
            right                 : '20%',
            bottom                : 'auto',
            height                 : '20vh',
            overflow             : 'auto'
        }
    };
    return(
        <ReactModal
            isOpen={ showModal }
            contentLabel="Minimal Modal Example"
            style={customStyles}
        >
            <h5>Post A Work Request</h5>
            <p>Please <Link to="/login">Login</Link> to Continue.</p>
            <button className="btn btn-default goodsAndServicesButton" onClick={ handleCloseModal }>Close</button>
        </ReactModal>
    );
};

export default RedirectToLoginModal;
