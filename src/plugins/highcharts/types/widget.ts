import type {ChartKitOnError, ChartKitOnLoadData} from '../../../types';
import type {ChartKitComment} from './comments';
import type {DrillDownConfig, StringParams} from './misc';

type GraphWidgetSeriesOptions = Highcharts.SeriesOptionsType & {
    title?: string;
    sname?: string;
    fname?: string;
};

export type HighchartsWidgetData = {
    data: (
        | GraphWidgetSeriesOptions[]
        | {
              graphs: GraphWidgetSeriesOptions[];
              categories_ms: number[];
          }
        | {
              graphs: GraphWidgetSeriesOptions[];
              categories: string[];
          }
        | {
              graphs: GraphWidgetSeriesOptions[];
          }
    ) & {comments?: ChartKitComment[]};
    config: {
        hideComments?: boolean;
        hideHolidaysBands?: boolean;
        disableExternalComments?: boolean;
        hideHolidays?: boolean;
        normalizeDiv?: boolean;
        normalizeSub?: boolean;
        withoutLineLimit?: boolean;
        precision?: number;
        title?: string;
        subtitle?: string;
        highstock?: {
            override_range_min: number | string;
            override_range_max: number | string;
            range_min?: number | string;
            range_max?: number | string;
        };
        drillDown?: DrillDownConfig;
        enableSum?: boolean;
        unsafe?: boolean;
    };
    libraryConfig: Highcharts.Options;
    params?: StringParams;
    comments?: ChartKitComment[];
    sideMarkdown?: string;
};

export type HighchartsWidgetProps = {
    id: string;
    data: HighchartsWidgetData;
    isMobile?: boolean;
    nonBodyScroll?: boolean;
    splitTooltip?: boolean;
    onLoad?: (data?: ChartKitOnLoadData<'highcharts'>) => void;
    onChange?: (data1: any, data2: any, data3: any) => void;
    onError?: ChartKitOnError;
};