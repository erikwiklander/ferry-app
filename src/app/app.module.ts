import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatToolbarModule, MatSelectModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FerryCountdownComponent } from './ferry-countdown/ferry-countdown.component';
import { TimetableService } from './timetable.service';
import { CountdownPipe } from './countdown.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FerryCountdownComponent,
    CountdownPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [TimetableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
