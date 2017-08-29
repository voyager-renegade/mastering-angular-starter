import { Component } from "@angular/core";

@Component({
    selector: "main",
    template: `
    <div>
        <span>{{message | uppercase}}</span><br>
        <span>{{message | lowercase}}</span><br>
        <span>{{message2 | capitalize}}</span><br>
        <br>

        <input type="text" [(ngModel)]="message">
        <input type="text" [(ngModel)]="message2">
    </div>
    `,
})
export class AppComponent {

    public message: string = "Hello";
    public message2: string = "World!";

}

