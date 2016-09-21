import { ElementRef, AfterViewInit } from '@angular/core';
import { TooltipOptions } from './tooltip-options';
export declare class TooltipContentComponent implements AfterViewInit {
    private element;
    caretElm: any;
    readonly cssClasses: string;
    private title;
    private template;
    private context;
    private host;
    private showCaret;
    private type;
    private placement;
    private alignment;
    private closeOnClickOutside;
    private closeOnMouseLeave;
    private hide;
    private spacing;
    constructor(element: ElementRef, options: TooltipOptions);
    ngAfterViewInit(): void;
    position(): void;
    positionContent(nativeElm: any, hostDim: any, elmDim: any): void;
    positionCaret(hostDim: any, elmDim: any): void;
    checkFlip(hostDim: any, elmDim: any): void;
    onMouseLeave(target: any): void;
    onDocumentClick(target: any): void;
}
