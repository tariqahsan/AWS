import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PinRequestService } from './shared/pin-request.service';
import { environment } from '../environments/environment';
import { PinRequestsComponent } from './pin-requests/pin-requests.component';
import { PinRequestComponent } from './pin-requests/pin-request/pin-request.component';
import { PinRequestListComponent } from './pin-requests/pin-request-list/pin-request-list.component';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PinRequestsComponent,
    PinRequestComponent,
    PinRequestListComponent,
    MatConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PinRequestService],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }

