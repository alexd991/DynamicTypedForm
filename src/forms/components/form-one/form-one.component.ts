import { Component } from '@angular/core';
import {TypedFormBuilder} from '../../typed-form-builder';

@Component({
  selector: 'app-form-one',
  imports: [],
  templateUrl: './form-one.component.html',
  styleUrl: './form-one.component.less'
})
export class FormOneComponent {
  public readonly formOne = new TypedFormBuilder()
    .withName('henry')
    .withEmail('')
    .withControl('a', 'b')
    .build();

  public onSubmit() {
    console.log(this.formOne.valid);
    console.log(this.formOne.value);
  }
}
