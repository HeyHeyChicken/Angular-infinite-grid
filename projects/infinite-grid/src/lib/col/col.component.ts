import { Component, Host, HostBinding, Input, OnInit } from '@angular/core';
import { RowComponent } from '../row/row.component';

@Component({
  selector: 'column',
  templateUrl: './col.component.html',
  styleUrls: ['./col.component.scss'],
})
export class ColComponent implements OnInit {
  //#region Attributes

  @Input() public xs: number | 'auto' = -1;
  @Input() public sm: number | 'auto' = -1;
  @Input() public md: number | 'auto' = -1;
  @Input() public lg: number | 'auto' = -1;
  @Input() public xl: number | 'auto' = -1;
  @Input() public xxl: number | 'auto' = -1;

  @Input() public text_xs?: "start" | "center" | "end";
  @Input() public text_sm?: "start" | "center" | "end";
  @Input() public text_md?: "start" | "center" | "end";
  @Input() public text_lg?: "start" | "center" | "end";
  @Input() public text_xl?: "start" | "center" | "end";
  @Input() public text_xxl?: "start" | "center" | "end";

  @Input() public align_self_xs?: "start" | "center" | "end" | "baseline" | "stretch";
  @Input() public align_self_sm?: "start" | "center" | "end" | "baseline" | "stretch";
  @Input() public align_self_md?: "start" | "center" | "end" | "baseline" | "stretch";
  @Input() public align_self_lg?: "start" | "center" | "end" | "baseline" | "stretch";
  @Input() public align_self_xl?: "start" | "center" | "end" | "baseline" | "stretch";
  @Input() public align_self_xxl?: "start" | "center" | "end" | "baseline" | "stretch";

  protected row: RowComponent;

  @HostBinding('class') classAttribute: string = '';

  //#endregion

  constructor(@Host() parent: RowComponent) {
    this.row = parent;
  }

  ngOnInit(): void {
    const CLASSES: string[] = [];
    if (this.row.size > 0) {
      CLASSES.push('row-' + this.row.size);
    }
    //#region Size
    
    if (this.xs == 'auto') CLASSES.push('xs-' + this.xs);
    else if (this.xs >= 0) CLASSES.push('xs-' + this.xs);

    if (this.sm == 'auto') CLASSES.push('sm-' + this.xs);
    else if (this.sm >= 0) CLASSES.push('sm-' + this.sm);

    if (this.md == 'auto') CLASSES.push('md-' + this.xs);
    else if (this.md >= 0) CLASSES.push('md-' + this.md);

    if (this.lg == 'auto') CLASSES.push('lg-' + this.xs);
    else if (this.lg >= 0) CLASSES.push('lg-' + this.lg);

    if (this.xl == 'auto') CLASSES.push('xl-' + this.xs);
    else if (this.xl >= 0) CLASSES.push('xl-' + this.xl);

    if (this.xxl == 'auto') CLASSES.push('xxl-' + this.xs);
    else if (this.xxl >= 0) CLASSES.push('xxl-' + this.xxl);

    //#endregion

    //#region TextAlign

    if (this.text_xs != undefined) CLASSES.push('text-xs-' +  this.text_xs);
    if (this.text_sm != undefined) CLASSES.push('text-sm-' +  this.text_sm);
    if (this.text_md != undefined) CLASSES.push('text-md-' +  this.text_md);
    if (this.text_lg != undefined) CLASSES.push('text-lg-' +  this.text_lg);
    if (this.text_xl != undefined) CLASSES.push('text-xl-' +  this.text_xl);
    if (this.text_xxl != undefined) CLASSES.push('text-xxl-' +  this.text_xxl);

    //#endregion
    
    //#region SelfAlign

    if (this.align_self_xs != undefined) CLASSES.push('align-self-xs-' +  this.align_self_xs);
    if (this.align_self_sm != undefined) CLASSES.push('align-self-sm-' +  this.align_self_sm);
    if (this.align_self_md != undefined) CLASSES.push('align-self-md-' +  this.align_self_md);
    if (this.align_self_lg != undefined) CLASSES.push('align-self-lg-' +  this.align_self_lg);
    if (this.align_self_xl != undefined) CLASSES.push('align-self-xl-' +  this.align_self_xl);
    if (this.align_self_xxl != undefined) CLASSES.push('align-self-xxl-' +  this.align_self_xxl);

    //#endregion

    this.classAttribute = CLASSES.join(' ');
  }
}
