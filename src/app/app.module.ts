import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { DeviceComponent } from './device/device.component';

import { DeviceServices } from './services/device.services';
import { AuthComponent } from './auth/auth.component';
import { DeviceViewComponent } from './device-view/device-view.component';
import { RouterModule, Routes} from '@angular/router';
import {AuthService} from './services/auth.service';

const appRoutes: Routes = [
  { path: 'devices', component: DeviceViewComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: DeviceViewComponent }
  ];
@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    DeviceComponent,
    AuthComponent,
    DeviceViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DeviceServices,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
