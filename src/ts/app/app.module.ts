import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
// import { NumberPipeComponent } from "./number-pipe.component";
// import { CurrencyPipeComponent } from "./currency-pipe.component"
// import { SlicePipeStringComponent } from "./slice-pipe-string.component";
// import { SlicePipeListComponent } from "./slice-pipe-list.component";
// import { PipeFormatDemoComponent } from "./pipe-format-demo.component";
import { CapitalizePipe } from "./pipes/capitalized.pipe";

import { FormsModule } from "@angular/forms";

import "../../scss/styles.scss";

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, CapitalizePipe ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }
