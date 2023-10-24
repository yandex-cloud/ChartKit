import React from 'react';
import {StoryObj} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {BasicBarXChart} from '../examples/bar-x/Basic';
import {settings} from '../../../libs';
import {D3Plugin} from '../index';
import {Loader} from '../../../components/Loader/Loader';
import {GroupedColumns} from '../examples/bar-x/GroupedColumns';
import {StackedColumns} from '../examples/bar-x/StackedColumns';
import {Container, Row, Col, Text} from '@gravity-ui/uikit';
import {BasicPie} from '../examples/pie/Basic';
import {Basic as BasicScatter} from '../examples/scatter/Basic';
import {Basic as BasicLine} from '../examples/line/Basic';
import {Donut} from '../examples/pie/Donut';
import {LineAndBarXCombinedChart} from '../examples/combined/LineAndBarX';

const ShowcaseStory = () => {
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        settings.set({plugins: [D3Plugin]});
        setLoading(false);
    }, []);

    return (
        <div style={{width: '100%', height: '100%'}}>
            {loading ? (
                <Loader />
            ) : (
                <Container spaceRow={5}>
                    <Row space={1}>
                        <Text variant="header-2">Line charts</Text>
                    </Row>
                    <Row space={3} style={{minHeight: 280}}>
                        <Col>
                            <Text variant="subheader-1">Basic line chart</Text>
                            <BasicLine />
                        </Col>
                    </Row>
                    <Row space={1}>
                        <Text variant="header-2">Bar-x charts</Text>
                    </Row>
                    <Row space={3} style={{minHeight: 280}}>
                        <Col>
                            <Text variant="subheader-1">Basic column chart</Text>
                            <BasicBarXChart />
                        </Col>
                        <Col>
                            <Text variant="subheader-1">Grouped columns</Text>
                            <GroupedColumns />
                        </Col>
                        <Col>
                            <Text variant="subheader-1">Stacked columns</Text>
                            <StackedColumns />
                        </Col>
                    </Row>
                    <Row space={1}>
                        <Text variant="header-2">Pie charts</Text>
                    </Row>
                    <Row space={3} style={{minHeight: 280}}>
                        <Col>
                            <Text variant="subheader-1">Basic pie chart</Text>
                            <BasicPie />
                        </Col>
                        <Col>
                            <Text variant="subheader-1">Donut chart</Text>
                            <Donut />
                        </Col>
                    </Row>
                    <Row space={1}>
                        <Text variant="header-2">Scatter charts</Text>
                    </Row>
                    <Row space={3} style={{minHeight: 280}}>
                        <Col>
                            <Text variant="subheader-1">Basic scatter</Text>
                            <BasicScatter />
                        </Col>
                    </Row>
                    <Row space={1}>
                        <Text variant="header-2">Combined chart</Text>
                    </Row>
                    <Row space={3} style={{minHeight: 280}}>
                        <Col>
                            <Text variant="subheader-1">Line + Bar-X</Text>
                            <LineAndBarXCombinedChart />
                        </Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </Container>
            )}
        </div>
    );
};

export const D3ShowcaseStory: StoryObj<typeof ShowcaseStory> = {
    name: 'Showcase',
};

export default {
    title: 'Plugins/D3/Showcase',
    decorators: [withKnobs],
    component: ShowcaseStory,
};
