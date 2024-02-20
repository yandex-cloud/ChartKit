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
    BarYSeries,
    BarYSeriesData,
    LineSeries,
    LineSeriesData,
    ConnectorShape,
    ConnectorCurve,
    PathLegendSymbolOptions,
    SymbolLegendSymbolOptions,
    AreaSeries,
    AreaSeriesData,
    TreemapSeries,
    TreemapSeriesData,
} from '../../../../../types';
import type {SeriesOptionsDefaults} from '../../constants';
import {DashStyle, LayoutAlgorithm, LineCap, SymbolType} from '../../../../../constants';

export type RectLegendSymbol = {
    shape: 'rect';
} & Required<RectLegendSymbolOptions>;

export type PathLegendSymbol = {
    shape: 'path';
    strokeWidth: number;
} & Required<PathLegendSymbolOptions>;

export type SymbolLegendSymbol = {
    shape: 'symbol';
    symbolType: `${SymbolType}`;
} & Required<SymbolLegendSymbolOptions>;

export type PreparedLegendSymbol = RectLegendSymbol | PathLegendSymbol | SymbolLegendSymbol;

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
    dashStyle?: DashStyle;
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

export type PreparedHaloOptions = {
    enabled: boolean;
    opacity: number;
    size: number;
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
    marker: {
        states: {
            normal: {
                symbol: `${SymbolType}`;
                enabled: boolean;
                radius: number;
                borderWidth: number;
                borderColor: string;
            };
            hover: {
                enabled: boolean;
                radius: number;
                borderWidth: number;
                borderColor: string;
                halo: PreparedHaloOptions;
            };
        };
    };
} & BasePreparedSeries;

export type PreparedBarXSeries = {
    type: BarXSeries['type'];
    data: BarXSeriesData[];
    stackId: string;
    stacking: BarXSeries['stacking'];
    dataLabels: {
        enabled: boolean;
        inside: boolean;
        style: BaseTextStyle;
        allowOverlap: boolean;
        padding: number;
    };
} & BasePreparedSeries;

export type PreparedBarYSeries = {
    type: BarYSeries['type'];
    data: BarYSeriesData[];
    stackId: string;
    stacking: BarYSeries['stacking'];
    dataLabels: {
        enabled: boolean;
        inside: boolean;
        style: BaseTextStyle;
        maxHeight: number;
        maxWidth: number;
    };
} & BasePreparedSeries;

export type PreparedPieSeries = {
    type: PieSeries['type'];
    data: PieSeriesData;
    value: PieSeriesData['value'];
    borderColor: string;
    borderWidth: number;
    borderRadius: number;
    center?: [string | number | null, string | number | null];
    radius?: string | number;
    innerRadius?: string | number;
    stackId: string;
    label?: PieSeriesData['label'];
    dataLabels: {
        enabled: boolean;
        padding: number;
        style: BaseTextStyle;
        allowOverlap: boolean;
        connectorPadding: number;
        connectorShape: ConnectorShape;
        distance: number;
        connectorCurve: ConnectorCurve;
    };
    states: {
        hover: {
            halo: PreparedHaloOptions;
        };
    };
    renderCustomShape?: PieSeries['renderCustomShape'];
    opacity: number | null;
} & BasePreparedSeries;

export type PreparedLineSeries = {
    type: LineSeries['type'];
    data: LineSeriesData[];
    lineWidth: number;
    dataLabels: {
        enabled: boolean;
        style: BaseTextStyle;
        padding: number;
        allowOverlap: boolean;
    };
    marker: {
        states: {
            normal: {
                symbol: `${SymbolType}`;
                enabled: boolean;
                radius: number;
                borderWidth: number;
                borderColor: string;
            };
            hover: {
                enabled: boolean;
                radius: number;
                borderWidth: number;
                borderColor: string;
                halo: PreparedHaloOptions;
            };
        };
    };
    dashStyle: DashStyle;
    linecap: LineCap;
    opacity: number | null;
} & BasePreparedSeries;

export type PreparedAreaSeries = {
    type: AreaSeries['type'];
    data: AreaSeriesData[];
    stacking: AreaSeries['stacking'];
    stackId: string;
    lineWidth: number;
    opacity: number;
    dataLabels: {
        enabled: boolean;
        style: BaseTextStyle;
        padding: number;
        allowOverlap: boolean;
    };
    marker: {
        states: {
            normal: {
                symbol: `${SymbolType}`;
                enabled: boolean;
                radius: number;
                borderWidth: number;
                borderColor: string;
            };
            hover: {
                enabled: boolean;
                radius: number;
                borderWidth: number;
                borderColor: string;
                halo: PreparedHaloOptions;
            };
        };
    };
} & BasePreparedSeries;

export type PreparedTreemapSeries = {
    type: TreemapSeries['type'];
    data: TreemapSeriesData[];
    dataLabels: {
        enabled: boolean;
        style: BaseTextStyle;
        padding: number;
        allowOverlap: boolean;
    };
    layoutAlgorithm: `${LayoutAlgorithm}`;
} & BasePreparedSeries &
    TreemapSeries;

export type PreparedSeries =
    | PreparedScatterSeries
    | PreparedBarXSeries
    | PreparedBarYSeries
    | PreparedPieSeries
    | PreparedLineSeries
    | PreparedAreaSeries
    | PreparedTreemapSeries;

export type PreparedSeriesOptions = SeriesOptionsDefaults;

export type StackedSeries = BarXSeries | AreaSeries | BarYSeries;
