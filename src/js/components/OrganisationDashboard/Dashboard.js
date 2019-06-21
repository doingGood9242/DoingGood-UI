import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hashHistory }from "react-router";
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import "../../../assests/sass/editVolunteerProfile.scss";
import paint_fence from "../../../assests/images/dashboard/paint_fence.jpg";
import tennis from "../../../assests/images/dashboard/tennis.jpg";
import kitchen_teach from "../../../assests/images/dashboard/kitchen_teach.jpg";
import cloud6 from "../../../assests/images/dashboard/couch6_enlarged.jpg";
import rake_leaves from "../../../assests/images/dashboard/Rake_leaves.jpg";
import dginsta from "../../../assests/images/home/dg-insta.png";
import dgfb from "../../../assests/images/home/dg-fb.png";
import dgtwitter from "../../../assests/images/home/dg-twitter.png";
import GoodsAndServicesModal from "../SearchPostings/GoodsAndServicesModal";
import searchPostingActions from "../../actions/searchPostingActions";
import EditUserProfile from "../UserDashboard/EditUserProfile";
import memberDashboardReducer from "../../reducers/memberDashboardReducer";
import memberdashboardActions from "../../actions/memberdashboardActions";
import EditPostsByUser from "../UserDashboard/EditPostsByUser";
import PendingPostModal from "../UserDashboard/PendingPostModal";

class Dashboard extends Component{

    constructor(props) {
        super(props);
        this.state = {
            showOfferedModal: false,
            showInterestModal:false,
            showUserEditModal:false,
            showPostsByUserEditModal: false,
            showPostsByUserEditModalWanted: false,
            myPostIndex: 0,
            myPostIndexWanted: 0,
            myPendingPostIndex: 0,
            myWantedPendingPostIndex: 0,
            showPendingPosts:false,
            showWantedPendingPosts:false
        };
        this.handleOfferedOpenModal = this.handleOfferedOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleWantedOpenModal = this.handleWantedOpenModal.bind(this);
        this.handleUserEditModal=this.handleUserEditModal.bind(this);
        this.handlePostbyUserModal=this.handlePostbyUserModal.bind(this);
        this.handleWantedPostbyUserModal=this.handleWantedPostbyUserModal.bind(this);
        this.handlePendingPosts=this.handlePendingPosts.bind(this);
        this.handleWantedPendingPosts=this.handleWantedPendingPosts.bind(this);
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
    handlePendingPosts (event) {
        const id=parseInt(event.target.id.split("_")[1]);
        this.setState({ showPendingPosts: true, myPendingPostIndex: id});
    }
    handleWantedPendingPosts (event) {
        const id=parseInt(event.target.id.split("_")[1]);
        this.setState({ showWantedPendingPosts: true, myWantedPendingPostIndex: id});
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
            showPostsByUserEditModalWanted: false,
            showPendingPosts:false,
            showWantedPendingPosts: false});
    }

    render(){
        return(
            <React.Fragment>
                <div className="cardwidth row">
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
                                {this.props.allPostDataByUserId && this.props.allPostDataByUserId.offeredGoodOrService.map((allPostsByUser,index) =>
                                    allPostsByUser.status === "PENDING" ?
                                        <li className="cardlabel-Opportunities" id={`pendingPosts_ ${index}`} onClick={this.handlePendingPosts}>
                                            <span className="label-black" id={`pendingPostsDes_ ${index}`}>{allPostsByUser.description}</span>
                                            <span className="pull-right label-black" id={`pendingPostsRate_ ${index}`}> ${allPostsByUser.rate}/{allPostsByUser.rateType === "PERITEM" ? "item" : "hour"}</span>
                                        </li>: null
                                )
                                }
                                {this.props.allPostDataByUserId && this.props.allPostDataByUserId.wantedGoodOrService.map((allPostsByUser, index) =>
                                    allPostsByUser.status === "PENDING" ?
                                        <li className="cardlabel-Opportunities" id={`pendingPostsWanted_ ${index}`} onClick={this.handleWantedPendingPosts}><span
                                            className="label-black" id={`pendingPostswantedDes_ ${index}`}>{allPostsByUser.description}</span>
                                            <span className="pull-right label-black" id={`pendingPostsRate_ ${index}`}> ${allPostsByUser.rate}/{allPostsByUser.rateType === "PERITEM" ? "item" : "hour"}</span>
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
                {this.props.allPostDataByUserId && this.props.allPostDataByUserId.offeredGoodOrService.length > 0 &&
                <PendingPostModal
                    showModal={this.state.showPendingPosts}
                    handleCloseModal={this.handleCloseModal}
                    allPostsByUser={this.props.allPostDataByUserId.offeredGoodOrService ? this.props.allPostDataByUserId.offeredGoodOrService[this.state.myPendingPostIndex] : {}}
                    session={this.props.session}
                    memberdashboardactions={this.props.memberdashboardactions}
                />
                }
                {this.props.allPostDataByUserId && this.props.allPostDataByUserId.wantedGoodOrService.length > 0 &&
                <PendingPostModal
                    showModal={this.state.showWantedPendingPosts}
                    handleCloseModal={this.handleCloseModal}
                    allPostsByUser={this.props.allPostDataByUserId.wantedGoodOrService ? this.props.allPostDataByUserId.wantedGoodOrService[this.state.myWantedPendingPostIndex] : {}}
                    session={this.props.session}
                    memberdashboardactions={this.props.memberdashboardactions}
                />
                }
            </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
