import React from 'react';
import axios from 'axios';
import './App.css';
import CheckList from './components/CheckList/CheckList';
import Layout from './components/Layout/Layout';

function handleLogin(event) {
    let config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
      axios.post('http://backend.test/api-token-auth/', { username: 'admin', password: 'admin'}, config)
     .then(({data}) => {
        localStorage.setItem('token', data.token);
    }).catch(err => {
      console.log('Login error', err.response)
    });
}


function App() {
  return (
    <div className="App">
      <div>
          <Layout>
              <CheckList />
          </Layout>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default App;
