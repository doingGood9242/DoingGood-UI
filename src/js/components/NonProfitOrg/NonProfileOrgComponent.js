import React, { Component } from "react";
import {hashHistory, Link} from 'react-router';
import ReactModal from 'react-modal';
import doingGood from "../../../assests/images/home/DoingGood_logo_HERO_RGB.png";
import group_all from "../../../assests/images/home/group_full_cropped.jpg";
import senior_screen from "../../../assests/images/home/BOCOA_senior_screen_shot.jpg";
import creative_arts from "../../../assests/images/home/creative_arts_kids.png";
import otis_group from "../../../assests/images/home/otis_group.jpg";
import cloud6 from "../../../assests/images/dashboard/couch6_enlarged.jpg";
import rake_leave from "../../../assests/images/dashboard/Rake_leaves.jpg";
import dginsta from "../../../assests/images/home/dg-insta.png";
import dgfb from "../../../assests/images/home/dg-fb.png";
import dgtwitter from "../../../assests/images/home/dg-twitter.png";
import "../../../assests/sass/searchPosting.scss";
import {Col, Container, Row} from "react-bootstrap";
import doingGoodHero from "../../../assests/images/home/DoingGood_logo_HERO.png";


ReactModal.setAppElement('#app');

class NonProfileOrgComponent extends Component {
    constructor(props) {
        super(props);
        this.onPostServiceRequest=this.onPostServiceRequest.bind(this);
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
        this.onRadiusChange = this.onRadiusChange.bind(this);
        this.quickSearch = this.quickSearch.bind(this);
        this.resetSearchPost = this.resetSearchPost.bind(this);
        this.gotoOrgSignUp = this.gotoOrgSignUp.bind(this);
        this.gotosearchpostings = this.gotosearchpostings.bind(this);
        this.logout = this.logout.bind(this);
    }

    onPostServiceRequest(){
        this.props.searchPostingAction.searchPostServiceAction(
            0,
            "",
            this.state.quickSearchInput);
    }

    resetSearchPost(){
        this.props.organizationAction.getAllOrgsAction();
    }

    onRadiusChange(event){
        this.setState({ radiusSelected: event.target.value });
    }

    quickSearch(event){
        this.setState({quickSearchInput:event.target.value  });
    }
    gotosearchpostings (){
        hashHistory.push("/searchposting");
    }
    gotoOrgSignUp (){
        hashHistory.push("/orgsignup");
    }
    logout(){
        this.props.searchPostingAction.logoutUserAction();
    }

    render(){
        const radiusArray= ['5 miles','10 miles', '20 miles','25 miles', '50 miles', '100 miles','500 miles'];
        return(
            <div>
                <Container>
                    <Row>
                        <Col><Link to="/landingpage"><img src={doingGoodHero} width="auto" height="70px" className="imgcenter"/></Link></Col>
                        <Col><button className="btn btnPostOrange" onClick={this.gotosearchpostings}><span style={{'fontFamily':'Gotham-Book','fontSize':'16','color':'white'}}>Search Postings</span></button>
                        </Col>
                        <Col><Link to={this.props.session ? this.props.session.userRole === "ORGANIZATION"? "/organizationDashboard" :"/editVoluteerProfile" : "/login"} className="current"><span className="textcenter">My Dashboard</span></Link></Col>
                        <Col onClick={this.logout}><Link to= "/" className="current"><span className="textcenter logoutText">Logout</span></Link></Col>
                    </Row>
                </Container>
                <div>
                    <img src={ group_all } className="img-fluid img_guitar" alt="Search banner" />
                </div>
                <div className="dg-search bg-primary px-2 py-4 orangeOrgBar">
                    <p className="orgPostingButtonText">Find an amazing Non-Profit and Start DoingGood!</p>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm">
                                <div className="form-group m-0">
                                    <input className="form-control" type="text" placeholder="Quick Search" onChange={this.quickSearch}/>
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
                                <h3 className="content text-info mb-4">Organizatons</h3>
                                <div className="card bg-light pb-3">
                                    <div className="card-body">
                                        <p className="orgPostingButtonText">Do not see your<br/>favorite organization?</p>
                                        <button
                                            className="btn btn-info btn-shadow btn-block text-uppercase py-2 mb-3 font-weight-bold"
                                        >INVITE THEM TO SIGN UP!</button>
                                        <button
                                            className="btn btn-primary btn-shadow btn-block text-uppercase py-2 font-weight-bold"
                                            onClick={this.gotoOrgSignUp}>
                                            SIGNUP YOUR ORGANIZATION</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="card bg-light service-select">
                                    <div className="card-body">
                                        <p className="font-weight-bold text-center">All DoingGood Services & Goods Results and Other
                                            Postings</p>
                                        {this.props.getAllOrgs.map((org, index) => {
                                            return(
                                                <ul className="list-inline row">
                                                    <li className="list-inline-item col">
                                                        <div className="bg-white rounded">
                                                            <span className="">&bull;</span>{org.organizationName}
                                                        </div>
                                                    </li>
                                                    <li className="list-inline-item col">
                                                        <a href="javascript:void(0)" data-toggle="modal"
                                                           data-target="#postServices"
                                                           className="btn btn-info btn-block font-weight-bold goToThirePage" id={`data_ ${index}`} >Go to their page
                                                        </a>
                                                    </li>
                                                </ul>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="fiveimages col-sm col-12">
                            <img src={ senior_screen } alt="image" className="img-fluid"/>
                        </div>
                        <div className="fiveimages col-sm col-12">
                            <img src={creative_arts} alt="image" className="img-fluid"/>
                        </div>
                        <div className="fiveimages col-sm col-12">
                            <img src={otis_group} alt="image" className="img-fluid"/>
                        </div>
                        <div className="fiveimages col-sm col-12">
                            <img src={cloud6} alt="image" className="img-fluid"/>
                        </div>
                        <div className="fiveimages col-sm col-12">
                            <img src={rake_leave} alt="image" className="img-fluid"/>
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
export default NonProfileOrgComponent;