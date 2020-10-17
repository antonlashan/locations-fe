import { Typography } from '@material-ui/core';
import React from 'react';

import { env } from '../../environments/env';

const Properties = () => (
  <>
    <Typography variant='h4'>Properties</Typography>
    <br />
    Environment is <b>{env.environment}</b>
  </>
);

export default Properties;
