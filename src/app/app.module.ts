import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table'


import { AppComponent } from './app.component';
import { TableDisplayComponent } from './table-display/table-display.component';


@NgModule({
  declarations: [
    AppComponent,
    TableDisplayComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
