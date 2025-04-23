import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { RibbonBarComponent } from './ribbon-bar/ribbon-bar.component';
import { TreeviewComponent } from './treeview/treeview.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    RibbonBarComponent,
    TreeviewComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    AgGridModule
  ],
  exports: [
    RibbonBarComponent,
    TreeviewComponent,
    GridComponent
  ]
})
export class FeaturesModule { }
