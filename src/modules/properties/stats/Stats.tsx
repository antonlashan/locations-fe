import { Box } from '@material-ui/core';
import React from 'react';
import { VictoryLabel, VictoryPie } from 'victory';

import { PROPERTY_TYPE_LBLS } from '../../../helpers/config';
import { PropertyData } from '../interface';

interface StatsProps {
  data: PropertyData[];
}

interface ChartData {
  x: string;
  y: number;
  label: string;
}

export const Stats = ({ data }: StatsProps) => {
  const [chartData, setChartData] = React.useState<ChartData[]>([]);

  React.useEffect(() => {
    const chartData = data.reduce<ChartData[]>((acc, cur) => {
      const existType = acc.find((a) => a.x === cur.propertyType);
      if (existType) {
        ++existType.y;
        return acc;
      }

      acc.push({
        x: cur.propertyType,
        y: 1,
        label: PROPERTY_TYPE_LBLS[cur.propertyType],
      });
      return acc;
    }, []);

    setChartData(chartData);
  }, [data]);

  return (
    <Box>
      <VictoryPie
        animate={{ easing: 'exp' }}
        data={chartData}
        labelComponent={
          <VictoryLabel text={({ datum }) => `${datum.label}\n${datum.y}`} />
        }
        colorScale='heatmap'
        style={{ labels: { fill: 'black', fontSize: 20 } }}
        labelRadius={70}
        labelPlacement={'parallel'}
      />
    </Box>
  );
};
