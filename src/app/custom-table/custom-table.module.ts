import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTableComponent } from './custom-table.component';
import { CustomTableContentDirective } from './directives/custom-table-content.directive';

@NgModule({
  declarations: [
    CustomTableComponent,
    CustomTableContentDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomTableComponent,
    CustomTableContentDirective
  ]
})
export class CustomTableModule { }
