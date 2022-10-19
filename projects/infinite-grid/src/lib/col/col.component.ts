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

    this.classAttribute = CLASSES.join(' ');
  }
}
