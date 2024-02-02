import type {MinimalValidConfig, RawSerieData, YagrConfig} from '@gravity-ui/yagr';
import type Yagr from '@gravity-ui/yagr';
import {ChartKitProps} from 'src/types';

export type {default as Yagr} from '@gravity-ui/yagr';
export type {YagrReactRef} from '@gravity-ui/yagr/react';
export * from '@gravity-ui/yagr/dist/types';

export interface CustomTooltipProps {
    yagr: Yagr<MinimalValidConfig> | undefined;
}

export type YagrWidgetProps = ChartKitProps<'yagr'> & {
    id: string;
};

export type YagrWidgetData = {
    data: {
        graphs: RawSerieData[];
        timeline: number[];
        timeZone?: string;
    };
    libraryConfig: Partial<YagrConfig>;
    sources?: Record<
        number,
        {
            data: {
                program: string;
            };
        }
    >;
};
