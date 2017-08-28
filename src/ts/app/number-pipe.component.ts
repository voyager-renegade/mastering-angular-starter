import { Component } from "@angular/core";

@Component({
    selector: "main",
    template: `<div>
      <p>e (no formatting): {{e}}</p>
      <p>e (3.1-5): {{e | number:'3.1-5'}}</p>
      <p>pi (no formatting): {{pi}}</p>
      <p>pi (3.5-5): {{pi | number:'3.5-5'}}</p>
      <p>pi (1.5-5): {{pi | number:'1.5-5'}}</p>
      <p>pi (1.0-2): {{pi | number:'1.0-2'}}</p>
      <p>pi (1.2-2): {{pi | number:'1.2-2'}}</p>
      <p>pi (1.2-4): {{pi | number:'1.2-4'}}</p>
    </div>`,
  })

  export class NumberPipeComponent  {
    pi: number = 3.141592;
    e: number = 2.718281828459045;
  }