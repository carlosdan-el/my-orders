import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { add } from 'src/actions/product.actions';
import { CartModel } from 'src/entities/CartModel';
import { ProductCart } from 'src/entities/ProductCart';
import { ProductReport } from 'src/entities/ProductReport';

@Component({
  selector: 'app-product-form-view',
  templateUrl: './product-form-view.component.html',
  styleUrls: ['./product-form-view.component.css']
})
export class ProductFormViewComponent implements OnInit {

  @Output() setCreateMode = new EventEmitter<boolean>();
  @Output() setUpdateMode = new EventEmitter<boolean>();
  public products: ProductReport[] = [];

  constructor(private route: ActivatedRoute, private store: Store<{ product: CartModel }>) { }

  ngOnInit(): void {
    const id = this.route.snapshot.queryParams.id;

    if(id) {
      this.enableUpdateMode();
    } else {
      fetch('https://localhost:5001/api/Products?view=Report')
      .then(response => response.json())
      .then(data => {this.products = data;});
    }
  }

  enableCreateMode(): void {
      this.setCreateMode.emit(true);
  }

  enableUpdateMode(): void {
    this.setUpdateMode.emit(true);
  }

  addToList(product: ProductReport): void {
    let obj = new ProductCart();
    obj.id = product.id;
    obj.name = product.name;
    obj.quantity = 1;
    this.store.dispatch(add(obj));
  }

}
