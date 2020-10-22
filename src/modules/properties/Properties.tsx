import { Card, CardContent, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

import { Details } from './details/Details';
import { Filters } from './filters/Filters';
import { FiltersState, PropertyData } from './interface';
import { propertyData } from './propertyData';
import { Stats } from './stats/Stats';

const useStyles = makeStyles(() => ({
  filterCard: {
    height: '100%',
    alignItems: 'center',
    display: 'flex',
  },
  filterCardContent: {
    width: '100%',
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
      <Grid item xs={12} sm={9}>
        <Card className={classes.filterCard}>
          <CardContent className={classes.filterCardContent}>
            <Filters onFilter={handleFilter} />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={3}>
        <Card>
          <Stats data={properties} />
        </Card>
      </Grid>

      <Grid item xs={12}>
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
