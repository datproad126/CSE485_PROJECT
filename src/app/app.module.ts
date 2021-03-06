import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IntroduceComponent } from './introduce/introduce.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    HomepageComponent,
    IntroduceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
