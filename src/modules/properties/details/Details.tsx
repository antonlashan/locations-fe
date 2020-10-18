import {
  Box,
  Divider,
  Drawer,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import React from 'react';

import { PropertyData } from '../interface';
import { Detail } from './Detail';
import { GMap } from './Map';

interface DetailsProps {
  propertyData: PropertyData[];
}

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: '100%',
    maxWidth: 450,
  },
  drawerHeaderWraper: {
    position: 'fixed',
    zIndex: 2,
    backgroundColor: theme.palette.secondary.light,
    width: '100%',
    maxWidth: 450,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
  },
}));

export const Details = ({ propertyData }: DetailsProps) => {
  const [state, setState] = React.useState(false);
  const [detail, setDetail] = React.useState<PropertyData>();
  const classes = useStyles();

  const toggleDetailDrawer = (open: boolean) => () => {
    setState(open);
  };

  const handleMarkerClick = (loc: PropertyData) => {
    setDetail(loc);
    setState(true);
  };

  return (
    <>
      <GMap locations={propertyData} onMarkerClick={handleMarkerClick} />
      <Drawer
        open={state}
        onClose={toggleDetailDrawer(false)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.drawerHeaderWraper}>
          <div className={classes.drawerHeader}>
            <Box ml={2}>
              <Typography variant='subtitle1' color='inherit'>
                Property Details
              </Typography>
            </Box>
            <IconButton onClick={toggleDetailDrawer(false)}>
              <ChevronLeft />
            </IconButton>
          </div>
          <Divider />
        </div>
        <Box p={2}>
          {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            <Detail data={detail!} />
          }
        </Box>
      </Drawer>
    </>
  );
};
