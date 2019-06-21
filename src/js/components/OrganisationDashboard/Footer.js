import React from 'react';
import paint_fence from "../../../assests/images/dashboard/paint_fence.jpg";
import tennis from "../../../assests/images/dashboard/tennis.jpg";
import kitchen_teach from "../../../assests/images/dashboard/kitchen_teach.jpg";
import cloud6 from "../../../assests/images/dashboard/couch6_enlarged.jpg";
import rake_leaves from "../../../assests/images/dashboard/Rake_leaves.jpg";
import {Link} from "react-router";
import dginsta from "../../../assests/images/home/dg-insta.png";
import dgfb from "../../../assests/images/home/dg-fb.png";
import dgtwitter from "../../../assests/images/home/dg-twitter.png";

const Footer = () =>{
    return(
        <React.Fragment>
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
                    <div className="col-sm-3 col-3 d-flex align-items-center">
                        <Link to="/usersignup" className="font-weight-bold text-white">JOIN</Link>
                    </div>
                    <div className="col-sm-3 col-4 d-flex align-items-center">
                        <Link to="/login" className="font-weight-bold text-white">Login</Link>
                    </div>
                    <div className="col-sm-3 col-5 d-flex align-items-center">
                        <Link to="/" className="font-weight-bold text-white">About DoingGood</Link>
                    </div>
                    <div className="col-sm-3 col-12">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <a href="#"><img src={dginsta} alt="logo" width="30"/></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#"><img src={dgfb} alt="logo" width="30"/></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#"><img src={dgtwitter} alt="logo" width="30"/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Footer;
