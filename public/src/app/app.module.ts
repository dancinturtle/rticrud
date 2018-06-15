import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
