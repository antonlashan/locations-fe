import React from 'react';
import { VictoryLabel, VictoryPie, VictoryTheme } from 'victory';

export interface PieChartData {
  x: string;
  y: number;
  label: string;
}

export interface PieChartProps {
  data: PieChartData[];
}

export const PieChart = ({ data }: PieChartProps) => {
  return (
    <VictoryPie
      // animate
      theme={VictoryTheme.material}
      data={data}
      labelComponent={
        <VictoryLabel
          /* eslint-disable @typescript-eslint/no-explicit-any */
          text={(d: any) => {
            return d.orientation === 'bottom'
              ? [`${d.datum.y}`, `${d.datum.label}`]
              : ([`${d.datum.label}`, `${d.datum.y}`] as any);
            /* eslint-enable */
          }}
        />
      }
      style={{ labels: { fontSize: 15 } }}
      labelRadius={80}
      labelPlacement={'perpendicular'}
    />
  );
};
