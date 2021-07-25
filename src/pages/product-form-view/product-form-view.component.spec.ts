import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormViewComponent } from './product-form-view.component';

describe('ProductFormViewComponent', () => {
  let component: ProductFormViewComponent;
  let fixture: ComponentFixture<ProductFormViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFormViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
