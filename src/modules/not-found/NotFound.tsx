import {
  Box,
  Button,
  Container,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

import { R_HOME } from '../../helpers/route-params';

const useStyles = makeStyles(() => ({
  image: {
    marginTop: 50,
    display: 'inline-block',
    maxWidth: '100%',
    width: 560,
  },
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <Box
      display='flex'
      flexDirection='column'
      height='100%'
      justifyContent='center'
    >
      <Container maxWidth='md'>
        <Typography align='center' color='textPrimary' variant='h1'>
          404: The page you are looking for isn’t here
        </Typography>
        <Typography align='center' color='textPrimary' variant='subtitle2'>
          You either tried some shady route or you came here by mistake.
          Whichever it is, try using the navigation
        </Typography>
        <Box textAlign='center'>
          <img
            alt='Under development'
            className={classes.image}
            src='/static/images/page_not_found.svg'
          />
        </Box>
        <Box textAlign='center' padding={5}>
          <Button
            variant='outlined'
            color='primary'
            component={Link}
            to={R_HOME}
          >
            Go home
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFound;
