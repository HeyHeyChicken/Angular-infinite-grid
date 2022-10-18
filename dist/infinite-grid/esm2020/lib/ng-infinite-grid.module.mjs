import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { RowComponent } from './row/row.component';
import { ColComponent } from './col/col.component';
import * as i0 from "@angular/core";
export class NgInfiniteGridModule {
}
NgInfiniteGridModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: NgInfiniteGridModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgInfiniteGridModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.6", ngImport: i0, type: NgInfiniteGridModule, declarations: [ContainerComponent, RowComponent, ColComponent], imports: [CommonModule, FormsModule], exports: [ContainerComponent, RowComponent, ColComponent] });
NgInfiniteGridModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: NgInfiniteGridModule, imports: [CommonModule, FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: NgInfiniteGridModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, FormsModule],
                    declarations: [ContainerComponent, RowComponent, ColComponent],
                    exports: [ContainerComponent, RowComponent, ColComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctaW5maW5pdGUtZ3JpZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9pbmZpbml0ZS1ncmlkL3NyYy9saWIvbmctaW5maW5pdGUtZ3JpZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBUW5ELE1BQU0sT0FBTyxvQkFBb0I7O2lIQUFwQixvQkFBb0I7a0hBQXBCLG9CQUFvQixpQkFKaEIsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLFlBQVksYUFEbkQsWUFBWSxFQUFFLFdBQVcsYUFFekIsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLFlBQVk7a0hBRzdDLG9CQUFvQixZQUxyQixZQUFZLEVBQUUsV0FBVzsyRkFLeEIsb0JBQW9CO2tCQU5oQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUM7b0JBQ3BDLFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLFlBQVksRUFBRSxZQUFZLENBQUM7b0JBQzlELE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFFLFlBQVksRUFBRSxZQUFZLENBQUM7aUJBQzFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb250YWluZXIvY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3dDb21wb25lbnQgfSBmcm9tICcuL3Jvdy9yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IENvbENvbXBvbmVudCB9IGZyb20gJy4vY29sL2NvbC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0NvbnRhaW5lckNvbXBvbmVudCwgUm93Q29tcG9uZW50LCBDb2xDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQ29udGFpbmVyQ29tcG9uZW50LCBSb3dDb21wb25lbnQsIENvbENvbXBvbmVudF0sXG59KVxuXG5leHBvcnQgY2xhc3MgTmdJbmZpbml0ZUdyaWRNb2R1bGUgeyB9XG4iXX0=