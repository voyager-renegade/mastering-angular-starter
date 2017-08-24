import { Component } from "@angular/core";

@Component({
    selector: "main",
    template: `
    <h1>{{header}}</h1>
    <div>
        <ul>
            <li *ngFor="let color of colors">            
                {{color}}
            </li>
        </ul>
    </div>
    `,
})
export class AppComponent {

    public header: string = "Color Selector";

    public colors: string[] = [
        "red", "white", "green", "orange", "blue",
    ]

}
