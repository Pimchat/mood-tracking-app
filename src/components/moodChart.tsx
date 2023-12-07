import * as React from 'react';
import Box from '@mui/material/Box';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { LinePlot } from '@mui/x-charts/LineChart';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

export default function AxisWithComposition() {
  return (
    <Box sx={{ width: '100%', maxWidth: 600 }}>
      <ResponsiveChartContainer
        xAxis={[
          {
            scaleType: 'band',
            data: ['05/06/2013', '05/06/2014', '05/06/2015', '05/06/2016'],
            id: 'quarters',
            label: 'Quarters',
          },
        ]}
        yAxis={[{ id: 'money' }, { id: 'quantities' }]}
        series={[
          {
            type: 'line',
            id: 'revenue',
            yAxisKey: 'money',
            data: [5645, 7542, 9135, 12221],
          },
          {
            type: 'bar', //blue bar
            id: 'cookies',
            yAxisKey: 'quantities',
            data: [3205, 2542, 3135, 8374],
          },
          {
            type: 'bar', //pink bar
            id: 'icecream',
            yAxisKey: 'quantities',
            data: [1645, 5542, 5146, 3735],
          },
        ]}
        height={400}
        margin={{ left: 70, right: 70 }}
        sx={{
          [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translate(-25px, 0)',
          },
          [`.${axisClasses.right} .${axisClasses.label}`]: {
            transform: 'translate(30px, 0)',
          },
        }}
      >
        <BarPlot />
        <LinePlot />
        <ChartsXAxis axisId="quarters" label="2021 quarters" />
        <ChartsYAxis axisId="quantities" label="# units sold" />
        <ChartsYAxis axisId="money" position="right" label="revenue" />
      </ResponsiveChartContainer>
    </Box>
  );
}