import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDataCompComponent } from './show-data-comp/show-data-comp.component';
import { AddCourseCompComponent } from './add-course-comp/add-course-comp.component';
import { EditCourseCompComponent } from './edit-course-comp/edit-course-comp.component';

const routes: Routes = [

  {
    path:'courselist',component:ShowDataCompComponent
  },
  {
    path:'addcourse',component:AddCourseCompComponent
  },
  {
    path:'editcourse/:id',component:EditCourseCompComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
