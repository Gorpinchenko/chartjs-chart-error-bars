import { IScaleOptions, Scale } from 'chart.js';

export interface IErrorBarXDataPoint {
  /**
   * the actual value
   */
  x: number;
  /**
   * the minimal absolute error bar value
   */
  xMin: number | number[];
  /**
   * the maximal absolute error bar value
   */
  xMax: number | number[];
}

export interface IErrorBarYDataPoint {
  /**
   * the actual value
   */
  y: number;
  /**
   * the minimal absolute error bar value
   */
  yMin: number | number[];
  /**
   * the maximal absolute error bar value
   */
  yMax: number | number[];
}

export interface IErrorBarRDataPoint {
  /**
   * the actual value
   */
  r: number;
  /**
   * the minimal absolute error bar value
   */
  rMin: number | number[];
  /**
   * the maximal absolute error bar value
   */
  rMax: number | number[];
}

export interface IErrorBarXYDataPoint extends IErrorBarXDataPoint, IErrorBarYDataPoint {}

export function getMinMax(
  scale: Scale<IScaleOptions>,
  canStack: boolean,
  superMethod: (scale: Scale<IScaleOptions>, canStack: boolean) => { min: number; max: number }
) {
  const axis = scale.axis;
  scale.axis = `${axis}MinMin`;
  const min = superMethod(scale, canStack).min;
  scale.axis = `${axis}MaxMax`;
  const max = superMethod(scale, canStack).max;
  scale.axis = axis;
  return { min, max };
}

function computeExtrema(v: number, vm: number | number[], op: (...args: number[]) => number) {
  if (Array.isArray(vm)) {
    return op(...vm);
  }
  if (typeof vm === 'number') {
    return vm;
  }
  return v;
}

export function parseErrorNumberData(
  parsed: any[],
  scale: Scale<IScaleOptions>,
  data: any[],
  start: number,
  count: number
) {
  const axis = typeof scale === 'string' ? scale : scale.axis;
  const vMin = `${axis}Min`;
  const vMax = `${axis}Max`;
  const vMinMin = `${axis}MinMin`;
  const vMaxMax = `${axis}MaxMax`;
  for (let i = 0; i < count; i++) {
    const index = i + start;
    const p = parsed[i];
    p[vMin] = data[index][vMin];
    p[vMax] = data[index][vMax];
    p[vMinMin] = computeExtrema(p[axis], p[vMin], Math.min);
    p[vMaxMax] = computeExtrema(p[axis], p[vMax], Math.max);
  }
}
export function parseErrorLabelData(parsed: any[], scale: Scale<IScaleOptions>, start: number, count: number) {
  const axis = scale.axis;
  const labels = scale.getLabels();
  for (let i = 0; i < count; i++) {
    const index = i + start;
    const p = parsed[i];
    p[axis] = scale.parse(labels[index], index);
  }
}
