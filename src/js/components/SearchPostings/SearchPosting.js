import React, { Component } from "react";
import { Link } from 'react-router';
import ReactModal from 'react-modal';
import doingGood from "../../../assests/images/home/DoingGood_logo_HERO_RGB.png";
import guitar from "../../../assests/images/home/teach_guitar-bright.jpg";
import skateImg from "../../../assests/images/search/skateboard_teach-min.jpg";
import teen_girl from "../../../assests/images/search/teen_girl_smile_glasses-min.jpg";
import WalkingDog from "../../../assests/images/search/WalkingDog-min.jpg";
import kid_teen_babysite from "../../../assests/images/search/kid_teen_babysite_window-min.jpg";
import clean_floor from "../../../assests/images/search/clean_floor-min.jpg";
import dginsta from "../../../assests/images/home/dg-insta.png";
import dgfb from "../../../assests/images/home/dg-fb.png";
import dgtwitter from "../../../assests/images/home/dg-twitter.png";
import "../../../assests/sass/searchPosting.scss";
import GoodsAndServicesModal from "./GoodsAndServicesModal";
import ShowInterestModal from "./ShowInterestModal";
import {Col, Container, Row} from "react-bootstrap";
import doingGoodHero from "../../../assests/images/home/DoingGood_logo_HERO.png";


ReactModal.setAppElement('#app');

