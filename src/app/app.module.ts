import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SDKBrowserModule } from './shared/sdk/index';
import { FormsModule } from '@angular/forms';
import { ProductModule } from './product/product.module';
import { AppRoutingModule } from './app.routing';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ProductModule,
    SDKBrowserModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
