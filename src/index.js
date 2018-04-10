import React from 'react';
import ReactDOM from 'react-dom';
//import {applyMiddleware, createStore} from 'redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Router,IndexRoute,Route,browserHistory} from 'react-router';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
//import {Provider} from 'react-redux';
import App from './component/App';
import Search from './component/Search';
import User from './component/User';

//const middleware = applyMiddleware(thunk,logger());
//const store = createStore(reducers,middleware);
/*const Routes = (
    <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Search}/>
            <Route path="user/:username" component={User}/>
        </Route>
    </Router>
    </Provider>
)*/

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Search}/>
            <Route path="user/:username" component={User}/>
        </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
