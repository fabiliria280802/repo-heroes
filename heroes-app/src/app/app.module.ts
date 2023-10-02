//Components
import { AppComponent } from './app.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListComponent } from './heroes/list/list.component';

//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from './counter/counter.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    CounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
