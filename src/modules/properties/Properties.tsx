import { Card, CardContent, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

import { PieChartData } from '../../components';
import { Details } from './details/Details';
import { Filters } from './filters/Filters';
import { filterProperties, formatChartData } from './helper';
import { FilterType, PropertyData } from './interface';
import { Stats } from './stats/Stats';

interface PropertiesProps {
  propertyData: PropertyData[];
}

const useStyles = makeStyles((theme) => ({
  filterCard: {
    marginBottom: theme.spacing(2),
  },
}));

export const Properties = ({ propertyData }: PropertiesProps) => {
  const classes = useStyles();

  const [properties, setProperties] = React.useState<PropertyData[]>(
    propertyData
  );
  const [chartData, setChartData] = React.useState<PieChartData[]>(
    formatChartData(properties)
  );

  const handleFilter = (filter: FilterType) => {
    const filteredData = filterProperties(propertyData, filter);
    const chartData = formatChartData(filteredData);

    setProperties(filteredData);
    setChartData(chartData);
  };

  return (
    <Grid container spacing={2} item>
      <Grid item xs={12} sm={4}>
        <Card className={classes.filterCard}>
          <CardContent>
            <Filters onFilter={handleFilter} />
          </CardContent>
        </Card>

        <Card>
          <Stats data={chartData} />
        </Card>
      </Grid>

      <Grid item xs={12} sm={8}>
        <Card>
          <Details propertyData={properties} />
        </Card>
      </Grid>
    </Grid>
  );
};
