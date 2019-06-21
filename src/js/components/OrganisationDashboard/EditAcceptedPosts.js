import React from 'react';
import PropTypes from 'prop-types';
import PostDetails from './PostDetails';

const EditAcceptedPosts= (props) => {
    const { allPostDataById, actions } = props;
    return(
        <React.Fragment>
            <div className="card w-auto">
                <div className="card-body">
                    <h5 className="cardtitle">Accepted Postings</h5>
                    {allPostDataById && allPostDataById.offeredGoodOrService.map((post, index) =>
                        post.status === "ACCEPTED" &&
                        <PostDetails key={index} post={ post } actions={actions}/>
                    )
                    }
                    {allPostDataById && allPostDataById.wantedGoodOrService.map((post, index) =>
                        post.status === "ACCEPTED" &&
                        <PostDetails key={index} post={ post } actions={actions}/>
                    )
                    }
                    {allPostDataById && allPostDataById.offeredGoodOrService.map((post, index) =>
                        post.status === "PENDING_CONSUMER_SIGNOFF" &&
                        <PostDetails key={index} post={ post } actions={actions}/>
                    )
                    }
                    {allPostDataById && allPostDataById.wantedGoodOrService.map((post, index) =>
                        post.status === "PENDING_CONSUMER_SIGNOFF" &&
                        <PostDetails key={index} post={ post } actions={actions}/>
                    )
                    }
                </div>
            </div>
        </React.Fragment>

    )
};

EditAcceptedPosts.propTypes = {
    allPostDataById: PropTypes.object,
    actions: PropTypes.object
};

export default EditAcceptedPosts;