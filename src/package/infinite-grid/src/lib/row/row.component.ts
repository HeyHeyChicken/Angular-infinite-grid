import { Component, Input } from '@angular/core';

@Component({
  selector: 'row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
})
export class RowComponent {
  //#region Attributes

  @Input() public size: number = 12;

  //#endregion
}
