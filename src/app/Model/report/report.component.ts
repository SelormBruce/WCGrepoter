import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ReportsService } from 'src/app/Sevice/reports.service';
import { IReport } from 'src/app/ireport';
import { Router } from '@angular/router';
class ImageSnippet {
  pending = false;
  status = 'init';

  constructor(public src: string, public file: File) { }
}
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  constructor(public _reportService: ReportsService, public toastrService: ToastrService, public router: Router) {
    this.CurrenDate = new Date().toISOString().split('T')[0];
    setInterval(() => {
      this.CurrentTime = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
    }, 1);
  }
  CurrenDate: any;
  CurrentTime: any;
  ReportMmbers: IReport;
  status = 'Recieved';
  selecetdFile: File;
  selectedFile: ImageSnippet;
  afuConfig = {
    uploadAPI: {
      url: 'gs://wgcrepoter.appspot.com/ReportUploads'
    }
  };

  ngOnInit() {
  }

  onlyNumber(evt) {
    evt = (evt) ? evt : window.event;
    const charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  onlyText(evt: any) {
    evt = (evt) ? evt : window.event;
    const charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 32 && (charCode < 48 || charCode > 57) &&
      (charCode > 90 && charCode < 157) || (charCode == 32)) {
      return true;

    }
    return false;
  }

  SubmitReport() {
    this._reportService.SubmitReport(this._reportService.form.value);
    this.toastrService.success('', 'Report Submited Suucessfully');
    this.router.navigate(['/']);
  }

}
