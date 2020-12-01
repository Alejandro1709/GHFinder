import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_GITHUB_CLIENT}$client_secret=${process.env.REACT_GITHUB_SECRET}`
    );

    this.setState({ users: res.data, loading: false });
  }

  render() {
    const { users, loading } = this.state;

    return (
      <div className="app">
        <Navbar />
        <div className="container">
          <Search />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
