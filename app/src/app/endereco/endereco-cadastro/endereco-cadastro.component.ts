import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Endereco } from '../shared/endereco.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'alt-endereco-cadastro',
  templateUrl: './endereco-cadastro.component.html',
  styleUrls: ['./endereco-cadastro.component.scss']
})
export class EnderecoCadastroComponent implements OnInit, OnChanges {
  @Input() public readonly: Boolean;
  public formEndereco: FormGroup;
  constructor(private fb: FormBuilder) {
    this.inicializarForm();
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {}

  @Input()
  public set endereco(endereco: Endereco) {
    if (endereco) {
      this.formEndereco.patchValue(endereco);
    } else {
      this.formEndereco.reset();
    }
  }

  private inicializarForm() {
    this.formEndereco = this.fb.group({
      CdEndereco: this.fb.control(''),
      CdCEP: this.fb.control(''),
      TpLogradouro: this.fb.control(''),
      NmLogradouro: this.fb.control(''),
      NrLogradouro: this.fb.control(''),
      DsComplemento: this.fb.control(''),
      Bairro: this.fb.group({
        IdBairro: this.fb.control(''),
        NmBairro: this.fb.control('')
      }),
      Cidade: this.fb.group({
        IdCidade: this.fb.control(''),
        NmCidade: this.fb.control('')
      }),
      UF: this.fb.group({
        IdUF: this.fb.control('')
      })
    });
  }
}
