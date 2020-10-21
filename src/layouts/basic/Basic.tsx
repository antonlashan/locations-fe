import { makeStyles } from '@material-ui/core';
import React, { ReactNode } from 'react';

import { Topbar } from './topbar/Topbar';

const useStyles = makeStyles((theme) => ({
  content: {
    height: '100%',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    paddingTop: theme.spacing(10),
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(9),
    },
  },
  main: {
    maxWidth: 1200,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const Basic = ({ children }: { children: ReactNode }) => {
  const classes = useStyles();

  return (
    <>
      <Topbar />
      <div className={classes.content}>
        <main className={classes.main}>{children}</main>
      </div>
    </>
  );
};

export { Basic };
