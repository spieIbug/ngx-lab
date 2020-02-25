import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditableModule } from './editable/editable.module';
import { HttpClientModule } from '@angular/common/http';
import { SecurityModule } from './security/security.module';

@NgModule({
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, RouterModule, HttpClientModule, EditableModule, SecurityModule ],
  exports: [ CommonModule, FormsModule, ReactiveFormsModule, RouterModule, HttpClientModule, EditableModule, SecurityModule ],
})
export class SharedModule {

}
