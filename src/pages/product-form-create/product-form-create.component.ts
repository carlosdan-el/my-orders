import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductEntity } from 'src/entities/ProductEntity';

@Component({
  selector: 'app-product-form-create',
  templateUrl: './product-form-create.component.html',
  styleUrls: ['./product-form-create.component.css']
})
export class ProductFormCreateComponent implements OnInit {

  @Output() setMode = new EventEmitter<boolean>();
  public product: ProductEntity = new ProductEntity();
  public categories: any;
  public subcategories: any;
  public types: any;
  public models: any;

  constructor() { }

  public ngOnInit(): void {
    fetch('https://localhost:5001/api/Categories')
    .then(response => response.json())
    .then(data => this.categories = data);
  }

  public setName(event: any): void {
    this.product.name = event.target.value;
  }

  public setCategory(event: any): void {
    this.product.categoryId = event.target.value;
    this.loadSubCategories(event.target.value);
  }

  public setSubCategory(event: any): void {
    this.product.subCategoryId = event.target.value;
    this.loadTypes(event.target.value);
  }

  public setType(event: any): void {
    this.product.typeId = event.target.value;
    this.loadModels(event.target.value);
  }

  public setModel(event: any): void {
    this.product.modelId = event.target.value;
  }

  public setPrice(event: any): void {
    this.product.price = parseFloat(event.target.value);
  }

  public enableViewMode() {
    this.setMode.emit(true);
  }

  public onSubmit(): void {
    let values = {
      name: this.product.name,
      categoryId: this.product.categoryId,
      subCategoryId: this.product.subCategoryId,
      typeId: this.product.typeId,
      modelId: this.product.modelId,
      price: this.product.price
    };

    fetch('https://localhost:5001/api/Products', {
      method: 'post',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      this.enableViewMode();
      window.location.replace('/products')
    })
  }

  private loadSubCategories(id: string): void {
    fetch(`https://localhost:5001/api/SubCategories/${id}`)
    .then(response => response.json())
    .then(data => this.subcategories = data);
  }

  private loadTypes(id: string): void {
    fetch(`https://localhost:5001/api/ProductsTypes/${id}`)
    .then(response => response.json())
    .then(data => this.types = data);
  }

  private loadModels(id: string): void {
    this.product.typeId = id;
    fetch(`https://localhost:5001/api/ProductsModels/${id}`)
    .then(response => response.json())
    .then(data => this.models = data);
  }

}
