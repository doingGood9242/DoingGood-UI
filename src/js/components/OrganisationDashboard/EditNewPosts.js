import React from 'react';
import PropTypes from 'prop-types';
import PostDetails from './PostDetails';

const EditNewPosts= (props) => {
    const { allPostDataById, actions, modalValues, organization, isModalOpen, postDetails } = props;
    return(
        <React.Fragment>
            <div className="card w-auto">
                <div className="card-body">
                    <h5 className="cardtitle">Our Organization's Help Wanted Postings</h5>
                    {allPostDataById && allPostDataById.offeredGoodOrService.map((post, index) =>
                        post.status === "NEW" &&
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
                    {allPostDataById && allPostDataById.wantedGoodOrService.map((post, index) =>
                        post.status === "NEW" &&
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

EditNewPosts.propTypes = {
    allPostDataById: PropTypes.object,
    postDetails: PropTypes.object,
    isModalOpen: PropTypes.bool,
    actions: PropTypes.object,
    modalValues: PropTypes.object,
    organization: PropTypes.object
};

export default EditNewPosts;