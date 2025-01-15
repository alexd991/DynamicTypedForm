import { Component } from '@angular/core';
import {FormOneComponent} from '../forms/components/form-one/form-one.component';

@Component({
  selector: 'app-root',
  imports: [FormOneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'dynamic-typed-form';
}
