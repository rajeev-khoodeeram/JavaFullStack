import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentListComponent } from './components/student-list/student-list.component';


export const routes: Routes = [
  { path: 'students', component: StudentListComponent }, // <--- Look for this!
  { path: '', redirectTo: '/students', pathMatch: 'full' }, // Optional: redirect root to students
  // ... other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
