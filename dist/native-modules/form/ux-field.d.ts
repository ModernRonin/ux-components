import { ViewResources, View } from 'aurelia-templating';
import { StyleEngine } from 'aurelia-ux';
import { Themable } from 'aurelia-ux';
export declare class UxField implements Themable {
    private element;
    resources: ViewResources;
    private styleEngine;
    theme: null;
    label: string;
    view: View;
    constructor(element: Element, resources: ViewResources, styleEngine: StyleEngine);
    created(_: any, myView: View): void;
    bind(): void;
    attached(): void;
    themeChanged(newValue: any): void;
}
