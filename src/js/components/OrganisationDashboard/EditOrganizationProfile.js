import React from 'react';
import EditUserProfile from "../UserDashboard/EditUserProfile";
import EditOrgProfile from "./EditOrgProfile";

const EditOrganizationProfile = (props) =>{
    const { organization, actions, isModalOpen } = props;
    return(
        <div className="col-md-4 col-sm-12">
            <div className="card w-auto">
                <div className="card-body">
                    <ul className="nobullet">
                        <li className="cardlabel-Orange">About Me
                            <span className="pull-right">
                                <a onClick={actions.openModal}>Edit</a>
                            </span></li>{/*Need to write click event*/}
                        <li className="cardlabel">{organization.organizationName}</li>
                        <li className="cardlabel">{organization.websiteUrl}</li>
                        <li className="cardlabel">{organization.aboutme}</li>
                        <li className="cardlabel">{organization.email}</li>
                    </ul>
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
            <EditOrgProfile
                showModal={isModalOpen}
                handleCloseModal={actions}
                session={organization}
                memberdashboardactions={actions}
            />

        </div>
    )
};

export default EditOrganizationProfile;
