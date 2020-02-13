import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {EditableModule} from './editable/editable.module';

@NgModule({
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, RouterModule, EditableModule ],
  exports: [ CommonModule, FormsModule, ReactiveFormsModule, RouterModule, EditableModule ],
})
export class SharedModule {

}
