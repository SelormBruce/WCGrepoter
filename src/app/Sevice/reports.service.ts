import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import * as firebase from 'firebase';
import { IReport } from '../ireport';
import { FormGroup, FormControl } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  constructor(private db: AngularFireDatabase) {
    this.postKey = firebase.database().ref().child('post').push().key;
  }
  ReportList: AngularFireList<any>;
  postKey: string;
  _Ireport: IReport;
  form = new FormGroup({

    Firstname: new FormControl(''),
    Lastname: new FormControl(''),
    Region: new FormControl(''),
    District: new FormControl(''),
    Location: new FormControl(''),
    State: new FormControl(''),
    Date: new FormControl(''),
    Time: new FormControl(''),
    Phone: new FormControl(''),
    Subject: new FormControl(''),
    Message: new FormControl(''),
    Image: new FormControl(''),
    Status: new FormControl('Recieved')
  });

  getReports() {
    this.ReportList = this.db.list('Reports');
    return this.ReportList.snapshotChanges();
  }
  SubmitReport(Report) {
    firebase.database().ref('Reports' + this.postKey).set(

      {
        Firstname: Report.Firstname,
        Lastname: Report.Lastname,
        Region: Report.Region,
        District: Report.District,
        Location: Report.Location,
        State: Report.State,
        Date: Report.Date,
        Time: Report.Time,
        Phone: Report.Phone,
        Subject: Report.Subject,
        Message: Report.Message,
        Image: Report.Image,
        Status: Report.Status
      }
    );
  }


}
