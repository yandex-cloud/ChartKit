import type {AxisDomain, AxisScale, Selection} from 'd3';
import {select} from 'd3';
import {BaseTextStyle} from '../../../../../types';
import {getXAxisItems, getXAxisOffset, getXTickPosition} from '../axis';
import {getLabelsMaxHeight, setEllipsisForOverflowText} from '../text';

type AxisBottomArgs = {
    scale: AxisScale<AxisDomain>;
    ticks: {
        count?: number;
        maxTickCount: number;
        labelFormat: (value: any) => string;
        labelsPaddings?: number;
        labelsMargin?: number;
        labelsStyle?: BaseTextStyle;
        size: number;
        rotation: number;
    };
    domain: {
        size: number;
        color?: string;
    };
};

function addDomain(
    selection: Selection<SVGGElement, unknown, null, undefined>,
    options: {
        size: number;
        color?: string;
    },
) {
    const {size, color} = options;

    selection
        .selectAll('.domain')
        .data([null])
        .enter()
        .insert('path', '.tick')
        .attr('class', 'domain')
        .attr('stroke', color || 'currentColor')
        .attr('d', `M0,0V0H${size}`);
}

function calculateCos(deg: number, precision = 4) {
    const factor = Math.pow(10, precision);
    return Math.floor(Math.cos((Math.PI / 180) * deg) * factor) / factor;
}

export function axisBottom(args: AxisBottomArgs) {
    const {
        scale,
        ticks: {
            labelFormat,
            labelsPaddings = 0,
            labelsMargin = 0,
            labelsStyle,
            size: tickSize,
            count: ticksCount,
            maxTickCount,
            rotation,
        },
        domain: {size: domainSize, color: domainColor},
    } = args;
    const offset = getXAxisOffset();
    const position = getXTickPosition({scale, offset});
    const values = getXAxisItems({scale, count: ticksCount, maxCount: maxTickCount});
    const labelHeight = getLabelsMaxHeight({
        labels: values,
        style: {'font-size': labelsStyle?.fontSize || ''},
    });

    return function (selection: Selection<SVGGElement, unknown, null, undefined>) {
        const x = selection.node()?.getBoundingClientRect()?.x || 0;
        const right = x + domainSize;

        let transform = `translate(0, ${labelHeight + labelsMargin}px)`;
        if (rotation) {
            const labelsOffsetTop = labelHeight * calculateCos(rotation) + labelsMargin;
            transform = `translate(0, ${labelsOffsetTop}px) rotate(${rotation}deg)`;
        }

        selection
            .selectAll('.tick')
            .data(values)
            .order()
            .join((el) => {
                const tick = el.append('g').attr('class', 'tick');
                tick.append('line').attr('stroke', 'currentColor').attr('y2', tickSize);
                tick.append('text')
                    .text(labelFormat)
                    .attr('fill', 'currentColor')
                    .attr('text-anchor', () => {
                        if (rotation) {
                            return rotation > 0 ? 'start' : 'end';
                        }
                        return 'middle';
                    })
                    .style('transform', transform);

                return tick;
            })
            .attr('transform', function (d) {
                return `translate(${position(d as AxisDomain) + offset},0)`;
            });

        // Remove tick that has the same x coordinate like domain
        selection
            .select('.tick')
            .filter((d) => {
                return position(d as AxisDomain) === 0;
            })
            .select('line')
            .remove();

        const labels = selection.selectAll<SVGTextElement, unknown>('.tick text');

        if (rotation) {
            // labels.attr('text-anchor', rotation > 0 ? 'start' : 'end');
            // .style('transform-box', 'fill-box')
            // .style('transform', `rotate(${rotation}deg)`);
            // if (rotation < 0) {
            //     labels.style('transform-origin', function () {
            //         const labelWidth = (this as Element)?.getBoundingClientRect()?.width || 0;
            //         return `${labelWidth}px ${labelsMargin}px`;
            //     });
            // }
            // rotateLabels(labels, {rotation, margin: labelsMargin});
        } else {
            // remove overlapping labels
            let elementX = 0;
            selection
                .selectAll('.tick')
                .filter(function () {
                    const node = this as unknown as Element;
                    const r = node.getBoundingClientRect();

                    if (r.left < elementX) {
                        return true;
                    }
                    elementX = r.right + labelsPaddings;
                    return false;
                })
                .remove();

            // add an ellipsis to the labels that go beyond the boundaries of the chart
            labels.each(function (_d, i, nodes) {
                if (i === nodes.length - 1) {
                    const currentElement = this as SVGTextElement;
                    const prevElement = nodes[i - 1] as SVGTextElement;
                    const text = select(currentElement);

                    const currentElementPosition = currentElement.getBoundingClientRect();
                    const prevElementPosition = prevElement?.getBoundingClientRect();

                    const lackingSpace = Math.max(0, currentElementPosition.right - right);
                    if (lackingSpace) {
                        const remainSpace =
                            right - (prevElementPosition?.right || 0) - labelsPaddings;

                        const translateX = currentElementPosition.width / 2 - lackingSpace;
                        text.attr('text-anchor', 'end').attr(
                            'transform',
                            `translate(${translateX},0)`,
                        );

                        setEllipsisForOverflowText(text, remainSpace);
                    }
                }
            });
        }

        selection
            .call(addDomain, {size: domainSize, color: domainColor})
            // .attr('text-anchor', 'middle')
            .style('font-size', labelsStyle?.fontSize || '');
    };
}
