import { OnInit } from '@angular/core';
import { RowComponent } from '../row/row.component';
import * as i0 from "@angular/core";
export declare class ColComponent implements OnInit {
    xs: number | 'auto';
    sm: number | 'auto';
    md: number | 'auto';
    lg: number | 'auto';
    xl: number | 'auto';
    xxl: number | 'auto';
    text_xs?: "start" | "center" | "end";
    text_sm?: "start" | "center" | "end";
    text_md?: "start" | "center" | "end";
    text_lg?: "start" | "center" | "end";
    text_xl?: "start" | "center" | "end";
    text_xxl?: "start" | "center" | "end";
    align_self_xs?: "start" | "center" | "end" | "baseline" | "stretch";
    align_self_sm?: "start" | "center" | "end" | "baseline" | "stretch";
    align_self_md?: "start" | "center" | "end" | "baseline" | "stretch";
    align_self_lg?: "start" | "center" | "end" | "baseline" | "stretch";
    align_self_xl?: "start" | "center" | "end" | "baseline" | "stretch";
    align_self_xxl?: "start" | "center" | "end" | "baseline" | "stretch";
    protected row: RowComponent;
    classAttribute: string;
    constructor(parent: RowComponent);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColComponent, [{ host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColComponent, "column", never, { "xs": "xs"; "sm": "sm"; "md": "md"; "lg": "lg"; "xl": "xl"; "xxl": "xxl"; "text_xs": "text_xs"; "text_sm": "text_sm"; "text_md": "text_md"; "text_lg": "text_lg"; "text_xl": "text_xl"; "text_xxl": "text_xxl"; "align_self_xs": "align_self_xs"; "align_self_sm": "align_self_sm"; "align_self_md": "align_self_md"; "align_self_lg": "align_self_lg"; "align_self_xl": "align_self_xl"; "align_self_xxl": "align_self_xxl"; }, {}, never, ["*"], false>;
}
