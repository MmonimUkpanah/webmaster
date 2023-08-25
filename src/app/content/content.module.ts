import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from './search-pipe.pipe';
import { BackendPaginationComponent } from './backend-pagination/backend-pagination.component';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    ContentComponent,
    FormComponent,
    TableComponent,
    ProfileComponent,
    EditUserComponent,
    SearchPipe,
    BackendPaginationComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,MatFormFieldModule, MatSelectModule, NgFor, MatInputModule, FormsModule
  ]
})
export class ContentModule { }
