import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RibbonBarComponent } from './ribbon-bar/ribbon-bar.component';
import { TreeviewComponent } from './treeview/treeview.component';

@NgModule({
  declarations: [
    AppComponent,
    RibbonBarComponent,
    TreeviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
