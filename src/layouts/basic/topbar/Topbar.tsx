import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { R_HOME, R_PROPERTIES } from '../../../helpers/route-params';

const useStyles = makeStyles((theme) => ({
  flexGrow: {
    flexGrow: 1,
  },
  rootHref: {
    color: '#fff',
  },
  routeLeftMargin: {
    marginLeft: theme.spacing(2),
    fontWeight: theme.typography.fontWeightBold,
    color: '#fff',
  },
}));

const Topbar = () => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar>
        <RouterLink to={R_HOME}>
          <Typography variant='h6' classes={{ root: classes.rootHref }}>
            Geowox
          </Typography>
        </RouterLink>
        <div className={classes.flexGrow} />
        <RouterLink to={R_HOME}>
          <Typography
            variant='overline'
            classes={{ root: classes.routeLeftMargin }}
          >
            Home
          </Typography>
        </RouterLink>
        <RouterLink to={R_PROPERTIES}>
          <Typography
            variant='overline'
            classes={{ root: classes.routeLeftMargin }}
          >
            Properties
          </Typography>
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

export { Topbar };
