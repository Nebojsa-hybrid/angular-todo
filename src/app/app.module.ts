import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListComponent } from './home-page/list/list.component';
import { SingleItemComponent } from './home-page/single-item/single-item.component';
import { NewItemComponent } from './home-page/new-item/new-item.component';
import { ScrollComponent } from './shared/scroll/scroll.component';
import { CardComponent } from './shared/card/card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListComponent,
    SingleItemComponent,
    NewItemComponent,
    ScrollComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
