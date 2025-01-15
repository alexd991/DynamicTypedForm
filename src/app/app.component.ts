import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormOneComponent} from '../forms/components/form-one/form-one.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormOneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'dynamic-typed-form';
}
