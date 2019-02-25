import { Component, OnInit } from '@angular/core';
import { AdminauthService } from 'src/app/Service/adminauth.service';
import { NgForm } from '@angular/forms';
import { IReport } from 'src/app/ireport';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  authmembers: IReport;
  state:any;
  constructor(public adminauth: AdminauthService, 
    public router: Router, 
    public tostrs: ToastrService,
    public AfAuth:AngularFireAuth)
     { this.state =AfAuth.authState.subscribe( user => user )
    
    
    }

  ngOnInit() {
  
    
  }

  AdminLogin(form: NgForm) {
 if(!this.state){
  this.adminauth.login(form.value.email, form.value.password);
  this.tostrs.success('','You are Logged in');
  this.router.navigate(['/report-list']);
 }
 else{
  this.tostrs.error('','Invalid Administrative Credentials');
  this.router.navigate(['/Admin']);
  form.reset();
 }
      
  
  


  }

}
