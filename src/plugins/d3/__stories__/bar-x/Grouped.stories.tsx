import React from 'react';
import {Meta, Story} from '@storybook/react';
import {object, withKnobs} from '@storybook/addon-knobs';
import {Button} from '@gravity-ui/uikit';
import {settings} from '../../../../libs';
import {ChartKit} from '../../../../components/ChartKit';
import type {ChartKitWidgetData, ChartKitRef} from '../../../../types';
import {D3Plugin} from '../..';

const Template: Story = () => {
    const [shown, setShown] = React.useState(false);
    const chartkitRef = React.useRef<ChartKitRef>();
    const data: ChartKitWidgetData = {
        tooltip: {enabled: true},
        title: {text: 'Grouped'},
        xAxis: {
            type: 'category',
            categories: ['A', 'B', 'C'],
            labels: {enabled: true},
        },
        yAxis: [
            {
                type: 'linear',
                labels: {enabled: true},
                min: 0,
            },
        ],
        series: {
            data: [
                {
                    type: 'bar-x',
                    visible: true,
                    stacking: 'normal',
                    data: [
                        {
                            category: 'A',
                            y: 10,
                        },
                        {
                            category: 'B',
                            y: 80,
                        },
                        {
                            category: 'C',
                            y: 25,
                        },
                    ],
                    stackId: 'min',
                    name: 'Min',
                    dataLabels: {
                        enabled: true,
                    },
                },
                {
                    type: 'bar-x',
                    visible: true,
                    stacking: 'normal',
                    data: [
                        {
                            category: 'A',
                            y: 110,
                        },
                        {
                            category: 'B',
                            y: 80,
                        },
                        {
                            category: 'C',
                            y: 200,
                        },
                    ],
                    stackId: 'mid',
                    name: 'Mid',
                    dataLabels: {
                        enabled: true,
                    },
                },
                {
                    type: 'bar-x',
                    visible: true,
                    stacking: 'normal',
                    data: [
                        {
                            category: 'A',
                            y: 410,
                        },
                        {
                            category: 'B',
                            y: 580,
                        },
                        {
                            category: 'C',
                            y: 205,
                        },
                    ],
                    stackId: 'max',
                    name: 'Max',
                    dataLabels: {
                        enabled: true,
                    },
                },
            ],
        },
    };

    if (!shown) {
        settings.set({plugins: [D3Plugin]});
        return <Button onClick={() => setShown(true)}>Show chart</Button>;
    }

    return (
        <div
            style={{
                height: '80vh',
                width: '100%',
            }}
        >
            <ChartKit ref={chartkitRef} type="d3" data={object<ChartKitWidgetData>('data', data)} />
        </div>
    );
};

export const Grouped = Template.bind({});

const meta: Meta = {
    title: 'Plugins/D3/Bar-X',
    decorators: [withKnobs],
};

export default meta;
