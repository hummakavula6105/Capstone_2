// import React from 'react';
// import { letterFrequency } from '@visx/mock-data';
// import { Group } from '@visx/group';
// import { Bar } from '@visx/shape';
// import { scaleLinear, scaleBand } from '@visx/scale';
// import AllRequests from '../AllRequests/AllRequests';

// // We'll use some mock data from `@visx/mock-data` for this.
// const data = AllRequests();

// // Define the graph dimensions and margins
// const width = 500;
// const height = 500;
// const margin = { top: 20, bottom: 20, left: 20, right: 20 };

// // Then we'll create some bounds
// const xMax = width - margin.left - margin.right;
// const yMax = height - margin.top - margin.bottom;

// // We'll make some helpers to get at the data we want
// const x = d => d.area;
// const y = d => +d.isApproved* 100;

// // And then scale the graph by our data
// const xScale = scaleBand({
//   range: [100, xMax],
//   round: true,
//   domain: data.map(x),
//   padding: 0.4,
// });
// const yScale = scaleLinear({
//   range: [yMax, 100],
//   round: true,
//   domain: [0, Math.max(...data.map(y))],
// });

// // Compose together the scale and accessor functions to get point functions
// const compose = (scale, accessor) => data => scale(accessor(data));
// const xPoint = compose(xScale, x);
// const yPoint = compose(yScale, y);

// // Finally we'll embed it all in an SVG
// function BarGraph(props) {
//   return (
//     <svg width={width} height={height}>
//       {data.map((d, i) => {
//         const barHeight = yMax - yPoint(d);
//         return (
//           <Group key={`bar-${i}`}>
//             <Bar
//               x={xPoint(d)}
//               y={yMax - barHeight}
//               height={barHeight}
//               width={xScale.bandwidth()}
//               fill="#fc2e1c"
//             />
//           </Group>
//         );
//       })}
//     </svg>
//   );
// }

// export default BarGraph;
// ... somewhere else, render it ...
// <BarGraph />



// import React, { useMemo } from 'react';
// import { Bar } from '@visx/shape';
// import { Group } from '@visx/group';
// import { GradientTealBlue } from '@visx/gradient';
// import letterFrequency, { LetterFrequency } from '@visx/mock-data/lib/mocks/letterFrequency';
// import { scaleBand, scaleLinear } from '@visx/scale';


// const data = letterFrequency.slice(5);
// const verticalMargin = 120;

// // accessors
// const getLetter = (d: LetterFrequency) => d.letter;
// const getLetterFrequency = (d: LetterFrequency) => Number(d.frequency) * 100;

// export type BarsProps = {
// width: number;
// height: number;
// events?: boolean;
// };

// export default function Example({ width, height, events = false }: BarsProps) {
// // bounds
// const xMax = width;
// const yMax = height - verticalMargin;

// // scales, memoize for performance
// const xScale = useMemo(
//     () =>
//     scaleBand<string>({
//         range: [0, xMax],
//         round: true,
//         domain: data.map(getLetter),
//         padding: 0.4,
//     }),
//     [xMax],
// );
// const yScale = useMemo(
//     () =>
//     scaleLinear<number>({
//         range: [yMax, 0],
//         round: true,
//         domain: [0, Math.max(...data.map(getLetterFrequency))],
//     }),
//     [yMax],
// );

// function BarGraph (props) {
//     return width < 10 ? null : (
//         <svg width={width} height={height}>
//         <GradientTealBlue id="teal" />
//         <rect width={width} height={height} fill="url(#teal)" rx={14} />
//         <Group top={verticalMargin / 2}>
//             {data.map((d) => {
//             const letter = getLetter(d);
//             const barWidth = xScale.bandwidth();
//             const barHeight = yMax - (yScale(getLetterFrequency(d)) ?? 0);
//             const barX = xScale(letter);
//             const barY = yMax - barHeight;
//             return (
//                 <Bar
//                 key={`bar-${letter}`}
//                 x={barX}
//                 y={barY}
//                 width={barWidth}
//                 height={barHeight}
//                 fill="rgba(23, 233, 217, .5)"
//                 onClick={() => {
//                     if (events) alert(`clicked: ${JSON.stringify(Object.values(d))}`);
//                 }}
//                 />
//             );
//             })}
//         </Group>
//         </svg>
//         );
//     };
// };

// export default BarGraph;

