import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CandidatosComponent } from './candidatos/candidatos.component';
import {HttpClientModule} from '@angular/common/http';
import { CandidatosService } from './candidatos.service';

@NgModule({
  declarations: [
    AppComponent,
    CandidatosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [CandidatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
