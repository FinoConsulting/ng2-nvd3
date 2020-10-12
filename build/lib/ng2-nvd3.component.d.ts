import { OnChanges, OnDestroy, ElementRef, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NvD3Component implements OnChanges, OnDestroy {
    options: any;
    data: any;
    el: HTMLElement;
    chart: any;
    chartType: string;
    svg: any;
    constructor(elementRef: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    initChart(options: any): void;
    updateWithOptions(options: any): void;
    updateWithData(data: any): void;
    updateSize(): void;
    configure(chart: any, options: any, chartType: any): void;
    configureEvents(dispatch: any, options: any): void;
    clearElement(): void;
    static ɵfac: i0.ɵɵFactoryDef<NvD3Component, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NvD3Component, "nvd3", never, { "options": "options"; "data": "data"; }, {}, never, never>;
}
