import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { ProfileComponent } from './profile/profile.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { BackendPaginationComponent } from './backend-pagination/backend-pagination.component';


const routes: Routes = [
  { path: 'dashboard', component: ContentComponent },
  { path: 'form', component: FormComponent },
  { path: 'table', component: TableComponent},
  { path: 'profile/:id', component: ProfileComponent},
  { path: 'edit-user', component: EditUserComponent },
  { path:'backend-pagination', component: BackendPaginationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
