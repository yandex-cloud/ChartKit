import type {ScatterSeriesData} from '../../../../../../types';

import type {ChartScale} from '../../useAxisScales';
import type {PreparedAxis} from '../../useChartOptions/types';
import {PreparedScatterSeries} from '../../useSeries/types';
import {getXValue, getYValue} from '../utils';
import {PreparedScatterData} from './types';

const getFilteredLinearScatterData = (data: ScatterSeriesData[]) => {
    return data.filter((d) => typeof d.x === 'number' && typeof d.y === 'number');
};

export const prepareScatterData = (args: {
    series: PreparedScatterSeries[];
    xAxis: PreparedAxis;
    xScale: ChartScale;
    yAxis: PreparedAxis;
    yScale: ChartScale;
}): PreparedScatterData[] => {
    const {series, xAxis, xScale, yAxis, yScale} = args;

    return series.reduce<PreparedScatterData[]>((acc, s) => {
        const filteredData =
            xAxis.type === 'category' || yAxis.type === 'category'
                ? s.data
                : getFilteredLinearScatterData(s.data);

        filteredData.forEach((d) => {
            acc.push({
                point: {
                    data: d,
                    series: s,
                    x: getXValue({point: d, xAxis, xScale}),
                    y: getYValue({point: d, yAxis, yScale}),
                },
                hovered: false,
                active: true,
            });
        });

        return acc;
    }, []);
};
