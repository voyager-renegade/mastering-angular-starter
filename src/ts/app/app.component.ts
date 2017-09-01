import { Component } from "@angular/core";
import { Colors } from "./services/colors";



@Component({
    selector: "main",
    template: `
    <ul>
        <li *ngFor="let color of colors">{{color}}</li>
    </ul>
    `,
    
})

export class AppComponent {

    public colors: string[] = [];

    constructor(private colorSvc: Colors) {
        this.colorSvc.addColor("yellow");
        this.colorSvc.addColor("blue");
        this.colorSvc.addColor("red");

        this.colors = this.colorSvc.getAll();

    }

}
