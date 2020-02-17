import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {EditableModule} from './editable/editable.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, RouterModule, HttpClientModule, EditableModule ],
  exports: [ CommonModule, FormsModule, ReactiveFormsModule, RouterModule, HttpClientModule, EditableModule ],
})
export class SharedModule {

}
