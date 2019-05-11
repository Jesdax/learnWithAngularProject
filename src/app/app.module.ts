import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { DeviceComponent } from './device/device.component';

import { DeviceServices } from './services/device.services';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    DeviceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DeviceServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
