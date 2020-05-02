import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

import { ProductComponent} from './product/components/product/product.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { ProductsComponent } from './product/components/products/products.component';
import { ContactComponent } from './contact/components/contact.component';
import { DemoComponent } from './demo/components/demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product/components/product-detail/product-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    ProductsComponent,
    ContactComponent,
    DemoComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
