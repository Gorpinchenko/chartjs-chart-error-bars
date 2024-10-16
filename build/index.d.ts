/**
 * chartjs-chart-error-bars
 * https://github.com/sgratzl/chartjs-chart-error-bars
 *
 * Copyright (c) 2019-2023 Samuel Gratzl <samu@sgratzl.com>
 */

import { ChartType, ScriptableAndArrayOptions, BarOptions, BarHoverOptions, ScriptableContext, BarElement, PointOptions, PointHoverOptions, PointElement, ArcOptions, ArcHoverOptions, ArcElement, BarControllerChartOptions, CartesianScaleTypeRegistry, BarController, Scale, ChartMeta, Element, UpdateMode, BarControllerDatasetOptions, Chart, ChartItem, ChartConfiguration, LineControllerChartOptions, LineController, LineControllerDatasetOptions, ScatterControllerChartOptions, ScatterController, ScatterControllerDatasetOptions, PolarAreaControllerChartOptions, PolarAreaController, PolarAreaControllerDatasetOptions } from 'chart-js-v4';

interface IErrorBarOptions {
    errorBarLineWidth: number | {
        v: number[];
    };
    errorBarColor: string | {
        v: string[];
    };
    errorBarWhiskerLineWidth: number | {
        v: number[];
    };
    errorBarWhiskerRatio: number | {
        v: number[];
    };
    errorBarWhiskerSize: number | {
        v: number[];
    };
    errorBarWhiskerColor: string | {
        v: string[];
    };
}

declare class BarWithErrorBar extends BarElement {
    draw(ctx: CanvasRenderingContext2D): void;
    static readonly id = "barWithErrorBar";
    static readonly defaults: any;
    static readonly defaultRoutes: {
        [property: string]: string;
    } | undefined;
    static readonly descriptors: {
        _scriptable: boolean;
        _indexable: (name: string) => boolean;
    };
}
declare module 'chart-js-v4' {
    interface ElementOptionsByType<TType extends ChartType> {
        barWithErrorBar: ScriptableAndArrayOptions<IErrorBarOptions & BarOptions & BarHoverOptions, ScriptableContext<TType>>;
    }
}

declare class PointWithErrorBar extends PointElement {
    draw(ctx: CanvasRenderingContext2D, area?: any): void;
    static readonly id = "pointWithErrorBar";
    static readonly defaults: any;
    static readonly defaultRoutes: {
        backgroundColor: string;
        borderColor: string;
    };
    static readonly descriptors: {
        _scriptable: boolean;
        _indexable: (name: string) => boolean;
    };
}
declare module 'chart-js-v4' {
    interface ElementOptionsByType<TType extends ChartType> {
        pointWithErrorBar: ScriptableAndArrayOptions<IErrorBarOptions & PointOptions & PointHoverOptions, ScriptableContext<TType>>;
    }
}

declare class ArcWithErrorBar extends ArcElement {
    draw(ctx: CanvasRenderingContext2D): void;
    static readonly id = "arcWithErrorBar";
    static readonly defaults: any;
    static readonly defaultRoutes: {
        backgroundColor: string;
    };
    static readonly descriptors: {
        _scriptable: boolean;
        _indexable: (name: string) => boolean;
    };
}
declare module 'chart-js-v4' {
    interface ElementOptionsByType<TType extends ChartType> {
        arcWithErrorBar: ScriptableAndArrayOptions<IErrorBarOptions & ArcOptions & ArcHoverOptions, ScriptableContext<TType>>;
    }
}

interface IErrorBarXDataPoint {
    x: number;
    xMin: number | number[];
    xMax: number | number[];
}
interface IErrorBarYDataPoint {
    y: number;
    yMin: number | number[];
    yMax: number | number[];
}
interface IErrorBarRDataPoint {
    r: number;
    rMin: number | number[];
    rMax: number | number[];
}
interface IErrorBarXYDataPoint extends IErrorBarXDataPoint, IErrorBarYDataPoint {
}

