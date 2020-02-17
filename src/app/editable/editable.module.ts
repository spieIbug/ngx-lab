import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditableComponent } from './editable.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [ EditableComponent ],
  exports: [ EditableComponent, FormsModule, CommonModule ],
})
export class EditableModule {
}
