import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedorListaComponent } from './fornecedor-lista.component';

describe('FornecedorListaComponent', () => {
  let component: FornecedorListaComponent;
  let fixture: ComponentFixture<FornecedorListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FornecedorListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FornecedorListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
