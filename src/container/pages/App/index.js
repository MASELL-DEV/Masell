import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import { Fragment, Component } from 'react';
import Dashboard from '../Dashboard/index';
import Login from '../Authentications/index';
import Register from '../Authentications/register';
import Landing from '../Landing/index';
import exportConnect from '../../../redux/connect';
class App extends Component {
  render(){
    return (
      <Router>
        <Fragment>
          <Route path="/landing" exact component={Landing}></Route>
          <Route path="/" exact>{this.props.isLoggedIn ? <Dashboard/> : <Redirect to="/landing"/> }</Route>
          <Route path="/auth" exact component={Login}></Route>
          <Route path="/register" exact component={Register}></Route>
        </Fragment>
      </Router>
    )
  }
}
export default exportConnect(App);
