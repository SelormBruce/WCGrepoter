import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Model/home/home.component';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { ReportComponent } from './Model/report/report.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportsService } from './Sevice/reports.service';
import {ToastrModule} from 'ngx-toastr';
import { CloudinaryModule, CloudinaryConfiguration } from '@cloudinary/angular-5.x';
import { Cloudinary } from 'cloudinary-core';
import { ReportListComponent } from './Model/report-list/report-list.component';
import { AdminComponent } from './Model/admin/admin.component';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { AdminauthService } from './Service/adminauth.service';
import { VotesComponent } from './Test-Practice/votes/votes.component';
import { TodoComponent } from './Test-Practice/todo/todo.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReportComponent,
    ReportListComponent,
    AdminComponent,
    VotesComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.config),
    FormsModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    AngularFileUploaderModule,
    CloudinaryModule.forRoot({Cloudinary}, { cloud_name: 'selorm' } as CloudinaryConfiguration),
  ],
  providers: [ReportsService, AdminauthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
