import { Card, CardContent, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

import { Details } from './details/Details';
import { Filters } from './filters/Filters';
import { FiltersState, PropertyData } from './interface';
import { propertyData } from './propertyData';
import { Stats } from './stats/Stats';

const useStyles = makeStyles((theme) => ({
  filterCard: {
    height: '100%',
    alignItems: 'center',
    display: 'flex',
  },
  filterCardContent: {
    width: '100%',
  },
  filter: {
    order: 2,
    [theme.breakpoints.up('sm')]: {
      order: 1,
    },
  },
  stats: {
    order: 1,
    [theme.breakpoints.up('sm')]: {
      order: 2,
    },
  },
  map: {
    order: 3,
    [theme.breakpoints.up('sm')]: {
      order: 3,
    },
  },
}));

const Properties = () => {
  const classes = useStyles();
  const [filterVals, setFilterVals] = React.useState<FiltersState>();
  const [properties, setProperties] = React.useState<PropertyData[]>([]);

  const handleFilter = (data: FiltersState) => {
    setFilterVals(data);
  };

  React.useEffect(() => {
    if (filterVals) {
      const filteredData = propertyData
        .filter((data) => {
          if (filterVals.bathrooms) {
            return +filterVals.bathrooms === data.baths;
          }
          return true;
        })
        .filter((data) => {
          if (filterVals.bedrooms) {
            return +filterVals.bedrooms === data.beds;
          }
          return true;
        })
        .filter((data) => {
          if (filterVals.propertyType) {
            return filterVals.propertyType === data.propertyType;
          }
          return true;
        });
      setProperties(filteredData);
    }
  }, [filterVals]);

  return (
    <Grid container spacing={2} item>
      <Grid item xs={12} sm={8} className={classes.filter}>
        <Card className={classes.filterCard}>
          <CardContent className={classes.filterCardContent}>
            <Filters onFilter={handleFilter} />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4} className={classes.stats}>
        <Card>
          <CardContent>
            <Stats data={propertyData} />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} className={classes.map}>
        <Card>
          <CardContent>
            <Details propertyData={properties} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Properties;
