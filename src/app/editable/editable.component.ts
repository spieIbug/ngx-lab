import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-editable',
  templateUrl: './editable.component.html',
  styleUrls: [ './editable.component.scss' ]
})
export class EditableComponent {

  private _value: string;

  readonly = true;

  innerValue: string;

  get value(): string {
    return this._value;
  }

  @Input()
  set value(value: string) {
    this._value = value;
    this.innerValue = value;
  }

  @Output()
  valueChange = new EventEmitter<string>();

  @HostListener('dblclick')
  switchEditMode() {
    this.readonly = false;
  }

  @HostListener('keydown.escape')
  switchReadonlyMode() {
    this.readonly = true;
  }

  submit() {
    this.valueChange.emit(this.innerValue);
    this.readonly = true;
  }

}
