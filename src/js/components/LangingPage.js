import React, { Component } from "react";
import { Link } from 'react-router';
import doingGoodImg from "../../assests/images/home/DoingGood_logo_HERO.png";
import carWash from "../../assests/images/home/Car_Wash_Girl_607494242.jpg";
import itsEasy from "../../assests/images/home/ITS_EASY.png";
import oldDonate from "../../assests/images/home/olddonate.png";
import arrows from "../../assests/images/home/arrows.jpg";
import oldPurchase from "../../assests/images/home/oldpurchase_time.png";
import equalTo from "../../assests/images/home/equal_to.jpg";
import nonProfit from "../../assests/images/home/non_profit.png";
import walkingDog from "../../assests/images/home/Walking_Dog-512457253.png";
import teachPiano from "../../assests/images/home/Teach_Piano-96162171.png";
import groupImg from "../../assests/images/home/group-510486410.png";
import aaManSmile from "../../assests/images/home/AA_Man_smile.png";
import teachQuitar from "../../assests/images/home/teach_guitar-bright.jpg";
import tennisHigh from "../../assests/images/home/tennis_high_five.png";
import closeUp from "../../assests/images/home/closeup_lawnmower.jpg";
import youCan from "../../assests/images/home/you_can.png";
import dginsta from "../../assests/images/home/dg-insta.png";
import dgfb from "../../assests/images/home/dg-fb.png";
import dgtwitter from "../../assests/images/home/dg-twitter.png";
import GoodsAndServicesModal from "./GoodsAndServicesModal";
import RedirectToLoginModal from "./RedirectToLoginModal";


