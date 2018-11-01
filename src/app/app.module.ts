import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatToolbarModule, MatSelectModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FerryCountdownComponent } from './ferry-countdown/ferry-countdown.component';
import { TimetableService } from './timetable.service';
import { CountdownPipe } from './countdown.pipe';
import { DestinationPipe } from './destination.pipe';
import { DeptimePipe } from './deptime.pipe';

const appRoutes: Routes = [
  { path: '', component: FerryCountdownComponent},
  { path: 'luma', component: FerryCountdownComponent},
  { path: 'henriksdal', component: FerryCountdownComponent},
  { path: 'barnangen', component: FerryCountdownComponent},
  { path: '**', redirectTo: '' }
]

@NgModule({
  declarations: [
    AppComponent,
    FerryCountdownComponent,
    CountdownPipe,
    DestinationPipe,
    DeptimePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TimetableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
