import { Component } from '@angular/core';
import {ObservableOperatorComponent} from './observable-operator/observable-operator.component';

@Component({
  selector: 'app-examples',
  imports: [
    ObservableOperatorComponent
  ],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.css'
})
export class ExamplesComponent {

}
