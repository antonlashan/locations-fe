import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@material-ui/core';
import React from 'react';

import { PropertyData } from '../interface';
import { StreetView } from './StreetView';

interface DetailProps {
  data: PropertyData;
}

export const Detail = ({ data }: DetailProps) => {
  return (
    <Box mt={8}>
      <StreetView lat={data.lat} lng={data.lon} />

      <Table aria-label='property detail table'>
        <TableBody>
          <TableRow>
            <TableCell variant='head' scope='row'>
              <Typography noWrap>Beds</Typography>
            </TableCell>
            <TableCell variant='footer' align='right'>
              {data.beds}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant='head' scope='row'>
              <Typography noWrap>Baths</Typography>
            </TableCell>
            <TableCell variant='footer' align='right'>
              {data.baths}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component='th' variant='head' scope='row'>
              <Typography noWrap>Property type</Typography>
            </TableCell>
            <TableCell variant='footer' align='right'>
              {data.propertyType}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant='head' scope='row'>
              <Typography noWrap>Address</Typography>
            </TableCell>
            <TableCell variant='footer' align='right'>
              {data.address}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant='head' scope='row'>
              <Typography noWrap>Sqm</Typography>
            </TableCell>
            <TableCell variant='footer' align='right'>
              {data.sqm}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant='head' scope='row'>
              <Typography noWrap>Price</Typography>
            </TableCell>
            <TableCell variant='footer' align='right'>
              {data.price}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant='head' scope='row'>
              <Typography noWrap>Latitude</Typography>
            </TableCell>
            <TableCell variant='footer' align='right'>
              {data.lat}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant='head' scope='row'>
              <Typography noWrap>Longitude</Typography>
            </TableCell>
            <TableCell variant='footer' align='right'>
              {data.lon}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};
