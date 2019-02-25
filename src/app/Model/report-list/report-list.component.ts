import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { ReportsService } from 'src/app/Sevice/reports.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {
  listData: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['Firstname', 'Lastname', 'Region', 'District', 'Location',
    'State', 'Date', 'Time', 'Phone', 'Subject', 'Message', 'Image', 'Status'];
  constructor(public _reportService: ReportsService) { }
  ngOnInit() {
    this._reportService.getReports().subscribe(
      list => {
        const array = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        }
        );
        this.listData = new MatTableDataSource(array);
        this.listData.paginator = this.paginator;

      });
    this.listData.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.listData.filter = filterValue.trim().toLowerCase();

    if (this.listData.paginator) {
      this.listData.paginator.firstPage();
    }
  }

}
