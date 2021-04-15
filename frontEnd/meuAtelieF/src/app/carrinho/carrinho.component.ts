import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { empty } from 'rxjs';
import { ProdutoModel } from '../modal/ProdutoModel';
import { CartService } from '../service/cart.service';
import { ConsultaCepService } from '../service/consulta-cep.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent  implements OnInit {
  formulario: FormGroup;
  FormValidations : Validators
  items = this.cartService.getItems();
  item : ProdutoModel = new ProdutoModel();
  itemss;
  total: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private cepService: ConsultaCepService,
    private cartService : CartService
    
  ) {
   }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required,]],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      }),
    });
     
  }


  consultaCEP() {
    const cep = this.formulario.get('endereco.cep').value;

    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep)
      .subscribe(dados => this.populaDadosForm(dados));
    }
  }

  populaDadosForm(dados) {
    // this.formulario.setValue({});

    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        // cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });

    this.formulario.get('nome').setValue('Loiane');

    // console.log(form);
  }

  resetaDadosForm() {
    this.formulario.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }
  limparCarrinho(){
    this.items = this.cartService.clearCart();
  }

  valorTotal(){
    return this.items.map(item => item.precoProduto).reduce((a, b) => a + b,0);

  }

  efetuarCompra(){
    alert('Compra efetuada com sucesso, será enviado um e-mail com a confirmação e os dados da compra.')
    this.limparCarrinho()
    this.resetaDadosForm()
    
    
  }
}


