import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormCreateComponent } from './product-form-create.component';

describe('ProductFormCreateComponent', () => {
  let component: ProductFormCreateComponent;
  let fixture: ComponentFixture<ProductFormCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFormCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
