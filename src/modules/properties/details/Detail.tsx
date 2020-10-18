import {
  Box,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';

import { Currency, Number } from '../../../components';
import { PropertyData } from '../interface';
import { StreetView } from './StreetView';

interface DetailProps {
  data: PropertyData;
}

const message = defineMessages({
  beds: {
    description: 'No of bedrooms',
    defaultMessage: 'Beds',
    id: 'module.properties.details.detail.beds',
  },
  baths: {
    description: 'No of bathrooms',
    defaultMessage: 'Baths',
    id: 'module.properties.details.detail.baths',
  },
  propertyType: {
    description: 'Property type',
    defaultMessage: 'Property type',
    id: 'module.properties.details.detail.propertyType',
  },
  address: {
    description: 'Property address',
    defaultMessage: 'Address',
    id: 'module.properties.details.detail.address',
  },
  sqm: {
    description: 'Squre meter',
    defaultMessage: 'Sqm',
    id: 'module.properties.details.detail.sqm',
  },
  price: {
    description: 'Property price',
    defaultMessage: 'Price',
    id: 'module.properties.details.detail.price',
  },
  latitude: {
    description: 'Latitude',
    defaultMessage: 'Latitude',
    id: 'module.properties.details.detail.latitude',
  },
  longitude: {
    description: 'Longitude',
    defaultMessage: 'Longitude',
    id: 'module.properties.details.detail.longitude',
  },
});

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(8),
    },
  },
}));

const F = FormattedMessage;

export const Detail = ({ data }: DetailProps) => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Box mb={2}>
        <StreetView lat={data.lat} lng={data.lon} />
      </Box>

      <Table aria-label='property detail table'>
        <TableBody>
          <TableRow>
            <TableCell variant='head' scope='row'>
              <Typography noWrap>
                <F {...message.beds} />
              </Typography>
            </TableCell>
            <TableCell variant='footer' align='right'>
              <Number value={data.beds} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant='head' scope='row'>
              <Typography noWrap>
                <F {...message.baths} />
              </Typography>
            </TableCell>
            <TableCell variant='footer' align='right'>
              <Number value={data.baths} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component='th' variant='head' scope='row'>
              <Typography noWrap>
                <F {...message.propertyType} />
              </Typography>
            </TableCell>
            <TableCell variant='footer' align='right'>
              {data.propertyType}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant='head' scope='row'>
              <Typography noWrap>
                <F {...message.address} />
              </Typography>
            </TableCell>
            <TableCell variant='footer' align='right'>
              {data.address}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant='head' scope='row'>
              <Typography noWrap>
                <F {...message.sqm} />
              </Typography>
            </TableCell>
            <TableCell variant='footer' align='right'>
              <Number value={data.sqm} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant='head' scope='row'>
              <Typography noWrap>
                <F {...message.price} />
              </Typography>
            </TableCell>
            <TableCell variant='footer' align='right'>
              <Currency value={data.price} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant='head' scope='row'>
              <Typography noWrap>
                <F {...message.latitude} />
              </Typography>
            </TableCell>
            <TableCell variant='footer' align='right'>
              {data.lat}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant='head' scope='row'>
              <Typography noWrap>
                <F {...message.longitude} />
              </Typography>
            </TableCell>
            <TableCell variant='footer' align='right'>
              {data.lon}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
