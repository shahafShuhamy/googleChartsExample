import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReportComponent } from './components/report/report.component';
import { GoogleChartsModule } from 'angular-google-charts';

import { FormsModule } from '@angular/forms';
// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { Router, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    component: ReportComponent,
  },
];
// const config: SocketIoConfig = { url: environment.SOCKET_ENDPOINT, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    // SocketIoModule.forRoot(config), // Fires off the connection to the socket server as soon as AppModule loads
    GoogleChartsModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
