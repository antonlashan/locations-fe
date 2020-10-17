import { Card, CardContent, Grid } from '@material-ui/core';
import React from 'react';

import { Details } from './details/Details';
import { Filters } from './filters/Filters';
import { Stats } from './stats/Stats';

const Properties = () => (
  <>
    <Grid container spacing={2} item>
      <Grid item xs={12} sm={9}>
        <Card>
          <CardContent>
            <Filters />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={3}>
        <Card>
          <CardContent>
            <Stats />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Details />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </>
);

export default Properties;
