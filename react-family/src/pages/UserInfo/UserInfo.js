import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserInfo} from 'actions/userInfo';

class UserInfo extends Component {
    render() {
        const {userInfo, isLoading, errorMsg} = this.props.userInfo;
        return (
            <div>
                {isLoading
                    ? 'Loading......'
                    : (errorMsg
                        ? errorMsg
                        : <div>
                            <p>User Infomation:</p>
                            <p>Username: {userInfo.name}</p>
                            <p>Introduce: {userInfo.intro}</p>
                        </div>)}
                <button onClick={() => this.props.getUserInfo()}>Request User Infomation</button>
            </div>
        );
    }
}

export default connect((state) => ({userInfo: state.userInfo}), {getUserInfo})(UserInfo);