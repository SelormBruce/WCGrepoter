import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Model/home/home.component';
import { ReportComponent } from './Model/report/report.component';
import { AdminComponent } from './Model/admin/admin.component';
import { ReportListComponent } from './Model/report-list/report-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'report', component: ReportComponent},
{path: 'Admin', component: AdminComponent},
{path: 'report-list', component: ReportListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
