import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import reducers from './reducers';
import Auth from './Auth';
import Dashboard from './Dashboard'; 
import './config';

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// class Test extends React.Component {
//     render () {
//         console.log(this.props);
//         return <h2>测试组件 { this.props.match.params.location }</h2>;
//     }
// }

ReactDOM.render(
    (<Provider store={ store }>
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={ Auth }></Route>
                <Route path="/dashboard" component={ Dashboard }></Route>
                <Redirect to="/dashboard"></Redirect>
            </Switch>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
);




