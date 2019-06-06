import ReactModal from "react-modal";
import React from "react";
import { Form, Button } from 'react-bootstrap'
// import { Form, Button } from "react-bootstrap";


class EditPostsByUser extends React.Component {
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
        this.props.memberdashboardactions.updatePostsByUserAction(
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
                <h4 id="contained-modal-title" className="modal-title">Edit Post</h4>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label >Description</Form.Label>
                        <Form.Control type="text" onChange={this.description} value={this.props.allPostsByUser.description} />
                        <Form.Label>Rate</Form.Label>
                        <Form.Control type="text" onChange={this.rate} value={this.props.allPostsByUser.rate}/>
                        <Form.Label>Minimum</Form.Label>
                        <Form.Control type="text" onChange={this.minimum} value={this.props.allPostsByUser.minimum}/>
                        <Form.Label>Maximum</Form.Label>
                        <Form.Control type="text" onChange={this.maximum} value={this.props.allPostsByUser.maximum}/>
                    </Form.Group>
                    <button className="btn btn-default goodsAndServicesButton goodsAndServicesButtonRight" onClick={this.handleSubmit} type="button">Save</button>
                    <button className="btn btn-default goodsAndServicesButton" onClick={this.props.handleCloseModal}>Close</button>
                </Form>
            </ReactModal>
        );
    }
}

const props = {};

export default EditPostsByUser;