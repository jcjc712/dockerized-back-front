import React, {Component} from 'react';
import './App.css';
import CheckList from './components/CheckList/CheckList';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LogIn from "./components/Navigation/LogIn/LogIn";
import LogOut from "./components/Navigation/LogOut/LogOut";
import SignUp from "./components/Navigation/SignUp/SignUp";

class App extends Component {

    state = {
        isLogged: false
    }

    componentDidMount() {
        this.setState({isLogged:false})
        if(localStorage.getItem('token')){
            this.setState({isLogged:true})
        }
    }

    updateIsLogged = (status) => {
        this.setState({isLogged:status})
    }

  render() {
      return <BrowserRouter>
        <div className="App">
          <div>
              <Layout isLogged={this.state.isLogged}>
                  <Switch>
                      <Route path="/log-in" component={() => <LogIn updateIsLogged={this.updateIsLogged} />}></Route>
                      <Route path="/log-out" component={() => <LogOut updateIsLogged={this.updateIsLogged} />}></Route>
                      <Route path="/sign-up" component={() => <SignUp updateIsLogged={this.updateIsLogged} />}></Route>
                      <Route path="/" exact component={() => <CheckList updateIsLogged={this.updateIsLogged} />}></Route>
                  </Switch>
              </Layout>
          </div>
        </div>
      </BrowserRouter>
  }
}

export default App;
