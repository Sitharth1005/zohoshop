import { LoginComponent } from 'src/app/components/login/login.component';
import { FashionComponent } from './components/fashion/fashion.component';
import { JewellaryComponent } from './components/jewellary/jewellary.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { FilterPipe } from './shared/filter.pipe';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    ElectronicsComponent,
    JewellaryComponent,
    FashionComponent,
    FilterPipe,
    LoginComponent,
    SignupComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
