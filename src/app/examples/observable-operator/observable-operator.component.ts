import { Component } from '@angular/core';
import {filter, from, merge, Observable, take} from 'rxjs';

@Component({
  selector: 'app-observable-operator',
  imports: [],
  templateUrl: './observable-operator.component.html',
  styleUrl: './observable-operator.component.css'
})
// This class shows an example of some typical usages for observable operators
export class ObservableOperatorComponent {
  arrayOne: number[] = [10, 20, 30];
  arrayTwo: string[] = ['ten', 'twenty', 'thirty'];

  constructor() {}

  showOperators(dataStreamOne: Observable<number>, dataStreamTwo: Observable<string>) {
    // INPUT
    // creational Operator merge() combines 2 or more Observable streams into one
    const numbersAndStrings: Observable<number | string> = merge(dataStreamOne, dataStreamTwo)
      .pipe(
        // OPERATION
      // filter the combined stream, keep only values greater than 10 and strings with more than 3 characters
      filter(value => {
        if (typeof value === 'number') {
          return value > 10;
        }
        if (typeof value === 'string') {
          return value.length > 3;
        }
        return false;
      }),
      // take only the first 3 values out of the filtered stream
      take(3)
    );
    // OUTPUT
    numbersAndStrings.subscribe(value => console.log('filtered output value:', value));
  }
  onClick() {
    // convert initial arrays into observable data streams
    const observableOne = from(this.arrayOne);
    const observableTwo = from(this.arrayTwo);
    observableOne.subscribe(value => console.log('first observable values: ' +  value));
    observableTwo.subscribe(value => console.log('second observable values: ' +  value));
    this.showOperators(observableOne, observableTwo);
  }
}
