import ReactModal from "react-modal";
import React from "react";
import { Form, Button } from 'react-bootstrap'
// import { Form, Button } from "react-bootstrap";


class GoodsAndServicesModal extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            goodsOrServicesSelected:'',
            goods:'',
            description:'',
            rate:'',
            minimum:'',
            maximum:'',
            rateType:'',
            upId: props.session ?  props.session.id : 0
        };
        this.goodsOrServicesSelected = this.goodsOrServicesSelected.bind(this);
        this.goods = this.goods.bind(this);
        this.description = this.description.bind(this);
        this.rate = this.rate.bind(this);
        this.minimum = this.minimum.bind(this);
        this.maximum = this.maximum.bind(this);
        this.rateType = this.rateType.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        this.props.searchPostingAction.postWorkRequestAction(
                this.state.goodsOrServicesSelected,
                this.state.goods,
                this.state.description,
                this.state.rate,
                this.state.minimum,
                this.state.maximum,
                this.state.rateType,
            this.props.postType,
            this.state.upId);
        this.props.handleCloseModal();
    }

    goodsOrServicesSelected(event){
        this.setState({ goodsOrServicesSelected:event.target.value})
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
        this.setState({ rateType:event.target.value})
    }

    render () {
        const customStyles = {
            content : {
                top                   : '5%',
                left                  : '20%',
                right                 : '20%',
                bottom                : 'auto',
                height                 : '100vh',
                overflow             : 'auto'
            }
        };
        return (
            <ReactModal
                isOpen={this.props.showModal}
                contentLabel="Minimal Modal Example"
                style={customStyles}
            >
                <h4 id="contained-modal-title" className="modal-title">Post Wanted Goods or Services </h4>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="skill-text">Services/Goods Required</Form.Label>
                        <div>
                            <input className="goodsAndServices" type="radio" value="GOOD" name="goodRequired" onChange={this.goodsOrServicesSelected} />Goods
                            <input className="goodsAndServices" type="radio" value="SERVICE" name="goodRequired" onChange={this.goodsOrServicesSelected} />Services
                        </div>
                        <Form.Label >Goods/Service:</Form.Label>
                        <Form.Control type="text" onChange={this.goods} />
                        <Form.Label>Description:</Form.Label>
                        <Form.Control type="text" onChange={this.description}/>
                        <Form.Label>Rate:</Form.Label>
                        <Form.Control type="text" onChange={this.rate}/>
                        <Form.Label>Minimum:</Form.Label>
                        <Form.Control type="text" onChange={this.minimum}/>
                        <Form.Label>Maximum:</Form.Label>
                        <Form.Control type="text" onChange={this.maximum} />
                        <Form.Label>Rate Type</Form.Label>
                        { this.state.goodsOrServicesSelected === "GOOD" &&
                            <div>
                                <input type="radio" id="perItem" className="goodsAndServices" value="PERITEM" name="rateType" onChange={this.rateType}/>
                                <label htmlFor="perItem">Per Item</label>
                            </div>
                        }
                        { this.state.goodsOrServicesSelected === "SERVICE" &&
                            <div>
                                <input type="radio" id="perHour" className="goodsAndServices" value="PERHOUR" name="rateType" onChange={this.rateType}/>
                                <label htmlFor="perHour">Per Hour</label>
                                <input type="radio" id="perDay" className="goodsAndServices" value="PERDAY" name="rateType" onChange={this.rateType}/>
                                <label htmlFor="perDay">Per Day</label>
                            </div>
                        }
                    </Form.Group>
                    <button className="btn btn-default goodsAndServicesButton goodsAndServicesButtonRight" onClick={this.handleSubmit} type="button">Save</button>
                    <button className="btn btn-default goodsAndServicesButton" onClick={this.props.handleCloseModal}>Close</button>
                </Form>
                           </ReactModal>
        );
    }
}

const props = {};

export default GoodsAndServicesModal;