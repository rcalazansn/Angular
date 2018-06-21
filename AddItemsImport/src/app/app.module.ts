import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//Rotas
import { Routing } from './app.routing';

//Root
import { AppComponent } from './app.component';

//Service
import { DataService } from './Services/data.service';

//Shared
import { HeadbarComponent } from './components/shared/headbar/headbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';

//Components
import { AddSkuComponent } from './components/add-sku/add-sku.component';

//Pages
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadbarComponent,
    FooterComponent,
    HomePageComponent,
    LoginPageComponent,
    AddSkuComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Routing,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
