import { registry, RadialLinearScale } from 'chart-js-v4';
import createChart from '../__tests__/createChart';
import { PolarAreaWithErrorBarsController } from './PolarAreaWithErrorBarsController';
import { ArcWithErrorBar } from '../elements';
import { describe, beforeAll, test } from 'vitest';
describe('bar', () => {
  beforeAll(() => {
    registry.addControllers(PolarAreaWithErrorBarsController);
    registry.addElements(ArcWithErrorBar);
    registry.addScales(RadialLinearScale);
  });
  test('default', () => {
    return createChart({
      type: PolarAreaWithErrorBarsController.id,
      data: {
        labels: ['A', 'B'],
        datasets: [
          {
            data: [
              {
                r: 4,
                rMin: 1,
                rMax: 6,
              },
              {
                r: 2,
                rMin: 1,
                rMax: 4,
              },
            ],
          },
        ],
      },
      options: {
        scales: {
          r: {
            display: false,
          },
        },
      },
    }).toMatchImageSnapshot();
  });
});
