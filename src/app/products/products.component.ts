import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { add } from 'src/actions/product.actions';
import { ProductEntity } from '../../entities/ProductEntity';
import { CartModel } from '../../entities/CartModel';
import { ProductCart } from 'src/entities/ProductCart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public product: ProductEntity = new ProductEntity();
  public viewMode: boolean = true;
  public createMode: boolean = false;
  public updateMode: boolean = false;

  constructor(private store: Store<{ product: CartModel }>) {}

  ngOnInit(): void { }

  enableViewMode() {
    if(this.viewMode === false) {
      this.viewMode = true;
      this.createMode = false;
      this.updateMode = false;
    }
  }

  enableCreateMode() {
    if(this.createMode === false) {
      this.createMode = true;
      this.viewMode = false;
      this.updateMode = false;
    }
  }

  enableUpdateMode() {
    if(this.updateMode === false) {
      this.updateMode = true;
      this.viewMode = false;
      this.createMode = false;
    }
  }

  addToList(product: ProductCart): void {
    product.quantity = 1;
    this.store.dispatch(add(product));
  }
}
