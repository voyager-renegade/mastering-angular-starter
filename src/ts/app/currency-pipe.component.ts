import { Component } from "@angular/core";

@Component({
    selector: 'main',
    template: `<div>
      <p>A: {{a | currency:'USD':false}}</p>
      <p>B: {{b | currency:'USD':true:'4.2-2'}}</p>
      <p>C: {{c | currency:'CAD':true}}</p>
    </div>`
  })
  export class CurrencyPipeComponent {
    a: number = 0.259;
    b: number = 1.3495;
    c: number = 25.34;
  }
  