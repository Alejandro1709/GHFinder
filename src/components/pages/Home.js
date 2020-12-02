import React, { Fragment } from 'react';
import Search from '../users/Users';
import Users from '../users/Search';

const Home = () => {
  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  );
};

export default Home;
