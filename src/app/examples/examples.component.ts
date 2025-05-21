import { Component } from '@angular/core';
import {ObservableOperatorComponent} from './observable-operator/observable-operator.component';
import {SignalExampleComponent} from './signal-example/signal-example.component';

@Component({
  selector: 'app-examples',
  imports: [
    ObservableOperatorComponent,
    SignalExampleComponent
  ],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.css'
})
export class ExamplesComponent {

}
