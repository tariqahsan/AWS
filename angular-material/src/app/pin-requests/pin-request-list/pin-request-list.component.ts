import { AfterViewInit, OnInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { PinRequestComponent } from '../pin-request/pin-request.component';
import { PinRequest } from '../../shared/PinRequest';
import { PinRequestService } from '../../shared/pin-request.service';
import { DialogService } from '../../shared/dialog.service';
import { NotificationService } from '../../shared/notification.service';

@Component({
  selector: 'app-pin-request-list',
  templateUrl: './pin-request-list.component.html',
  styleUrls: ['./pin-request-list.component.css']
})
export class PinRequestListComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'parentOrgName', 'parentCageCode', 'divisionName', 'divisionCageCode', 'replacement', 'lastName', 'firstName', 'phone', 'email','actions'];
  dataSource = new MatTableDataSource<PinRequest>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(MatTable) table!: MatTable<any>;
  
  constructor(private pinRequestService: PinRequestService, 
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private dialogService: DialogService,
    private changeDetectorRefs: ChangeDetectorRef) {

    // datasource refresh
    this.refresh();

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

 
    // datasource refresh to show the changes made
    refresh() {
      this.pinRequestService.getAll().subscribe(
        (data) => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          // trigger a change detection
          this.changeDetectorRefs.detectChanges();
      });
    }
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
    
    onCreate() {
      //this.pinRequestService.initializeFormGroup();
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '70%';
      //this.dialog.open(PinRequestComponent, dialogConfig);
      // datasource refresh
      this.dialog.open(PinRequestComponent, dialogConfig).afterClosed().subscribe(result => {
        this.refresh();
      });
    }
    onEdit(row: any) {
      this.pinRequestService.populateForm(row);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '70%';
      // datasource refresh
      this.dialog.open(PinRequestComponent, dialogConfig).afterClosed().subscribe(result => {
        this.refresh();
      });
  
    }
  
    onDelete(id: number){ // We are not using delete operations in any of the DTIC apps?
      this.dialogService.openConfirmDialog('Are you sure you want to delete this record?' )
      .afterClosed().subscribe(res =>{
        if(res){
          console.log("response is " + res)
          this.pinRequestService.delete(id).subscribe( data => {
                console.log("pin request data has been deleted successfully!");
                // datasource refresh
                this.refresh();
              }, (err) => {
                console.log("unable to delete the pin request");
              })
          this.notificationService.warn('! Deleted successfully');
        }
      });
    }

}
