import { Fornecedor } from './../shared/fornecedor.model';
import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewChild,
  Renderer2,
  Renderer
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import { FornecedorService } from '../shared/fornecedor.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Endereco } from '../../endereco/shared/endereco.model';
import { ModalButtonComponent } from '../../shared/modal/modal-button/modal-button.component';

@Component({
  selector: 'alt-fornecedor-cadastro',
  templateUrl: './fornecedor-cadastro.component.html',
  styleUrls: ['./fornecedor-cadastro.component.scss']
})
export class FornecedorCadastroComponent implements OnInit {
  @ViewChild('codigo') public codigoElement: ElementRef;
  @ViewChild(ModalButtonComponent) public localizarButton: ModalButtonComponent;
  public fornecedores: Fornecedor[];
  public endereco: Endereco;
  public cadastroForm: FormGroup;
  public filtroForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private fornecedorService: FornecedorService,
    private renderer: Renderer
  ) {
    this.inicializarCadastroForm();
    this.inicializarFiltroForm();
  }

  ngOnInit() {}

  @Input()
  public set fornecedor(fornecedor: Fornecedor) {
    if (fornecedor) {
      const f = new Fornecedor(fornecedor);
      this.cadastroForm.patchValue(f);
      this.endereco = f.Endereco;
    } else {
      this.cadastroForm.reset();
      this.endereco = null;
    }
  }

  public buscar() {
    this.localizarButton.exibirModal();
  }

  public async buscarPorCodigoDeChamada(codigo: string) {
    try {
      this.fornecedor = await this.fornecedorService.obterPorCodigo(codigo);
    } catch (e) {
      if (e.status === 404) {
        this.codigoElement.nativeElement.focus();
        this.cadastroForm.reset();
        this.endereco = null;
      }
    }
  }

  private async buscarFornecedor(texto: string) {
    this.fornecedores = await this.fornecedorService.obterPorFiltro(texto);
  }

  public selecionar(fornecedor: Fornecedor) {
    this.fornecedor = fornecedor;
    this.cadastroForm.patchValue(fornecedor);
  }

  private inicializarCadastroForm() {
    this.cadastroForm = this.fb.group({
      CdChamada: this.fb.control(''),
      CdCPF_CGC: this.fb.control(''),
      TpPessoa: this.fb.control(''),
      NrTelefone: this.fb.control(''),
      NmPessoa: this.fb.control('')
    });
  }

  private inicializarFiltroForm() {
    this.filtroForm = this.fb.group({
      Filtro: this.fb.control('')
    });
    this.filtroForm
      .get('Filtro')
      .valueChanges.debounceTime(500)
      .subscribe(this.buscarFornecedor.bind(this));
  }
}
