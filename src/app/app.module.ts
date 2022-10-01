import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CookieService  } from 'ngx-cookie-service';
import { ServiceService } from './mastermodule/service/service.service';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule],
  providers: [Storage,ServiceService,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },CookieService],
  bootstrap: [AppComponent],
  exports:[],
})
export class AppModule {}