class LandingPage extends Component {
    constructor() {
        super();
        this.state = {
            showOfferedModal: false,
        };
        this.handleCloseModal=this.handleCloseModal.bind(this);
        this.handleOfferedOpenModal=this.handleOfferedOpenModal.bind(this);
    }
    handleOfferedOpenModal () {
        this.setState({ showOfferedModal: true });
    }
    handleCloseModal () {
        this.setState({ showOfferedModal: false});
    }
    render() {
        return (
            <div>
                <div className="container-fluid d-block d-sm-none">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="#">
                            <img src={doingGoodImg} alt="logo" width="80"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto text-right">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Start Doing Good</a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Member Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/searchposting">Search Postings</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="container-fluid d-none d-sm-block">
                    <div className="d-flex flex-row justify-content-around align-items-center py-3">
                        <div><Link to='/landingpage'><img src={doingGoodImg} alt="logo" width="120"/></Link></div>
                        <div>
                            <div
                                className="text-uppercase border-primary border rounded text-center f-18 py-1 px-2 font-weight-bold">
                                <Link to="/usersignup">
                                    <div className="text-info">Start</div>
                                    <div className="text-primary">Doing good</div>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <Link to="/login" className="font-weight-bold f-16 text-center">
                                <div className="text-info text-uppercase">Member</div>
                                <div className="text-primary">Login</div>
                            </Link>
                        </div>
                        <div><Link className="btn btn-primary btn-shadow py-2 px-5 f-16 font-weight-bold"
                                to="/searchposting">Search Postings</Link></div>
                    </div>
                </div>
                <div>
                    <img src={carWash} className="img-fluid" alt="Home banner"/>
                </div>
                <div className="container dg-about">
                    <div className="row">
                        <div className=" d-flex align-items-center col-sm-2 col-xs-12 ">
                            <img src={doingGoodImg} alt="logo" width="100%" className=" d-none d-sm-block"/>
                        </div>
                        <div className="d-flex align-items-center col-sm-10 col-xs-12">
                            <p className="m-0"><span className="text-primary">DoingGood</span> is a platform that
                                empowers YOU to use YOUR time, talents and resources to raise money for the worthy
                                causes you are passionate about.</p>
                        </div>
                    </div>
                </div>
                <div className="container dg-itseasy">
                    <div className="text-center row">
                        <div className="col-sm col-12 d-flex flex-column align-items-center justify-content-center">
                            <div><img src={itsEasy} alt="ITS_EASY" width="120"/></div>
                            <Link to="/usersignup"><button className="btn btn-primary btn-shadow btn-pill font-weight-bold px-5 py-2 mt-3"> GET
                                                                                                                          STARTED
                            </button></Link>
                        </div>
                        <div className="col-sm col-3">
                            <img src={oldDonate} alt="logo" width="130"/>
                        </div>
                        <div className="col-sm col-1 d-flex align-items-center justify-content-center">
                            <img src={arrows} alt="logo" width="80"/>
                        </div>
                        <div className="col-sm col-3">
                            <img src={oldPurchase} alt="logo" width="130"/>
                        </div>
                        <div className="col-sm col-1 d-flex align-items-center justify-content-center">
                            <img src={equalTo} alt="logo" width="50"/>
                        </div>
                        <div className="col-sm col-3">
                            <img src={nonProfit} alt="logo" width="130"/>
                        </div>
                    </div>
                </div>
                <div className="container dg-showgrid">
                    <div className="row">
                        <div className="col-sm-2 col-xs-12">
                            <img src={walkingDog} alt="logo" width="130"/>
                        </div>
                        <div className="col-sm-6 col-xs-12">
                            <p className="text-primary font-weight-bold f-18">Donate your Time, Talents, Services or
                                Goods:</p>
                            <p className="m-0 f-16">Every person has a talent to contribute no matter how small. Every
                                person has value. YOU can offer a service or good, select the organization or cause you
                                want to support, and once the transaction is completed the payment will be sent directly
                                to the beneficiary of your choice!</p>
                        </div>
                        <div
                            className="col-sm-4 col-xs-12 d-flex flex-column align-items-center justify-content-center">
                            <div
                                className="btn btn-primary btn-shadow btn-pill text-uppercase py-2 px-5 font-weight-bold" onClick={this.handleOfferedOpenModal}>Post
                                your Service or goods
                            </div>
                            {this.props.idToken ?
                                <GoodsAndServicesModal
                                    showModal={this.state.showOfferedModal}
                                    handleCloseModal={this.handleCloseModal}
                                />
                                :
                                <RedirectToLoginModal
                                    showModal={this.state.showOfferedModal}
                                    handleCloseModal={this.handleCloseModal}
                                />
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2 col-xs-12">
                            <img src={teachPiano} alt="logo" width="130"/>
                        </div>
                        <div className="col-sm-6 col-xs-12">
                            <p className="text-primary font-weight-bold f-18">Purchase Services or Goods:</p>
                            <p className="m-0 f-16">From time to time everyone is in need of a particular service or
                                good. Why not search the DoingGood network first for what you are looking to pay for?
                                Hiring a DoingGood member or purchasing an item through the DoingGood platform allows
                                the money you spend to directly benefit a worthy cause.</p>
                        </div>
                        <div
                            className="col-sm-4 col-xs-12 d-flex flex-column align-items-center justify-content-center">
                            <div
                                className="btn btn-primary btn-shadow btn-pill text-uppercase py-2 px-5 font-weight-bold" onClick={this.handleOfferedOpenModal}>POST
                                A SERVICE OR GOODS
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2 col-xs-12">
                            <img src={groupImg} alt="logo" width="130"/>
                        </div>
                        <div className="col-sm-6 col-xs-12">
                            <p className="text-primary font-weight-bold f-18">Benefit your Community, Organization or
                                Cause</p>
                            <p className="m-0 f-16">The best part about volunteering your time, talents, services and
                                goods through The best part about volunteering your time, talents, services and goods
                                through DoingGood is that YOU get to choose the beneficiary of your good deeds! Search
                                our list of organizations and causes to choose where you want your donated funds go. You
                                can also search current opportunities available that benefit your cause.</p>
                        </div>
                        <div
                            className="col-sm-4 col-xs-12 d-flex flex-column align-items-center justify-content-center">
                            <div
                                className="btn btn-primary btn-shadow btn-pill text-uppercase py-2 px-5 font-weight-bold">List
                                of All Non-Profits
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2 col-xs-12">
                            <img src={aaManSmile} alt="logo" width="130"/>
                        </div>
                        <div className="col-sm-6 col-xs-12">
                            <p className="text-primary font-weight-bold f-18">Sign up your Organization or Cause:</p>
                            <p className="mb-2 f-16">Sign up your organization or cause* now and let DoingGood connect
                                you with good people who are passionate resource for your cause! Your supporters can
                                easily choose you as the recipient of donations received through their volunteering and
                                sale of goods. You can also post your current volunteer opportunities and track
                                volunteer hours and donations.</p>
                            <p className="m-0"><i>*DoingGood is not just for registered non-profit organizations. A
                                cause can include anything that you are passionate about, such as community project,
                                building a memorial, fundraising for a family in need, etc.</i></p>
                        </div>
                        <div
                            className="col-sm-4 col-xs-12 d-flex flex-column align-items-center justify-content-center">
                            <Link to="/orgsignup"><div
                                className="btn btn-primary btn-shadow btn-pill text-uppercase py-2 px-5 font-weight-bold">Organization
                                Sign-up
                            </div></Link>
                        </div>
                    </div>
                </div>
                <div className="container-fluid dg-slider">
                    <div className="row">
                        <div className="col-sm-3 col">
                            <img src={teachQuitar} alt="image" className="img-fluid"/>
                        </div>
                        <div className="col-sm-3 col">
                            <img src={tennisHigh} alt="image" className="img-fluid"/>
                        </div>
                        <div className="col-sm-3 col">
                            <img src={closeUp} alt="image" className="img-fluid"/>
                        </div>
                        <div className="col-sm-3 col">
                            <img src={teachQuitar} alt="image" className="img-fluid"/>
                        </div>
                    </div>
                </div>
                <div className="container dg-youcan">
                    <div className="row">
                        <div className=" col-sm-2 col-xs-12">
                            <img src={youCan} alt="logo" width="170"/><br/>
                            <Link to="/usersignup"><div
                                className="btn btn-primary btn-shadow btn-pill text-uppercase py-2 px-5 mt-3 font-weight-bold">Join
                                Now
                            </div></Link>
                        </div>
                        <div className="col-sm-10 col-xs-12">
                            <ul className="list-inline">
                                <li className="list-inline-item"><span
                                    className="text-danger">&bull;</span> Professional Help (Legal, accounting, we
                                    design, consulting)
                                </li>
                                <li className="list-inline-item"><span className="text-danger">&bull;</span> Cooking for
                                    a group
                                </li>
                                <li className="list-inline-item"><span className="text-danger">&bull;</span> Babysitting
                                </li>
                                <li className="list-inline-item"><span className="text-danger">&bull;</span> Photography
                                </li>
                                <li className="list-inline-item"><span className="text-danger">&bull;</span> Dog Walking
                                </li>
                                <li className="list-inline-item"><span className="text-danger">&bull;</span> Yard Work
                                </li>
                                <li className="list-inline-item"><span className="text-danger">&bull;</span> Tutoring
                                </li>
                                <li className="list-inline-item"><span className="text-danger">&bull;</span> Sports
                                    Lessons
                                </li>
                                <li className="list-inline-item"><span className="text-danger">&bull;</span> Area Guide
                                </li>
                                <li className="list-inline-item"><span className="text-danger">&bull;</span> Packing /
                                    Moving
                                </li>
                                <li className="list-inline-item"><span className="text-danger">&bull;</span> Perform for
                                    an event (music, magician, face painting)
                                </li>
                                <li className="list-inline-item"><span className="text-danger">&bull;</span> Organizing
                                </li>
                                <li className="list-inline-item"><span className="text-danger">&bull;</span> Project
                                    Assistance
                                </li>
                                <li className="list-inline-item"><span className="text-danger">&bull;</span> Arts /
                                    Crafts
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid dg-footer bg-primary py-3">
                    <div className="row">
                        <div className="col-sm-3 col-3 d-flex align-items-center">
                            <Link to="/usersignup" className="font-weight-bold text-white">JOIN</Link>
                        </div>
                        <div className="col-sm-3 col-4 d-flex align-items-center">
                            <Link to="/login" className="font-weight-bold text-white">Login</Link>
                        </div>
                        <div className="col-sm-3 col-5 d-flex align-items-center">
                            <Link href="/" className="font-weight-bold text-white">About
                            DoingGood</Link></div>
                        <div className="col-sm-3 col-12">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item"><a href="#"><img src={dginsta} alt="logo"
                                                                                  width="30"/></a></li>
                                <li className="list-inline-item"><a href="#"><img src={dgfb} alt="logo"
                                                                                  width="30"/></a></li>
                                <li className="list-inline-item"><a href="#"><img src={dgtwitter} alt="logo"
                                                                                  width="30"/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;
