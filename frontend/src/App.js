import React from 'react';
import axios from 'axios';
import './App.css';
import CheckList from './components/CheckList/CheckList';
import Layout from './components/Layout/Layout';

// const updateStuff = () => {
//     let config = {
//       headers: {
//         Authorization: `JWT ${localStorage.getItem('token')}`
//       }
//     }
//     console.log(config);
//   axios.patch('http://backend.test/api/check_list/1/', { subject: 'foo' },config)
//     .then(resp => {
//         console.log(resp)
//        })
//     .catch(error => {
//       console.log("Update error", error)
//     })
// }
//
//
// function handleLogin(event) {
//     let config = {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     }
//       axios.post('http://backend.test/api-token-auth/', { username: 'admin', password: 'admin'}, config)
//      .then(({data}) => {
//         localStorage.setItem('token', data.token);
//     }).catch(err => {
//       console.log('Login error', err.response)
//     });
// }


function App() {
  return (
    <div className="App">
      <div>
          <Layout>
              <p>Tests</p>
              <CheckList />
          </Layout>
        {/*<h1>here.....</h1>*/}
        {/*<button onClick={handleLogin}>Login</button>*/}
        {/*<button onClick={updateStuff}>Request</button>*/}
      </div>
    </div>
  );
}

export default App;
