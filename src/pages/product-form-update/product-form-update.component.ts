import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductEntity } from 'src/entities/ProductEntity';

@Component({
  selector: 'app-product-form-update',
  templateUrl: './product-form-update.component.html',
  styleUrls: ['./product-form-update.component.css']
})
export class ProductFormUpdateComponent implements OnInit {

  @Output() setMode = new EventEmitter<boolean>();
  public product: ProductEntity = new ProductEntity();
  public categories: any;
  public subCategories: any;
  public types: any;
  public models: any;

  constructor(private route: ActivatedRoute) {

    const id = this.route.snapshot.queryParams.id;

    this.loadCategories(id);
    this.loadSubCategories(this.product.categoryId);
    
    if(this.product.typeId || this.product.modelId) {
      this.loadTypes(this.product.subCategoryId);
      this.loadModels(this.product.typeId);
    }
  }

  public ngOnInit(): void {
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
      id: this.product.id,
      name: this.product.name,
      categoryId: this.product.categoryId,
      subCategoryId: this.product.subCategoryId,
      typeId: this.product.typeId,
      modelId: this.product.modelId,
      price: this.product.price
    };

    fetch('https://localhost:5001/api/Products', {
      method: 'put',
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

  private loadProductData(id: string):void {
    fetch(`https://localhost:5001/api/Products/${id}`)
    .then(response => response.json())
    .then(data => this.product = data);
  }

  private loadCategories(id: string): void {
    fetch(`https://localhost:5001/api/Categories`)
    .then(response => response.json())
    .then(data => {
      this.categories = data;
      this.loadProductData(id);
    });
  }

  private loadSubCategories(id: string): void {
    fetch(`https://localhost:5001/api/SubCategories/${id}`)
    .then(response => response.json())
    .then(data => this.subCategories = data);
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
