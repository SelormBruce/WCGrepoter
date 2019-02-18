import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Model/home/home.component';
import { ReportComponent } from './Model/report/report.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'report',component:ReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
