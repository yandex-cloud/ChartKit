import {
    BarXSeries,
    BarXSeriesData,
    BaseTextStyle,
    ChartKitWidgetLegend,
    PieSeries,
    PieSeriesData,
    RectLegendSymbolOptions,
    ScatterSeries,
    ScatterSeriesData,
} from '../../../../../types';

import type {SeriesOptionsDefaults} from '../../constants';
import {LineSeries, LineSeriesData} from '../../../../../types/widget-data/line';
import {BarYSeries, BarYSeriesData} from '../../../../../types/widget-data/bar-y';

export type RectLegendSymbol = {
    shape: 'rect';
} & Required<RectLegendSymbolOptions>;

export type PreparedLegendSymbol = RectLegendSymbol;

export type PreparedLegend = Required<ChartKitWidgetLegend> & {
    height: number;
    lineHeight: number;
};

export type OnLegendItemClick = (data: {name: string; metaKey: boolean}) => void;

export type LegendItem = {
    color: string;
    name: string;
    symbol: PreparedLegendSymbol;
    textWidth: number;
    visible?: boolean;
};

export type LegendConfig = {
    offset: {
        left: number;
        top: number;
    };
    pagination?: {
        limit: number;
        maxPage: number;
    };
};

type BasePreparedSeries = {
    color: string;
    name: string;
    id: string;
    visible: boolean;
    legend: {
        enabled: boolean;
        symbol: PreparedLegendSymbol;
    };
};

export type PreparedScatterSeries = {
    type: ScatterSeries['type'];
    data: ScatterSeriesData[];
} & BasePreparedSeries;

export type PreparedBarXSeries = {
    type: BarXSeries['type'];
    data: BarXSeriesData[];
    stackId: string;
    dataLabels: {
        enabled: boolean;
        inside: boolean;
        style: BaseTextStyle;
    };
} & BasePreparedSeries;

export type PreparedBarYSeries = {
    type: BarYSeries['type'];
    data: BarYSeriesData[];
    stackId: string;
    dataLabels: {
        enabled: boolean;
        inside: boolean;
        style: BaseTextStyle;
        height: number;
    };
} & BasePreparedSeries;

export type PreparedPieSeries = BasePreparedSeries &
    Required<Omit<PieSeries, 'data'>> & {
        data: PieSeriesData;
        value: PieSeriesData['value'];
        stackId: string;
        label?: PieSeriesData['label'];
    };

export type PreparedLineSeries = {
    type: LineSeries['type'];
    data: LineSeriesData[];
    lineWidth: number;
    dataLabels: {
        enabled: boolean;
        style: BaseTextStyle;
        padding: number;
    };
} & BasePreparedSeries;

export type PreparedSeries =
    | PreparedScatterSeries
    | PreparedBarXSeries
    | PreparedBarYSeries
    | PreparedPieSeries
    | PreparedLineSeries;

export type PreparedSeriesOptions = SeriesOptionsDefaults;
