import React from "react";
import GoodsAndServicesModal from "../SearchPostings/GoodsAndServicesModal";
import EditPostModal from "./EditPostModal";

const PostNewServiceOrWantedServiceButtons = (props) => {
    const { actions, isModalOpen, organization } = props;
    return(
        <div className="container cardwidth-button">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <button className="btn btn-primary buttonShadow" onClick={actions.openModal}>
                        POST YOUR NEW<br/>
                        SERVICES OR GOODS TO DONATE
                    </button>
                </div>
                <div className="col-md-6 col-sm-12">
                    <button className="btn btn-info buttonShadow button-pupple" onClick={actions.openModal}>
                        POST A WANTED<br/>
                        SERVICES OR GOODS TO PURCHASE
                    </button>
                </div>
            </div>
            {isModalOpen &&
                <EditPostModal {...props} />
            }
        </div>
    )

};

export default PostNewServiceOrWantedServiceButtons