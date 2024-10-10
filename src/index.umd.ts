import { registry } from 'chart-js-v4';
import {
  BarWithErrorBarsController,
  LineWithErrorBarsController,
  PolarAreaWithErrorBarsController,
  ScatterWithErrorBarsController,
} from './controllers';
import { BarWithErrorBar, ArcWithErrorBar, PointWithErrorBar } from './elements';

export * from '.';

registry.addControllers(
  BarWithErrorBarsController,
  LineWithErrorBarsController,
  PolarAreaWithErrorBarsController,
  ScatterWithErrorBarsController
);
registry.addElements(BarWithErrorBar, ArcWithErrorBar, PointWithErrorBar);
