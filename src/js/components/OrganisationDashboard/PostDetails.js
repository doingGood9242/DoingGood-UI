import React from 'react';
import PropTypes from "prop-types";

const PostDetails = (props) =>{
    const { post, key, actions } = props;
    return(
    <React.Fragment>
        <li key={ key } className="cardlabel-Opportunities" onClick={actions.openModal} ><span
            className="label-black">{post.description}</span>
            <span className="pull-right label-black"> ${post.rate}/{post.rateType === "PERITEM" ? "item" : "hour"}</span>
        </li>
    </React.Fragment>
    )
};

PostDetails.propTypes = {
    post: PropTypes.object,
    key: PropTypes.number,
    actions: PropTypes.object
};

export default PostDetails;

