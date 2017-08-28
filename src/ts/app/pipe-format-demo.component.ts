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

    <button type="button" (click)="prevPage()">Prev</button>
    <button type="button" (click)="nextPage()">Next</button>
    <span> startPerson: {{startPerson}}  </span>
    <span> endPerson: {{endPerson}}  </span>
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

    public prevPage(): void {
        if (this.currentPage>0) {
            this.currentPage--;
        }
    }

    public nextPage(): void {

        let pages: number = this.people.length / this.pageLength;
        if (this.people.length % this.pageLength >0) {
            pages++;            
        }

        if (this.currentPage < pages ) {
            this.currentPage++;
        }
    }

}