declare class BarWithErrorBarsController extends BarController {
    getMinMax(scale: Scale, canStack: boolean): {
        min: number;
        max: number;
    };
    protected parsePrimitiveData(meta: ChartMeta, data: any[], start: number, count: number): Record<string, unknown>[];
    protected parseObjectData(meta: ChartMeta, data: any[], start: number, count: number): Record<string, unknown>[];
    private parseErrorData;
    updateElement(element: Element, index: number | undefined, properties: Record<string, unknown>, mode: UpdateMode): void;
    static readonly id = "barWithErrorBars";
    static readonly defaults: any;
    static readonly overrides: any;
    static readonly defaultRoutes: {
        [property: string]: string;
    } | undefined;
}
interface BarWithErrorBarsControllerDatasetOptions extends BarControllerDatasetOptions, ScriptableAndArrayOptions<IErrorBarOptions, ScriptableContext<'barWithErrorBars'>> {
}
declare module 'chart-js-v4' {
    interface ChartTypeRegistry {
        barWithErrorBars: {
            chartOptions: BarControllerChartOptions;
            datasetOptions: BarWithErrorBarsControllerDatasetOptions;
            defaultDataPoint: IErrorBarXDataPoint | IErrorBarYDataPoint;
            scales: keyof CartesianScaleTypeRegistry;
            metaExtensions: Record<string, never>;
            parsedDataType: (IErrorBarXDataPoint | IErrorBarYDataPoint) & ChartTypeRegistry['bar']['parsedDataType'];
        };
    }
}
declare class BarWithErrorBarsChart<DATA extends unknown[] = IErrorBarXDataPoint[], LABEL = string> extends Chart<'barWithErrorBars', DATA, LABEL> {
    static id: string;
    constructor(item: ChartItem, config: Omit<ChartConfiguration<'barWithErrorBars', DATA, LABEL>, 'type'>);
}

declare class LineWithErrorBarsController extends LineController {
    getMinMax(scale: Scale, canStack: boolean): {
        min: number;
        max: number;
    };
    protected parsePrimitiveData(meta: ChartMeta, data: any[], start: number, count: number): Record<string, unknown>[];
    protected parseObjectData(meta: ChartMeta, data: any[], start: number, count: number): Record<string, unknown>[];
    private parseErrorData;
    updateElement(element: Element, index: number | undefined, properties: Record<string, unknown>, mode: UpdateMode): void;
    protected updateElementScale(index: number, properties: Record<string, unknown>, mode: UpdateMode): void;
    updateElements(points: Element[], start: number, count: number, mode: UpdateMode): void;
    static readonly id = "lineWithErrorBars";
    static readonly defaults: any;
    static readonly overrides: any;
    static readonly defaultRoutes: {
        [property: string]: string;
    } | undefined;
}
interface LineWithErrorBarsControllerDatasetOptions extends LineControllerDatasetOptions, ScriptableAndArrayOptions<IErrorBarOptions, ScriptableContext<'lineWithErrorBars'>> {
}
declare module 'chart-js-v4' {
    interface ChartTypeRegistry {
        lineWithErrorBars: {
            chartOptions: LineControllerChartOptions;
            datasetOptions: LineWithErrorBarsControllerDatasetOptions;
            defaultDataPoint: IErrorBarXDataPoint | IErrorBarYDataPoint;
            scales: keyof CartesianScaleTypeRegistry;
            metaExtensions: Record<string, never>;
            parsedDataType: (IErrorBarXDataPoint | IErrorBarYDataPoint) & ChartTypeRegistry['line']['parsedDataType'];
        };
    }
}
declare class LineWithErrorBarsChart<DATA extends unknown[] = IErrorBarXDataPoint[], LABEL = string> extends Chart<'lineWithErrorBars', DATA, LABEL> {
    static id: string;
    constructor(item: ChartItem, config: Omit<ChartConfiguration<'lineWithErrorBars', DATA, LABEL>, 'type'>);
}

