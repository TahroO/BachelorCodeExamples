import {Component, computed, effect, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
@Component({
  selector: 'app-signal-example',
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './signal-example.component.html',
  styleUrl: './signal-example.component.css'
})
export class SignalExampleComponent {
  // input from html
  protected counterInputVariable = 0;
  // WRITABLE SIGNAL - uses the createSignal() constructor - is a producer
  protected initialCounter = signal<number>(0);
  protected valueHasChanged = signal<boolean>(false);
  // increase the counter in case of a button event using the signal API
  protected setCounter() {
    this.initialCounter.set(this.counterInputVariable);
    this.valueHasChanged.set(false);
  }
  // COMPUTED SIGNAL - executes in a reactive context if initialCounter changes - is a producer and consumer
  protected readonly computedCounter = computed(() => {
    return this.initialCounter() * 10;
  })
  // EFFECT SIGNAL - executes in a reactive context if computedCounter changes - is a consumer
  protected readonly signalChanged = effect(() => {
      this.valueHasChanged.set(true);
      console.log('The counter signal changed. The new value is: ' + this.computedCounter())
    }
  );
}
