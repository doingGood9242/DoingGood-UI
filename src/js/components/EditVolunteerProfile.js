import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hashHistory }from "react-router";
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { Container, Row, Col} from 'react-bootstrap'
import doingGoodHero from "../../assests/images/home/DoingGood_logo_HERO.png";
import photoIcon from "../../assests/images/dashboard/Photo_icon.png";
import addphotoIcon from "../../assests/images/dashboard/add photo icon.png";
import "../../assests/sass/editVolunteerProfile.scss";
import loginActions from "../actions/loginActions";
import paint_fence from "../../assests/images/dashboard/paint_fence.jpg";
import tennis from "../../assests/images/dashboard/tennis.jpg";
import kitchen_teach from "../../assests/images/dashboard/kitchen_teach.jpg";
import cloud6 from "../../assests/images/dashboard/couch6_enlarged.jpg";
import rake_leaves from "../../assests/images/dashboard/Rake_leaves.jpg";
import dginsta from "../../assests/images/home/dg-insta.png";
import dgfb from "../../assests/images/home/dg-fb.png";
import dgtwitter from "../../assests/images/home/dg-twitter.png";
import GoodsAndServicesModal from "./GoodsAndServicesModal";
import searchPostingActions from "../actions/searchPostingActions";
import EditUserProfile from "./EditUserProfile";
import memberDashboardReducer from "../reducers/memberDashboardReducer";
import memberdashboardActions from "../actions/memberdashboardActions";
import EditPostsByUser from "./EditPostsByUser";

class EditVolunteerProfile extends Component{

    constructor(props) {
        super(props);
        this.state = {
            showOfferedModal: false,
            showInterestModal:false,
            showUserEditModal:false,
            showPostsByUserEditModal: false,
            showPostsByUserEditModalWanted: false,
            myPostIndex: 0,
            myPostIndexWanted: 0
        };
        this.handleOfferedOpenModal = this.handleOfferedOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleWantedOpenModal = this.handleWantedOpenModal.bind(this);
        this.gotosearchpostings=this.gotosearchpostings.bind(this);
        this.handleUserEditModal=this.handleUserEditModal.bind(this);
        this.handlePostbyUserModal=this.handlePostbyUserModal.bind(this);
        this.handleWantedPostbyUserModal=this.handleWantedPostbyUserModal.bind(this);
    }

    componentWillMount() {
        this.props.session.id &&
        this.props.memberdashboardactions.allPostingByUserIdAction(this.props.session.id);
    }

    handleOfferedOpenModal () {
        this.setState({ showOfferedModal: true });
    }
    handleWantedOpenModal () {
        this.setState({ showWantedModal: true });
    }
    handleUserEditModal (event) {
        this.setState({ showUserEditModal: true});
    }

    handlePostbyUserModal (event) {
        const id=parseInt(event.target.id.split("_")[1]);
        this.setState({ showPostsByUserEditModal: true, myPostIndex: id});
    }

    handleWantedPostbyUserModal (event) {
        const id=parseInt(event.target.id.split("_")[1]);
        this.setState({ showPostsByUserEditModalWanted: true, myPostIndexWanted: id});
    }
    handleCloseModal () {
        if(this.state.showPostsByUserEditModal || this.state.showPostsByUserEditModalWanted) {
            this.props.memberdashboardactions.allPostingByUserIdAction(this.props.session.id);
        }
        this.setState({
            showOfferedModal: false,
            showWantedModal:false,
            showUserEditModal:false,
            showPostsByUserEditModal:false,
            showPostsByUserEditModalWanted: false});
    }

    gotosearchpostings (){
        hashHistory.push("/searchposting");
    }

