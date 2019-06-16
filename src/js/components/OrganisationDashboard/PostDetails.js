import React from 'react';
import PropTypes from "prop-types";
import EditPostModal from "../../components/OrganisationDashboard/EditPostModal";
import ConsumerSignOffModal from "../UserDashboard/ConsumerSignOffModal";
import ProducerAccpetedModal from "../UserDashboard/ProducerAccpetedModal";
import PendingPostModal from "../UserDashboard/PendingPostModal";

const PostDetails = (props) =>{
    const { post, key, actions, isModalOpen, organization } = props;
    const handleOnClick = () => {
      actions.openModal();
    };
    return(
    <React.Fragment>
        <li key={ key } className="cardlabel-Opportunities" onClick={handleOnClick} ><span
            className="label-black">{post.description}</span>
            <span className="pull-right label-black"> ${post.rate}/{post.rateType === "PERITEM" ? "item" : "hour"}</span>
        </li>
        {isModalOpen && post.status === "NEW" && post.offerPrice === null &&
            <EditPostModal {...props}
                           postDetails={post}/>
        }
        {isModalOpen && (post.status === "PENDING_PRODUCER_SIGNOFF") &&
            <PendingPostModal
                showModal={isModalOpen}
                handleCloseModal={actions}
                allPostsByUser={post}
                session={organization}
                memberdashboardactions={actions}
            />
        }
        {isModalOpen && (post.status === "PENDING_CONSUMER_SIGNOFF") &&
        <ConsumerSignOffModal {...props}
                              showModal={isModalOpen}
                              allPostsByUser={post}
                              memberdashboardactions={ actions }/>
        }
        {isModalOpen && post.status === "ACCEPTED" &&
        <ProducerAccpetedModal {...props}
                      allPostsByUser={post}
                      memberdashboardactions={ actions }/>
        }
    </React.Fragment>
    )
};

PostDetails.propTypes = {
    post: PropTypes.object,
    key: PropTypes.number,
    actions: PropTypes.object
};

export default PostDetails;