class SearchPosting extends Component {
    constructor(props) {
        super(props);
        this.onPostServiceRequest=this.onPostServiceRequest.bind(this);
        this.handleCloseModal=this.handleCloseModal.bind(this);
        this.state = {
            showOfferedModal: false,
            showInterestModal:false,
            showWantedInterestModal:false,
            showWantedModal:false,
            radiusSelected:'',
            dateIndex:0,
            zipdisabled:false,
            orgArray: props.getAllOrgs,
            wanteddateIndex: 0,
            postingType:null,
            quickSearchInput:'',
            orgSelected:0
        };
        this.props.organizationAction.getAllOrgsAction();
        this.handleOfferedOpenModal = this.handleOfferedOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleWantedOpenModal = this.handleWantedOpenModal.bind(this);
        this.handleShowIntersrOpenModal = this.handleShowIntersrOpenModal.bind(this);
        this.handleShowIntersrWantedOpenModal = this.handleShowIntersrWantedOpenModal.bind(this);
        this.onRadiusChange = this.onRadiusChange.bind(this);
        this.onOrgChange = this.onOrgChange.bind(this);
        this.postingTypeSearch = this.postingTypeSearch.bind(this);
        this.quickSearch = this.quickSearch.bind(this);
        this.resetSearchPost = this.resetSearchPost.bind(this);
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
    handleShowIntersrWantedOpenModal (event) {
        const id=parseInt(event.target.id.split("_")[1]);
        this.setState({ showWantedInterestModal: true, wanteddateIndex: id});
    }

    handleCloseModal () {
        this.setState({ showOfferedModal: false,
            showInterestModal:false,
            showWantedInterestModal:false,
            showWantedModal:false});
    }

    onPostServiceRequest(){
        this.props.searchPostingAction.searchPostServiceAction(
            this.state.orgSelected,
            this.state.postingType,
            this.state.quickSearchInput);
    }

    resetSearchPost(){
        this.props.searchPostingAction.allPostingServiceAction();
        this.setState({ postingType:null,
            quickSearchInput:'',
            orgSelected:0})
    }

    onRadiusChange(event){
        this.setState({ radiusSelected: event.target.value });
    }
    onOrgChange(event){
        if(event.target.value === "Select Org") {
            this.setState({orgSelected: event.target.value, zipdisabled: false});
        }else{
            this.setState({orgSelected: event.target.value, zipdisabled:true });
        }
    }

    postingTypeSearch(event){
            this.setState({postingType: event.target.value });
    }
    quickSearch(event){
        this.setState({quickSearchInput:event.target.value  });
    }

    render(){
        const radiusArray= ['5 miles','10 miles', '20 miles','25 miles', '50 miles', '100 miles','500 miles'];
        const orgArray= ['Child care','Child care', 'Child care','Child care', 'Child care', 'Child care','Child care'];
        return(
           <div>
               <Container>
                   <Row>
                       <Col><Link to="/landingpage"><img src={doingGoodHero} width="auto" height="70px" className="imgcenter"/></Link></Col>
                       <Col><button className="btn btnPostOrange" onClick={this.gotosearchpostings}><span style={{'fontFamily':'Gotham-Book','fontSize':'16','color':'white'}}>Search Postings</span></button>
                       </Col>
                       <Col><Link to={this.props.session.userRole === "ORGANIZATION"? "/organizationDashboard" :"/editVoluteerProfile"} className="current"><span className="textcenter">My Dashboard</span></Link></Col>
                       <Col><Link to= "/login" className="current"><span className="textcenter logoutText">Logout</span></Link></Col>
                   </Row>
               </Container>
               <div>
                <img src={ guitar } className="img-fluid img_guitar" alt="Search banner" />
               </div>
                <div className="dg-search bg-primary px-2 py-4">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm">
                                <div className="form-group m-0">
                                    <input className="form-control" type="text" placeholder="Quick Search" onChange={this.quickSearch}/>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="form-group m-0">
                                    <select className="form-control" onChange={this.postingTypeSearch}>
                                        <option value="WANTED">Service Required</option>
                                        <option value="OFFERED">Service Offered</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="form-group m-0">
                                    <select className="form-control" value={this.state.orgSelected} onChange={this.onOrgChange}>
                                        <option>Select Org</option>
                                        {this.props.getAllOrgs.map((org)=>
                                            <option value={org.id}>{org.organizationName}</option>
                                        )}

                                    </select>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="form-group m-0">
                                    <select className="form-control" value={this.state.radiusSelected} onChange={this.onRadiusChange} disabled={this.state.zipdisabled}>
                                        <option>Select Radius</option>
                                        {radiusArray.map((rules)=>
                                        <option>{rules}</option>
                                        )}
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="form-group m-0">
                                    <input className="form-control" type="text" placeholder="Zip Code" disabled={this.state.zipdisabled}/>
                                </div>
                            </div>
                            <div className="col-sm">
                                <button className="btn btn-default goodsAndServicesButton goodsAndServicesButtonRight" onClick={this.resetSearchPost}>Reset</button>
                                <button className="btn btn-default goodsAndServicesButton" onClick={this.onPostServiceRequest}>Search</button>
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
                                            session={ this.props.session}
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
                                            session={ this.props.session}
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
                                                    <li className="list-inline-item col">
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
                                                                session={ this.props.session}
                                                                searchPostingAction={this.props.searchPostingAction}
                                                            />
                                                        </li>
                                                    </ul>
                                                    );
                                            })}

                                        <p className="font-weight-bold text-center">Goods and Services Wanted</p>
                                        {this.props.allPostData.wantedGoodOrService.map((posts, index) => {
                                            return(<ul className="list-inline row">
                                                <li className="list-inline-item col">
                                                    <div className="bg-secondary text-white rounded"><span
                                                        className="">&bull;</span> {posts.description}
                                                    </div>
                                                </li>
                                                <li className="list-inline-item col">
                                                    <a href="javascript:void(0)"
                                                        data-toggle="modal"
                                                        data-target="#postServices"
                                                        className="btn btn-info btn-block font-weight-bold" id={`goodsdata_ ${index}`} onClick={this.handleShowIntersrWantedOpenModal}>Select
                                                    </a>
                                                    <ShowInterestModal
                                                        showInterestModal={this.state.showWantedInterestModal}
                                                        handleCloseModal={this.handleCloseModal}
                                                        posts={this.props.allPostData ? this.props.allPostData.wantedGoodOrService[this.state.wanteddateIndex] : {}}
                                                        session={ this.props.session}
                                                        searchPostingAction={this.props.searchPostingAction}
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
                        <div className="col-sm-3 col-3 d-flex align-items-center"><Link to="/usersignup"
                                                                                     className="font-weight-bold text-white">JOIN</Link>
                        </div>
                        <div className="col-sm-3 col-4 d-flex align-items-center"><Link to="/login"
                                                                                     className="font-weight-bold text-white">Login</Link>
                        </div>
                        <div className="col-sm-3 col-5 d-flex align-items-center"><Link to="/" className="font-weight-bold text-white">About
                            DoingGood</Link></div>
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
           </div>
    );
    }
    }
export default SearchPosting;