    render(){
        return(
                <div className="fullwidth">
                    <Container>
                        <Row>
                            <Col><Link to="/landingpage"><img src={doingGoodHero} width="auto" height="70px" className="imgcenter"/></Link></Col>
                            <Col><button className="btn btnPostOrange" onClick={this.gotosearchpostings}><span style={{'fontFamily':'Gotham-Book','fontSize':'16','color':'white'}}>Search Postings</span></button>
                            </Col>
                            <Col><Link to="/editVoluteerProfile" className="current"><span className="textcenter">My Dashboard</span></Link></Col>
                            <Col><Link to= "/login" className="current"><span className="textcenter logoutText">Logout</span></Link></Col>
                        </Row>
                    </Container>
                    <Row className="bgWelcomeMessage">
                        <Col md={1}>
                        </Col>
                        <Col md={1}>

                                <label htmlFor="file" className="addphotobtn">
                                    <img src={addphotoIcon} className=""/>
                                </label>
                                <img src={photoIcon} className="Photo_icon"/>
                                    {/*<input type="file" className="hide" id="file" name="file"/>*/}

                        </Col>
                        <Col md={7}>
                            <h3>Welcome, SOUTHERN ILLINOIS CARBONDALE</h3>
                            <p className="welcomeMessage">You are DoingGood by offering <br/>
                                your time, services and goods.</p>
                        </Col>
                        <Col><h3>Thank you for</h3><img src={doingGoodHero} width="auto" height="70px" className="imgcenter"/></Col>
                    </Row>
                <div className="show-grid orangeBar">
                    <label>DoingGood Member Dashboard</label>
                    <span className="pull-right">
                            <Link to="/completebasicprofile" className="White-anchor">
                            <u>Complete your basic profile</u>
                            </Link></span>
                </div>
                {/*
                    Card Readers Starts
                */}
                <div className="cardwidth row">
                    <div className="col-md-4 col-sm-12">
                        <div className="card w-auto">
                            <div className="card-body">
                                <ul className="nobullet">
                                    <li className="cardlabel-Orange">About ME <span className="pull-right"><a onClick={this.handleUserEditModal}>Edit</a></span></li>
                                    <li className="cardlabel">{this.props.session.firstName} {this.props.session.lastName}</li>
                                    <li className="cardlabel">{this.props.session.address1}, {this.props.session.address2}, {this.props.session.city}, {this.props.session.state}</li>
                                    <li className="cardlabel">{this.props.session.zipcode}</li>
                                    <li className="cardlabel">{this.props.session.aboutme}</li>
                                    <li className="cardlabel">{this.props.session.phoneNumber}</li>
                                    <li className="cardlabel">{this.props.session.email}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card w-auto">
                            <div className="card-body">
                                <h5 className="cardtitle">My Interested Charitable Organizations</h5>
                            </div>
                        </div>
                        <div className="card w-auto">
                            <div className="card-body">
                                <h5 className="cardtitle">My Doing Good Success</h5>
                                <ul className="nobullet">
                                <li className="cardLabel-raised">$$$ RAISED (to date)<span className="span-raised"> $0</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-12">
                        <div className="card w-auto">
                            <div className="card-body">
                                <h5 className="cardtitle">My accepted Volunteering Opportunities/purchased goods</h5>
                                {this.props.allPostDataByUserId && this.props.allPostDataByUserId.offeredGoodOrService.map((allPostsByUser) =>
                                    allPostsByUser.status === "ACCEPTED" ?
                                        <li className="cardlabel-Opportunities"><span
                                            className="label-black">{allPostsByUser.description}</span>
                                            <span className="pull-right label-black"> ${allPostsByUser.rate}/{allPostsByUser.rateType === "PERITEM" ? "item" : "hour"}</span>
                                        </li>: null
                                )
                                }
                                {this.props.allPostDataByUserId && this.props.allPostDataByUserId.wantedGoodOrService.map((allPostsByUser) =>
                                    allPostsByUser.status === "ACCEPTED" ?
                                        <li className="cardlabel-Opportunities"><span
                                            className="label-black">{allPostsByUser.description}</span>
                                            <span className="pull-right label-black"> ${allPostsByUser.rate}/{allPostsByUser.rateType === "PERITEM" ? "item" : "hour"}</span>
                                        </li>: null                                )
                                }
                                </div>
                        </div>
                        <div className="card w-auto">
                            <div className="card-body">
                                <h5 className="cardtitle">My POSTS</h5>
                                {this.props.allPostDataByUserId && this.props.allPostDataByUserId.offeredGoodOrService.map((allPostsByUser ,index) =>
                                    <li className="cardlabel-Opportunities" id={`userPost_ ${index}`} onClick={this.handlePostbyUserModal}>
                                        <span className="label-black" id={`descriptionUserPost_ ${index}`}>{allPostsByUser.description}</span>
                                        <span className="pull-right label-black" id={`rateUserPost_ ${index}`}> ${allPostsByUser.rate}/{allPostsByUser.rateType === "PERITEM" ? "item" : "hour"}</span>
                                    </li>
                                )
                                }
                                {this.props.allPostDataByUserId && this.props.allPostDataByUserId.wantedGoodOrService.map((allPostsByUser, index) =>
                                    <li className="cardlabel-Opportunities" id={`wantedUserPost_ ${index}`} onClick ={this.handleWantedPostbyUserModal}>
                                        <span className="label-black" id={`wantedDescriptionUserPost_ ${index}`}>{allPostsByUser.description}</span>
                                        <span className="pull-right label-black" id={`wantedRateUserPost_ ${index}`}> ${ allPostsByUser.rate }/{ allPostsByUser.rateType === "PERITEM" ? "item" : "hour" }</span>
                                    </li>
                                )
                                }
                            </div>
                        </div>
                        <div className="card w-auto">
                            <div className="card-body">
                                <h5 className="cardtitle">My PENDING Volunteering Opportunities/Purchased Goods</h5>
                                {this.props.allPostDataByUserId && this.props.allPostDataByUserId.offeredGoodOrService.map((allPostsByUser) =>
                                    allPostsByUser.status === "PENDING" ?
                                        <li className="cardlabel-Opportunities"><span
                                            className="label-black">{allPostsByUser.description}</span>
                                            <span className="pull-right label-black"> ${allPostsByUser.rate}/{allPostsByUser.rateType === "PERITEM" ? "item" : "hour"}</span>
                                        </li>: null
                                )
                                }
                                {this.props.allPostDataByUserId && this.props.allPostDataByUserId.wantedGoodOrService.map((allPostsByUser) =>
                                    allPostsByUser.status === "PENDING" ?
                                        <li className="cardlabel-Opportunities"><span
                                            className="label-black">{allPostsByUser.description}</span>
                                            <span className="pull-right label-black"> ${allPostsByUser.rate}/{allPostsByUser.rateType === "PERITEM" ? "item" : "hour"}</span>
                                        </li>: null
                                )
                                }
                                </div>
                        </div>
                    </div>
                </div>
                {/*
                    Post Buttons
                */}
                <div className="container cardwidth-button">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <button className="btn btn-primary buttonShadow" onClick={this.handleOfferedOpenModal}>
                                POST YOUR NEW<br/>
                                SERVICES OR GOODS TO DONATE
                            </button>
                            <GoodsAndServicesModal
                                showModal={this.state.showOfferedModal}
                                handleCloseModal={this.handleCloseModal}
                                searchPostingAction={this.props.searchPostingAction}
                                postType={'OFFERED'}
                                session={this.props.session}
                            />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <button className="btn btn-info buttonShadow button-pupple" onClick={this.handleWantedOpenModal}>
                                POST A WANTED<br/>
                                SERVICES OR GOODS TO PURCHASE
                            </button>
                            <GoodsAndServicesModal
                                showModal={this.state.showWantedModal}
                                handleCloseModal={this.handleCloseModal}
                                searchPostingAction={this.props.searchPostingAction}
                                postType={'WANTED'}
                                session={this.props.session}
                            />
                        </div>
                    </div>
                </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="fiveimages col-sm col-12">
                                <img src={ paint_fence } alt="image" className="img-fluid"/>
                            </div>
                            <div className="fiveimages col-sm col-12">
                                <img src={tennis} alt="image" className="img-fluid"/>
                            </div>
                            <div className="fiveimages col-sm col-12">
                                <img src={kitchen_teach} alt="image" className="img-fluid"/>
                            </div>
                            <div className="fiveimages col-sm col-12">
                                <img src={cloud6} alt="image" className="img-fluid"/>
                            </div>
                            <div className="fiveimages col-sm col-12">
                                <img src={rake_leaves} alt="image" className="img-fluid"/>
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
                    <EditUserProfile
                        showModal={this.state.showUserEditModal}
                        handleCloseModal={this.handleCloseModal}
                        session={this.props.session}
                    />
                    {this.props.allPostDataByUserId && this.props.allPostDataByUserId.offeredGoodOrService.length > 0 &&
                    <EditPostsByUser
                        showModal={this.state.showPostsByUserEditModal}
                        handleCloseModal={this.handleCloseModal}
                        allPostsByUser={this.props.allPostDataByUserId.offeredGoodOrService ? this.props.allPostDataByUserId.offeredGoodOrService[this.state.myPostIndex] : {}}
                        session={this.props.session}
                        memberdashboardactions={this.props.memberdashboardactions}

                    />
                    }
                    {this.props.allPostDataByUserId && this.props.allPostDataByUserId.wantedGoodOrService.length > 0 &&
                    <EditPostsByUser
                        showModal={this.state.showPostsByUserEditModalWanted}
                        handleCloseModal={this.handleCloseModal}
                        allPostsByUser={this.props.allPostDataByUserId.wantedGoodOrService ? this.props.allPostDataByUserId.wantedGoodOrService[this.state.myPostIndexWanted] : {}}
                        session={this.props.session}
                        memberdashboardactions={this.props.memberdashboardactions}
                    />
                    }
                </div>
        )
    }
}

function mapStateToProps(state){
    return{session:state.loginReducer.session,
        allPostDataByUserId:state.memberDashboardReducer.allPostDataByUserId};
}

function mapDispatchToProps(dispatch) {
    return {
        memberdashboardactions: bindActionCreators(memberdashboardActions, dispatch),
        searchPostingAction: bindActionCreators(searchPostingActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditVolunteerProfile);