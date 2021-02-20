import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { CreateRecordComponent } from './create-record/create-record.component'
import { app_routing } from './app.routes';
import { AllRecordsComponent } from './all-records/all-records.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateRecordComponent,
    AllRecordsComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: environment.API_GOOGLE_MAPS
    }),
    HttpClientModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
