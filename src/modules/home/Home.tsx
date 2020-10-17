import { Typography } from '@material-ui/core';
import React from 'react';

import { env } from '../../environments/env';

const Home = () => (
  <>
    <Typography variant='h4'>Home</Typography>
    <br />
    Environment is <b>{env.environment}</b>
  </>
);

export default Home;
