import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    ContentComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule
  ]
})
export class ContentModule { }
