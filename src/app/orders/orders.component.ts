import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { add, remove, update } from 'src/actions/product.actions';
import { CartModel } from 'src/entities/CartModel';
import { ProductCart } from 'src/entities/ProductCart';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public editMode: boolean = false;
  public products: any;
  public orderId: string = '';

  constructor(private route: ActivatedRoute, private store: Store<{ product: CartModel }>) {}

  public ngOnInit(): void {
    const id = this.route.snapshot.queryParams.id;

     if(id !== null && id !== undefined) {
      this.orderId = id;
      this.products = this.getProductsFromOrder(id);
      this.editMode = true;
     } else {
       this.editMode = false;
       this.store.select('product').subscribe(data => {
        this.products = data.products;
       });
     }
  }

  public onSubmit(): void {
    
  }

  public updateItemQuantity(product: ProductCart, event: any):void {
    let obj = Object.assign([], product);
    obj.quantity = parseInt(event.target.value);
    this.store.dispatch(update(obj));
  }

  public removeItemFromList(id: string):void {
    this.store.dispatch(remove({id}));
    if(this.products.length == 0) {
      this.editMode = false;
    }
  }
 
  public getProductsFromOrder(id: string): any[] {
    let products: any[] = [{
      id: 'qa2sd8d5f5d8s5a',
      orderId: '5',
      name: 'Produto 5',
      category: 'Eletrônico',
      subcategory: 'Home Theather',
      type: 'Soundbar',
      model: '2.0',
      quantity: 2
    },
    {
      id: 'qa2sd8d5f5d8s5a',
      orderId: '1',
      name: 'Produto 1',
      category: 'Eletrônico',
      subcategory: 'Home Theather',
      type: 'Soundbar',
      model: '2.0',
      quantity: 2
    },
    {
      id: 'qa2sd8d5f5d8s5a',
      orderId: '5',
      name: 'Produto 3',
      category: 'Eletrônico',
      subcategory: 'Home Theather',
      type: 'Soundbar',
      model: '2.0',
      quantity: 6
    }];

    let response = products.filter(item => {return item.orderId === id});
    return response;
  }

}
