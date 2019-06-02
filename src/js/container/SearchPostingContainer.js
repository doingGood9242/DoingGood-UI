import React, { Component } from "react";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import SearchPosting from "../components/SearchPosting";
import searchPostingActions from "../actions/searchPostingActions";
import organizationReducer from "../reducers/organizationReducer";
import organizationActions from "../actions/organizationActions";

class SearchPostingContainer extends Component {
    constructor(props) {
        super(props);
        this.onPostServiceRequestModal=this.onPostServiceRequestModal.bind(this);
    }

    onPostServiceRequestModal(){
        this.props.searchPostingAction.postServiceRequestAction();
    }

    componentWillMount(){
        Promise.resolve(this.props.searchPostingAction.allPostingServiceAction());
    }

    render() {
        return (
            <div>
                {this.props.allPostData && this.props.allPostData.offeredGoodOrService &&
                    <SearchPosting
                        searchPostingAction={this.props.searchPostingAction}
                        onPostServiceRequestModal={this.onPostServiceRequestModal}
                        allPostData={this.props.allPostData}
                        showModalFlag={this.props.showModalFlag}
                        hideModalFlag={this.props.hideModalFlag}
                        organizationAction={this.props.organizationAction}
                        getAllOrgs={this.props.getAllOrgs}
                        session={ this.props.session}

                    />
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {showModalFlag: state.postRequestServiceReducer.showModalFlag,
        allPostData: state.postRequestServiceReducer.allPostData,
        getAllOrgs:state.organizationReducer.getAllOrgs,
        session:state.loginReducer.session
        };
}

const mapDispatchToProps = dispatch => {
    return {
        searchPostingAction: bindActionCreators(searchPostingActions, dispatch),
        organizationAction: bindActionCreators(organizationActions, dispatch),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPostingContainer);

