import React from 'react';
import PropTypes from 'prop-types';
import PostDetails from './PostDetails';

const EditAcceptedPosts= (props) => {
    const { allPostDataById, actions, modalValues, organization, isModalOpen, postDetails, assignedPostsBToConsumer } = props;
    return(
        <React.Fragment>
            <div className="card w-auto">
                <div className="card-body">
                    <h5 className="cardtitle">Accepted Postings</h5>
                    {allPostDataById && allPostDataById.offeredGoodOrService.map((post, index) =>
                        (post.status === "PENDING_CONSUMER_SIGNOFF" || post.status === "ACCEPTED") &&
                        <PostDetails
                            key={index}
                            post={ post }
                            actions={ actions }
                            isModalOpen={ isModalOpen }
                            modalValues={ modalValues }
                            session={ organization }
                            postDetails={ postDetails }
                        />
                    )
                    }
                    {allPostDataById && allPostDataById.wantedGoodOrService.map((post, index) =>
                        (post.status === "PENDING_CONSUMER_SIGNOFF" || post.status === "ACCEPTED") &&
                        <PostDetails
                            key={index}
                            post={ post }
                            actions={ actions }
                            isModalOpen={ isModalOpen }
                            modalValues={ modalValues }
                            session={ organization }
                            postDetails={ postDetails }
                        />
                    )
                    }
                    {assignedPostsBToConsumer && assignedPostsBToConsumer.map((post, index) =>
                        post.status === "PENDING_CONSUMER_SIGNOFF" &&
                        <PostDetails
                            key={index}
                            post={ post }
                            actions={ actions }
                            isModalOpen={ isModalOpen }
                            modalValues={ modalValues }
                            session={ organization }
                            postDetails={ postDetails }
                        />
                    )
                    }
                    {/*{allPostDataById && allPostDataById.wantedGoodOrService.map((post, index) =>*/}
                        {/*post.status === "PENDING_CONSUMER_SIGNOFF" &&*/}
                        {/*<PostDetails*/}
                            {/*key={index}*/}
                            {/*post={ post }*/}
                            {/*actions={ actions }*/}
                            {/*isModalOpen={ isModalOpen }*/}
                            {/*modalValues={ modalValues }*/}
                            {/*organization={ organization }*/}
                            {/*postDetails={ postDetails }*/}
                        {/*/>*/}
                    {/*)*/}
                    {/*}*/}
                </div>
            </div>
        </React.Fragment>

    )
};

EditAcceptedPosts.propTypes = {
    allPostDataById: PropTypes.object,
    postDetails: PropTypes.object,
    isModalOpen: PropTypes.bool,
    actions: PropTypes.object,
    modalValues: PropTypes.object,
    organization: PropTypes.object
};

export default EditAcceptedPosts;