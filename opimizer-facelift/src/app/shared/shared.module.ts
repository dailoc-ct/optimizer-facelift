import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
// Import thêm các Angular Material module tại đây nếu dùng chung

@NgModule({
  declarations: [
    // Shared pipes / directives nếu có
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    CommonModule,
    MatButtonModule
    // Export thêm nếu có pipes/directives/component chung
  ]
})
export class SharedModule { }
