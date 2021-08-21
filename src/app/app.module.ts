import { PagesModule } from './pages/pages.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from './auth/auth.module';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { NopagesfoundComponent } from './pages/nopagesfound/nopagesfound.component';




@NgModule({
  declarations: [
    AppComponent,
    NopagesfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    ComponentsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
