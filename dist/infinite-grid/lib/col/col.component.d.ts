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
    protected row: RowComponent;
    classAttribute: string;
    constructor(parent: RowComponent);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColComponent, [{ host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColComponent, "column", never, { "xs": "xs"; "sm": "sm"; "md": "md"; "lg": "lg"; "xl": "xl"; "xxl": "xxl"; }, {}, never, ["*"], false>;
}
