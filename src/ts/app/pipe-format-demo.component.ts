import { Component } from "@angular/core";

@Component({
    selector: "main",
    template: `
    <table>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let person of people | slice:startPerson:endPerson">
                <td>{{person.fn}}</td>
                <td>{{person.ln}}</td>
            </tr>
        </tbody>
    </table>

    <button #prevButton type="button" (click)="prevPage()">Prev</button>
    <button type="button" (click)="nextPage()">Next</button>

    <!--    
    <div> {{prevButton.parentNode.innerHTML | json}} </div>
    -->
    
    <!--
    <br><br>
    <br><span> pages: {{pages}}  </span>
    <br><span> currentPage: {{currentPage}}  </span>
    <br><span> startPerson: {{startPerson}}  </span>
    <br><span> endPerson: {{endPerson}}  </span>
    -->
    `,
})
export class PipeFormatDemoComponent {

    public currentPage: number = 0;
    public pageLength: number = 3;



    public get startPerson(): number {
        return this.currentPage * this.pageLength;
    }
    
    public get endPerson(): number {
        return (this.currentPage + 1) * this.pageLength;
    }


    public people: any[] = [
        { fn: "John", ln: "Smith"},
        { fn: "James", ln: "Smith"},
        { fn: "John", ln: "Tomas"},
        { fn: "Janes", ln: "Tomas"},
        { fn: "Jane", ln: "Doe"},
        { fn: "Tin", ln: "Jhonson"},
        { fn: "Abby", ln: "Peters"},
        { fn: "Bob", ln: "Simons"},
    ]

    public pages: number = Math.floor(this.people.length / this.pageLength);

    public prevPage(): void {
        if (this.currentPage>0) {
            this.currentPage--;
        }
    }

    public nextPage(): void {

        let pages: number = this.pages;
        if (this.people.length % this.pageLength >0) {
            pages++;            
        }

        if (this.currentPage < pages ) {
            if (this.endPerson < this.people.length) {
                this.currentPage++;
            }
            
        }
    }

}
