/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from '@material-ui/core';
import React from 'react';
import { VictoryLabel, VictoryPie, VictoryTheme } from 'victory';

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

const formatChartData = (data: PropertyData[]) => {
  return data.reduce<ChartData[]>((acc, cur) => {
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
};

export const Stats = ({ data }: StatsProps) => {
  const [chartData, setChartData] = React.useState<ChartData[]>();

  React.useEffect(() => {
    setChartData(formatChartData(data));
  }, [data]);

  return (
    <Box>
      <VictoryPie
        // animate
        theme={VictoryTheme.material}
        data={chartData}
        labelComponent={
          <VictoryLabel
            text={(d: any) => {
              return d.orientation === 'bottom'
                ? [`${d.datum.y}`, `${d.datum.label}`]
                : ([`${d.datum.label}`, `${d.datum.y}`] as any);
            }}
          />
        }
        style={{ labels: { fontSize: 15 } }}
        labelRadius={80}
        labelPlacement={'perpendicular'}
      />
    </Box>
  );
};
