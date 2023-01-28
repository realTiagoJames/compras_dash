import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaCompraFormComponent } from './nova-compra-form.component';

describe('NovaCompraFormComponent', () => {
  let component: NovaCompraFormComponent;
  let fixture: ComponentFixture<NovaCompraFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaCompraFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaCompraFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
