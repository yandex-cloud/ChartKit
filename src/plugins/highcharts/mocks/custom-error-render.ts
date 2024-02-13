import _ from 'lodash';

import type {HighchartsWidgetData} from '../types';

const baseData: Omit<HighchartsWidgetData, 'data'> = {
    config: {
        hideHolidays: false,
        normalizeDiv: false,
        normalizeSub: false,
    },
    libraryConfig: {
        chart: {
            type: 'arearange',
        },
        title: {
            text: 'Temperature variation by day',
        },
        xAxis: {
            type: 'datetime',
        },
        tooltip: {
            valueSuffix: '°C',
        },
    },
};

export const noData: HighchartsWidgetData = {
    ...baseData,
    data: {
        graphs: [
            {
                name: 'Temperatures',
                data: [],
            },
        ],
    },
};

export const filledData: HighchartsWidgetData = {
    ...baseData,
    data: {
        graphs: [
            {
                name: 'Temperatures',
                data: [
                    [1246406400000, 10.4, 17],
                    [1246492800000, 10.3, 28.6],
                    [1246579200000, 14.8, 18.4],
                    [1246665600000, 11.5, 25.8],
                    [1246752000000, 11.1, 24.4],
                    [1246838400000, 17.7, 19.6],
                    [1246924800000, 15.1, 18.1],
                    [1247011200000, 15.1, 27.2],
                    [1247097600000, 17, 17.5],
                    [1247184000000, 12.6, 18.5],
                    [1247270400000, 12.2, 26],
                    [1247356800000, 15.9, 22.9],
                    [1247443200000, 17.1, 18.1],
                    [1247529600000, 13.3, 24.2],
                    [1247616000000, 17, 28.1],
                    [1247702400000, 16.2, 22.6],
                    [1247788800000, 10.6, 19],
                    [1247875200000, 11.3, 19.7],
                    [1247961600000, 14.1, 24.6],
                    [1248048000000, 14.2, 22.5],
                    [1248134400000, 14.1, 28.5],
                    [1248220800000, 14, 27],
                    [1248307200000, 10.2, 20.6],
                    [1248393600000, 13.1, 29.9],
                    [1248480000000, 13.7, 21.1],
                    [1248566400000, 15, 28.6],
                    [1248652800000, 12, 17.5],
                    [1248739200000, 17.8, 24.4],
                    [1248825600000, 11.7, 25.9],
                    [1248912000000, 13.6, 25.6],
                    [1248998400000, 17.3, 22.2],
                ],
            },
        ],
    },
};
