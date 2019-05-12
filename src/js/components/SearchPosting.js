import React, { Component } from "react";
import { Link } from 'react-router';
import ReactModal from 'react-modal';
import doingGood from "../../assests/images/home/DoingGood_logo_HERO_RGB.png";
import guitar from "../../assests/images/home/teach_guitar-bright.jpg";
import skateImg from "../../assests/images/search/skateboard_teach-min.jpg";
import teen_girl from "../../assests/images/search/teen_girl_smile_glasses-min.jpg";
import WalkingDog from "../../assests/images/search/WalkingDog-min.jpg";
import kid_teen_babysite from "../../assests/images/search/kid_teen_babysite_window-min.jpg";
import clean_floor from "../../assests/images/search/clean_floor-min.jpg";
import dginsta from "../../assests/images/home/dg-insta.png";
import dgfb from "../../assests/images/home/dg-fb.png";
import dgtwitter from "../../assests/images/home/dg-twitter.png";
import "../../assests/sass/searchPosting.scss";
import GoodsAndServicesModal from "./GoodsAndServicesModal";
import ShowInterestModal from "./ShowInterestModal";


ReactModal.setAppElement('#app');

class SearchPosting extends Component {
    constructor(props) {
        super(props);
        this.onPostServiceRequest=this.onPostServiceRequest.bind(this);
        this.handleCloseModal=this.handleCloseModal.bind(this);
        console.log("prop" + props.showModalFlag);
        this.state = {
            showOfferedModal: false,
            showInterestModal:false,
            showWantedModal:false,
            radiusSelected:'',
            dateIndex:0
        };

        this.handleOfferedOpenModal = this.handleOfferedOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleWantedOpenModal = this.handleWantedOpenModal.bind(this);
        this.handleShowIntersrOpenModal = this.handleShowIntersrOpenModal.bind(this);
        this.onRadiusChange = this.onRadiusChange.bind(this);
        this.onOrgChange = this.onOrgChange.bind(this);
    }

    handleOfferedOpenModal () {
        this.setState({ showOfferedModal: true });
    }
    handleWantedOpenModal () {
        this.setState({ showWantedModal: true });
    }

    handleShowIntersrOpenModal (event) {
        const id=parseInt(event.target.id.split("_")[1]);
        this.setState({ showInterestModal: true, dateIndex: id});
    }

    handleCloseModal () {
        this.setState({ showModal: false,
            showInterestModal:false,
            showWantedModal:false});
    }

    onPostServiceRequest(){
        this.props.searchPostingAction.postServiceRequestAction();
    }

    onRadiusChange(event){
        this.setState({ radiusSelected: event.target.value });
    }
    onOrgChange(event){
        this.setState({ orgSelected: event.target.value });
    }

