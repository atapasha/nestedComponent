import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ElementsModule } from "./elements/elements.module";
import { CollectionsModule } from './collections/collections.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ElementsModule,

    CollectionsModule

  ]
})
export class AppModule { }
