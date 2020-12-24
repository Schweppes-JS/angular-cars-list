import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { appService } from './services';
import { appDirecives } from './directives/index';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ...appDirecives,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ...appService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
