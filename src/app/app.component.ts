import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ExamplesComponent} from './examples/examples.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExamplesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BachelorCodeExamples';
}
