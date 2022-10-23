// import { HttpClient } from '@angular/common/http';
// import { Component, Input, OnInit } from '@angular/core';
// import { map, tap } from 'rxjs/operators';
// import { PinRequestService } from 'src/app/shared/pin-request.service';
// import { from, Observable } from 'rxjs';
// import { NotificationService } from 'src/app/shared/notification.service';

// @Component({
//   selector: 'app-pin-request',
//   templateUrl: './pin-request.component.html',
//   styleUrls: ['./pin-request.component.css']
// })
// export class PinRequestComponent implements OnInit {
//   constructor(public pinRequestService: PinRequestService, public notificationService: NotificationService) { }

//   ngOnInit() {

//   }

//   submitted = false;
//   selected = null;

//   onClear() {
//     this.pinRequestService.form.reset();
//     this.pinRequestService.initializeFormGroup();
//   }
  
//   onSubmit() {
//     if (this.pinRequestService.form.valid) {

//       // For MySQL
//       this.pinRequestService.create(this.pinRequestService.form.value).subscribe(
//         response => {
//           console.log(response);
//           this.submitted = true;
//         },
//         error => {
//           console.log(error);
//         });

//       this.pinRequestService.form.reset();
//       this.notificationService.success(':: Submitted successfully');
//     }
//   }

// }

// interface departments {
//   id: number,
//   name: string
// }

import { PinRequestService } from '../../shared/pin-request.service';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { from, Observable } from 'rxjs';
import { NotificationService } from '../../shared/notification.service'
import { MatDialogRef } from '@angular/material/dialog';
import { PinRequest } from '../../shared/PinRequest';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-pin-request',
  templateUrl: './pin-request.component.html',
  styleUrls: ['./pin-request.component.css']
})
export class PinRequestComponent implements OnInit {
  constructor(public pinRequestService: PinRequestService, 
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<PinRequestComponent>,
    private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit() {
    this.refresh();
  }
  // datasource refresh to show the changes made
  refresh() {
    this.pinRequestService.getAll().subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource(data);
        // trigger a change detection
        this.changeDetectorRefs.detectChanges();
    });
  }

  submitted = false;
  selected = null;
  dataSource = new MatTableDataSource<PinRequest>();

  onClear() {
    this.pinRequestService.form.reset();
    //this.pinRequestService.initializeFormGroup(); // Erroring out
  }

  onClose() {
    this.pinRequestService.form.reset();
    //this.pinRequestService.initializeFormGroup(); // Erroring out
    this.dialogRef.close();
  }

  // checkboxChange(checkboxValue: string) {
  //   this.pinRequestService.form.setValue(checkboxValue ? 'Y' : 'N', this.setValueOptions);
  // }
  // setValueOptions(arg0: string, setValueOptions: string) {
  //   throw new Error('Method not implemented.');
  // }

  onSubmit() {
    if (this.pinRequestService.form.valid) {

      // For MySQL
      this.pinRequestService.create(this.pinRequestService.form.value).subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });

      this.pinRequestService.form.reset();
      this.notificationService.success(':: Submitted successfully');
      this.onClose();
    }
  }

}
