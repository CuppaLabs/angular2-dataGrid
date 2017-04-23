import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BasicExample } from './Examples/basic-example';
import { ColumnTemplateExample } from './Examples/column-template-example';
import { HeadingTemplateExample } from './Examples/heading-template';
import { SortingExample } from './Examples/sorting-example';
import { CuppaDataGridModule } from './angular2-dataGrid/angular2-dataGrid';
import { AppRouterModule } from './app.router';
@NgModule({
  declarations: [
    AppComponent,
    BasicExample,
    ColumnTemplateExample,
    HeadingTemplateExample,
    SortingExample
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CuppaDataGridModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
