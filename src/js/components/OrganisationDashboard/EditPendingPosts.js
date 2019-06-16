import React from 'react';
import PropTypes from 'prop-types';
import PostDetails from './PostDetails';
import PendingPostModal from "../UserDashboard/PendingPostModal";

const EditPendingPosts= (props) => {
    const { allPostDataById, actions, modalValues, organization, isModalOpen, postDetails  } = props;
    return(
        <React.Fragment>
            <div className="card w-auto">
                <div className="card-body">
                    <h5 className="cardtitle">Pending Postings</h5>
                    {allPostDataById && allPostDataById.offeredGoodOrService.map((post, index) =>
                        post.status === "PENDING_PRODUCER_SIGNOFF" &&
                        <PostDetails
                            key={index}
                            post={ post }
                            actions={ actions }
                            modalValues={ modalValues }
                            isModalOpen={ isModalOpen }
                            organization={ organization }
                            postDetails={ postDetails }
                        />)
                    }
                    {allPostDataById && allPostDataById.wantedGoodOrService.map((post, index) =>
                        post.status === "PENDING_PRODUCER_SIGNOFF" &&
                        <PostDetails
                            key={index}
                            post={ post }
                            actions={ actions }
                            isModalOpen={ isModalOpen }
                            modalValues={ modalValues }
                            organization={ organization }
                            postDetails={ postDetails }
                        />)
                    }
                </div>
            </div>
        </React.Fragment>

    )
};

EditPendingPosts.propTypes = {
    allPostDataById: PropTypes.object,
    postDetails: PropTypes.object,
    isModalOpen: PropTypes.bool,
    actions: PropTypes.object,
    modalValues: PropTypes.object,
    organization: PropTypes.object
};

export default EditPendingPosts;