declare class ScatterWithErrorBarsController extends ScatterController {
    getMinMax(scale: Scale, canStack: boolean): {
        min: number;
        max: number;
    };
    protected parsePrimitiveData(meta: ChartMeta, data: any[], start: number, count: number): Record<string, unknown>[];
    protected parseObjectData(meta: ChartMeta, data: any[], start: number, count: number): Record<string, unknown>[];
    private parseErrorData;
    updateElement(element: Element, index: number | undefined, properties: Record<string, unknown>, mode: UpdateMode): void;
    protected updateElementScale(index: number, properties: Record<string, unknown>, mode: UpdateMode): void;
    updateElements(points: Element[], start: number, count: number, mode: UpdateMode): void;
    static readonly id = "scatterWithErrorBars";
    static readonly defaults: any;
    static readonly overrides: any;
    static readonly defaultRoutes: {
        [property: string]: string;
    } | undefined;
}
interface ScatterWithErrorBarsControllerDatasetOptions extends ScatterControllerDatasetOptions, ScriptableAndArrayOptions<IErrorBarOptions, ScriptableContext<'scatterWithErrorBars'>> {
}
declare module 'chart-js-v4' {
    interface ChartTypeRegistry {
        scatterWithErrorBars: {
            chartOptions: ScatterControllerChartOptions;
            datasetOptions: ScatterWithErrorBarsControllerDatasetOptions;
            defaultDataPoint: IErrorBarXYDataPoint;
            scales: keyof CartesianScaleTypeRegistry;
            metaExtensions: Record<string, never>;
            parsedDataType: IErrorBarXYDataPoint & ChartTypeRegistry['scatter']['parsedDataType'];
        };
    }
}
declare class ScatterWithErrorBarsChart<DATA extends unknown[] = IErrorBarXYDataPoint[], LABEL = string> extends Chart<'scatterWithErrorBars', DATA, LABEL> {
    static id: string;
    constructor(item: ChartItem, config: Omit<ChartConfiguration<'scatterWithErrorBars', DATA, LABEL>, 'type'>);
}

declare class PolarAreaWithErrorBarsController extends PolarAreaController {
    getMinMaxImpl(scale: Scale): {
        min: number;
        max: number;
    };
    getMinMax(scale: Scale): {
        min: number;
        max: number;
    };
    countVisibleElements(): number;
    protected parsePrimitiveData(meta: ChartMeta, data: any[], start: number, count: number): Record<string, unknown>[];
    protected parseObjectData(meta: ChartMeta, data: any[], start: number, count: number): Record<string, unknown>[];
    private parseErrorData;
    updateElement(element: Element, index: number | undefined, properties: Record<string, unknown>, mode: UpdateMode): void;
    updateElements(arcs: Element[], start: number, count: number, mode: UpdateMode): void;
    static readonly id = "polarAreaWithErrorBars";
    static readonly defaults: any;
    static readonly overrides: any;
    static readonly defaultRoutes: {
        [property: string]: string;
    } | undefined;
}
interface PolarAreaWithErrorBarsControllerDatasetOptions extends PolarAreaControllerDatasetOptions, ScriptableAndArrayOptions<IErrorBarOptions, ScriptableContext<'polarAreaWithErrorBars'>> {
}
declare module 'chart-js-v4' {
    interface ChartTypeRegistry {
        polarAreaWithErrorBars: {
            chartOptions: PolarAreaControllerChartOptions;
            datasetOptions: PolarAreaWithErrorBarsControllerDatasetOptions;
            defaultDataPoint: IErrorBarRDataPoint;
            scales: keyof CartesianScaleTypeRegistry;
            metaExtensions: Record<string, never>;
            parsedDataType: IErrorBarRDataPoint & ChartTypeRegistry['polarArea']['parsedDataType'];
        };
    }
}
declare class PolarAreaWithErrorBarsChart<DATA extends unknown[] = IErrorBarRDataPoint[], LABEL = string> extends Chart<'polarAreaWithErrorBars', DATA, LABEL> {
    static id: string;
    constructor(item: ChartItem, config: Omit<ChartConfiguration<'polarAreaWithErrorBars', DATA, LABEL>, 'type'>);
}

export { ArcWithErrorBar, BarWithErrorBar, BarWithErrorBarsChart, BarWithErrorBarsController, type BarWithErrorBarsControllerDatasetOptions, type IErrorBarOptions, type IErrorBarRDataPoint, type IErrorBarXDataPoint, type IErrorBarXYDataPoint, type IErrorBarYDataPoint, LineWithErrorBarsChart, LineWithErrorBarsController, type LineWithErrorBarsControllerDatasetOptions, PointWithErrorBar, PolarAreaWithErrorBarsChart, PolarAreaWithErrorBarsController, type PolarAreaWithErrorBarsControllerDatasetOptions, ScatterWithErrorBarsChart, ScatterWithErrorBarsController, type ScatterWithErrorBarsControllerDatasetOptions };
//# sourceMappingURL=index.d.ts.map
