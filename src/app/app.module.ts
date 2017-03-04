import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CuppaDataGridModule } from './angular2-dataGrid/angular2-dataGrid';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CuppaDataGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
