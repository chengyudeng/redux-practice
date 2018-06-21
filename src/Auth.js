import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login, getUserData } from './Auth.redux';

// 两个reducers 每个reducers都有一个state
// 合并reducers
@connect(
    state => state.auth,
    { login, getUserData }
)
class Auth extends Component {
    // constructor (props) {
    //     super(props);
    //     this.state = {
    //         data: {}
    //     }
    // }
    componentDidMount () {
        this.props.getUserData();
        // axios.get('/data')
        //     .then(res => {
        //         if (res.status === 200) {
        //             this.setState({
        //                 data: res.data
        //             });
        //         }
        //         console.log(res);
        //     })
    }
    render () {
        return (
            <div>
                <h2>我的名字是{ this.props.user }, 年龄{ this.props.age }</h2>
                { this.props.isAuth ? <Redirect to="/dashboard" /> : null  }
                <h2>你没有权限, 需要登陆才能看</h2>
                <button onClick={ this.props.login }>登陆</button>
            </div>
        );
    }
}
export default Auth;