import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  declarations: [
    AppComponent,ProductListComponent,ConvertToSpacesPipe,StarComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  bootstrap: [AppComponent,ProductListComponent]
})
export class AppModule { }
