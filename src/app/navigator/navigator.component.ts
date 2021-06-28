import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartModel } from '../../entities/CartModel';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  public enableList: boolean = false;

  constructor(private store: Store<{ product: CartModel }>) {
    this.store.select('product').subscribe(data => {
      if(data.products.length > 0) {
        this.enableList = true;
      }
    });
  }

  ngOnInit(): void {
  }

}
