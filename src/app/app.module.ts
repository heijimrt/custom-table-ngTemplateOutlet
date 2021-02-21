import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomTableModule } from './custom-table/custom-table.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
