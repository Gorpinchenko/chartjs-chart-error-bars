import createChart from '../__tests__/createChart';
import { registry, LinearScale } from 'chart.js';
import { ILineWithErrorBarsControllerConfiguration, LineWithErrorBarsController } from './LineWithErrorBarsController';
import { PointWithErrorBar } from '../elements';
import { IErrorBarYDataPoint } from './base';

describe('bar', () => {
  beforeAll(() => {
    registry.addControllers(LineWithErrorBarsController);
    registry.addElements(PointWithErrorBar);
    registry.addScales(LinearScale);
  });
  test('default', () => {
    return createChart<
      IErrorBarYDataPoint,
      string,
      ILineWithErrorBarsControllerConfiguration<IErrorBarYDataPoint, string>
    >({
      type: LineWithErrorBarsController.id,
      data: {
        labels: ['A', 'B'],
        datasets: [
          {
            data: [
              {
                y: 4,
                yMin: 1,
                yMax: 6,
              },
              {
                y: 2,
                yMin: 1,
                yMax: 4,
              },
            ],
          },
        ],
      },
      options: {
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          },
        },
      },
    }).toMatchImageSnapshot();
  });
});
