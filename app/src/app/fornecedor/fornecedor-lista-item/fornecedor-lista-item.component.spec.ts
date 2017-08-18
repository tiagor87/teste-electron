import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedorListaItemComponent } from './fornecedor-lista-item.component';

describe('FornecedorListaItemComponent', () => {
  let component: FornecedorListaItemComponent;
  let fixture: ComponentFixture<FornecedorListaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FornecedorListaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FornecedorListaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
