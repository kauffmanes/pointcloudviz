import React from 'react';
// import { object, string, number } from 'prop-types';
// import * as ROSLIB from 'roslib';
import Worldview, { Grid, Axes } from "regl-worldview";
import useRange from './utils/useRange';

import './styles.css';

export default function PointCloudViz() {

  const range = useRange();
  // create coordinates
  const x = 3 + range * 2;
  const y = x;
  const z = x;
  const step = 10;
  const points = [];

  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      for (let k = 0; k < z; k++) {
        points.push({ x: i * step, y: j * step, z: k * step });
      }
    }
  }

  const scaleX = 3 * range;

  const marker = {
    points,
    scale: { x: scaleX, y: scaleX, z: scaleX },
    color: { r: 1, g: range, b: 1, a: 1 },
    pose: { position: { x: range, y: range, z: range }, orientation: { x: 0, y: 0, z: 0, w: 1 } },
  };

  return (
    <div class="container">
      <Worldview>
        <Points>{[marker]}</Points>
        <Grid count={50} />
        <Axes />
      </Worldview>
    </div>
  );
}

// PointCloudViz.propTypes = {
//   ros: object,
//   id: string,
//   width: number,
//   height: number
// }

// PointCloudViz.defaultProps = {
//   ros: new ROSLIB.Ros({
//     url: 'ws://localhost:9090'
//   }),
//   id: 'map',
//   width: 800,
//   height: 500
// }

// export default PointCloudViz;