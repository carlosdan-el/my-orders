import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IconsModule } from '../assets/icons/icons.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigatorComponent } from '../pages/components/navigator/navigator.component';
import { TableComponent } from './table/table.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { StoreModule } from '@ngrx/store';
import { productReducer } from '../reducers/product.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFormUpdateComponent } from './product-form-update/product-form-update.component';
import { ProductFormViewComponent } from './product-form-view/product-form-view.component';
import { ProductFormCreateComponent } from './product-form-create/product-form-create.component';
import { TableOrdersComponent } from '../pages/components/table-orders/table-orders.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigatorComponent,
    TableComponent,
    ProductsComponent,
    OrdersComponent,
    ProductFormUpdateComponent,
    ProductFormViewComponent,
    ProductFormCreateComponent,
    TableOrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ product: productReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
