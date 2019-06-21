import React from 'react';

const EditOrganizationProfile = (props) =>{
    const { organization } = props;
    return(
        <div className="col-md-4 col-sm-12">
            <div className="card w-auto">
                <div className="card-body">
                    <ul className="nobullet">
                        <li className="cardlabel-Orange">About Me</li>{/*Need to write click event*/}
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

        </div>
    )
};

export default EditOrganizationProfile;
