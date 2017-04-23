import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicExample } from './Examples/basic-example';
import { ColumnTemplateExample } from './Examples/column-template-example';
import { HeadingTemplateExample } from './Examples/heading-template';
import { SortingExample } from './Examples/sorting-example';

const appRoutes: Routes = [
    { path: '', redirectTo: '/basicexample',pathMatch: 'full'},
    { path: 'basicexample', component: BasicExample},
    { path: 'columntemplate', component: ColumnTemplateExample},
    { path: 'sorting', component: SortingExample},
    { path: 'headingtemplate', component: HeadingTemplateExample}
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]

})
export class AppRouterModule { }