    render(){
        const radiusArray= ['5 miles','10 miles', '20 miles','25 miles', '50 miles', '100 miles','500 miles'];
        const orgArray= ['Child care','Child care', 'Child care','Child care', 'Child care', 'Child care','Child care'];
        return(
           <div>
               {
                   console.log(this.props.allPostData.offeredGoodOrService)
               }
               <div>
                <img src={ guitar } className="img-fluid img_guitar" alt="Search banner" />
               </div>
                <div className="dg-search bg-primary px-2 py-4">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm">
                                <div className="form-group m-0">
                                    <input className="form-control" type="text" placeholder="Quick Search"/>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="form-group m-0">
                                    <select className="form-control">
                                        <option>Service Required</option>
                                        <option>Service Offered</option>

                                    </select>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="form-group m-0">
                                    <select className="form-control" value={this.state.orgSelected} onChange={this.onOrgChange}>
                                        <option>Select Org</option>
                                        {orgArray.map((org)=>
                                            <option>{org}</option>
                                        )}

                                    </select>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="form-group m-0">
                                    <select className="form-control" value={this.state.radiusSelected} onChange={this.onRadiusChange}>
                                        <option>Select Radius</option>
                                        {radiusArray.map((rules)=>
                                        <option>{rules}</option>
                                        )}

                                    </select>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="form-group m-0">
                                    <input className="form-control" type="text" placeholder="Zip Code"/>
                                </div>
                            </div>
                            <div className="col-sm">
                                <button className="btn btn-default goodsAndServicesButton goodsAndServicesButtonRight" >Reset</button>
                                <button className="btn btn-default goodsAndServicesButton">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dg-services mb-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 text-center">
                                <img src={ doingGood } alt="logo" width="200" className=""/>
                                <h3 className="content text-info mb-4">Services & Goods</h3>
                                <div className="card bg-light pb-3">
                                    <div className="card-body">
                                        <p className="content text-info font-weight-bold">Did not find what you want?</p>
                                        <button
                                           className="btn btn-info btn-shadow btn-block text-uppercase py-2 mb-3 font-weight-bold"
                                           onClick={this.handleOfferedOpenModal}
                                        >Post a work request</button>
                                        <GoodsAndServicesModal
                                            showModal={this.state.showOfferedModal}
                                            handleCloseModal={this.handleCloseModal}
                                            searchPostingAction={this.props.searchPostingAction}
                                            postType={'OFFERED'}
                                        />
                                        <p className="content text-info font-weight-bold">Want to donate your service<br/> or good?</p>
                                        <button
                                           className="btn btn-primary btn-shadow btn-block text-uppercase py-2 font-weight-bold" onClick={this.handleWantedOpenModal}>Post a
                                            service or good</button>
                                        <GoodsAndServicesModal
                                            showModal={this.state.showWantedModal}
                                            handleCloseModal={this.handleCloseModal}
                                            searchPostingAction={this.props.searchPostingAction}
                                            postType={'WANTED'}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="card bg-light service-select">
                                    <div className="card-body">
                                        <p className="font-weight-bold text-center">All DoingGood Services & Goods Results and Other
                                            Postings</p>
                                            {this.props.allPostData.offeredGoodOrService.map((posts, index) => {
                                                return(
                                                    <ul className="list-inline row">
                                                    <li className="list-inline-item col-8 col-sm-7">
                                                        <div className="bg-white rounded">
                                                            <span className="">&bull;</span>{posts.description}
                                                        </div>
                                                    </li>
                                                        <li className="list-inline-item col">
                                                            <a href="javascript:void(0)" data-toggle="modal"
                                                               data-target="#postServices"
                                                               className="btn btn-info btn-block font-weight-bold" id={`data_ ${index}`}  onClick={this.handleShowIntersrOpenModal}>Select
                                                            </a>
                                                            <ShowInterestModal
                                                                showInterestModal={this.state.showInterestModal}
                                                                handleCloseModal={this.handleCloseModal}
                                                                posts={this.props.allPostData ? this.props.allPostData.offeredGoodOrService[this.state.dateIndex] : {}}
                                                            />
                                                        </li>
                                                    </ul>
                                                    );
                                            })}

                                        <p className="font-weight-bold text-center">Goods and Services Wanted</p>
                                        {this.props.allPostData.wantedGoodOrService.map((posts, index) => {
                                            return(<ul className="list-inline row">
                                                <li className="list-inline-item col-8 col-sm-7">
                                                    <div className="bg-secondary text-white rounded"><span
                                                        className="">&bull;</span> {posts.description}
                                                    </div>
                                                </li>
                                                <li className="list-inline-item col">
                                                    <a href="javascript:void(0)"
                                                        data-toggle="modal"
                                                        data-target="#postServices"
                                                        className="btn btn-info btn-block font-weight-bold" id={`goodsdata_ ${index}`} onClick={this.handleShowIntersrOpenModal}>Select
                                                    </a>
                                                    <ShowInterestModal
                                                        showInterestModal={this.state.showInterestModal}
                                                        handleCloseModal={this.handleCloseModal}
                                                        posts={posts}
                                                    />
                                                </li>
                                            </ul>);
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid dg-slider">
                    <div className="row">
                        <div className="col-sm col-12">
                            <img src={ skateImg } alt="image" className="img-fluid"/>
                        </div>
                        <div className="col-sm col-12">
                            <img src={teen_girl} alt="image" className="img-fluid"/>
                        </div>
                        <div className="col-sm col-12">
                            <img src={WalkingDog} alt="image" className="img-fluid"/>
                        </div>
                        <div className="col-sm col-12">
                            <img src={kid_teen_babysite} alt="image" className="img-fluid"/>
                        </div>
                        <div className="col-sm col-12">
                            <img src={clean_floor} alt="image" className="img-fluid"/>
                        </div>
                    </div>
                </div>
                <div className="container-fluid dg-footer bg-primary py-3">
                    <div className="row">
                        <div className="col-sm-3 col-3 d-flex align-items-center"><a href="#"
                                                                                     className="font-weight-bold text-white">JOIN</a>
                        </div>
                        <div className="col-sm-3 col-4 d-flex align-items-center"><a href="#"
                                                                                     className="font-weight-bold text-white">Login</a>
                        </div>
                        <div className="col-sm-3 col-5 d-flex align-items-center"><a href="#" className="font-weight-bold text-white">About
                            DoingGood</a></div>
                        <div className="col-sm-3 col-12">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item"><a href="#"><img src={dginsta} alt="logo" width="30"/></a>
                                </li>
                                <li className="list-inline-item"><a href="#"><img src={dgfb} alt="logo" width="30"/></a></li>
                                <li className="list-inline-item"><a href="#"><img src={dgtwitter} alt="logo" width="30"/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="postServices" className="modal fade" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Show Interest</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p className="font-weight-bold">Post Details</p>
                                <p>Goods/Service:bike for sale</p>
                                <p>Description:Mens bike for sale, comfort bike. </p>
                                <p>Rate:</p>
                                <p>Rate Type:perhour</p>
                                <p>Please <Link to="/">Login</Link> to Continue.</p>
                                <br/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
    );
    }
    }
export default SearchPosting;