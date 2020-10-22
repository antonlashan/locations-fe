import React from 'react';

import { PieChart, PieChartProps } from '../../../components';

export type StatsProps = PieChartProps;

export const Stats = ({ data }: StatsProps) => {
  return <PieChart data={data} />;
};
