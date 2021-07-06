import { FormsLibrary, form } from 'forms42';
import { NgModule } from '@angular/core';
import { ApplicationRoot } from './ApplicationRoot';
import { BlockDefinitions } from './BlockDefinitions';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Formsdefinitions

import { KundeService } from './forms/KundeService';


@NgModule({
  declarations: [
    ApplicationRoot,
    BlockDefinitions,
    KundeService
  ],
  imports: [
    FormsLibrary,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [ApplicationRoot]
})


@form(KundeService, "kundeservice", "/kundeservice")

export class ApplicationModule {}
