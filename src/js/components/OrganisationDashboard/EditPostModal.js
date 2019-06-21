import React from 'react';
import {Form} from "react-bootstrap";
import ReactModal from "../UserDashboard/EditPostsByUser";

const EditPostModal=()=>{
    return(
        <ReactModal
            isOpen={this.props.showModal}
            contentLabel="Minimal Modal Example"
            style={customStyles}
        >
            <h4 id="contained-modal-title" className="modal-title">Edit Post</h4>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="skill-text">Services/Goods Required</Form.Label>
                    <div>
                        <input className="goodsAndServices" type="radio" value="GOOD" name="goodRequired"
                               onChange={this.goodsOrServicesSelected}/>Goods
                        <input className="goodsAndServices" type="radio" value="SERVICE" name="goodRequired"
                               onChange={this.goodsOrServicesSelected}/>Services
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
                               name="rateType" onChange={this.rateType}/>
                        <label htmlFor="perItem">Per Item</label>
                    </div>
                    }
                    {this.state.goodsOrServicesSelected === "SERVICE" &&
                    <div>
                        <input type="radio" id="perHour" className="goodsAndServices" value="PERHOUR"
                               name="rateType" onChange={this.rateType}/>
                        <label htmlFor="perHour">Per Hour</label>
                        <input type="radio" id="perDay" className="goodsAndServices" value="PERDAY" name="rateType"
                               onChange={this.rateType}/>
                        <label htmlFor="perDay">Per Day</label>
                    </div>
                    }
                </Form.Group>
                <button className="btn btn-default goodsAndServicesButton goodsAndServicesButtonRight"
                        onClick={this.handleSubmit} type="button">Save Post
                </button>


                <button className="btn btn-default goodsAndServicesButton"
                        onClick={this.props.handleCloseModal}>Close
                </button>
            </Form>
        </ReactModal>
    )
};

export default EditPostModal;
