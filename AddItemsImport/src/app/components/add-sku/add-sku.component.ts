import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-sku',
  templateUrl: './add-sku.component.html'
})
export class AddSkuComponent implements OnInit {

  @Input() skuImportacao: string;

  SKUs: string;
  listaSKUs: string[];

  btnAdicionarSkuDisabled: boolean = true;

  btnProcessarDesabilitado: boolean = true;
  btnProcessarProcessando: boolean;

  constructor(
    private dataService: DataService,
    private toastr: ToastrService) { }

  ngOnChanges() {
    if (this.skuImportacao != undefined) {
      if (this.skuImportacao.length > 0) {
        this.SKUs = this.skuImportacao;
        this.btnAdicionarSkuDisabled = false;
        this.skuImportacao = "";
      }
    }
  }

  ngOnInit() {
  }

  adicionarSkus() {
    let _listaAtual = this.listaSKUs;
    this.listaSKUs = this.SKUs
      .trim()
      .split(",")
      .map(Function.prototype.call, String.prototype.trim);

    if (_listaAtual != undefined) {
      _listaAtual.forEach(item => {
        this.listaSKUs.push(item.trim());
      })
    }

    this.SKUs = "";
    this.skuImportacao = "";
    this.btnProcessarDesabilitado = false;
    this.btnAdicionarSkuDisabled = true;
  }

  onChangeSkus(skus: string) {
    if (skus.trim().length >= 8)
      this.btnAdicionarSkuDisabled = false;
    else
      this.btnAdicionarSkuDisabled = true;
  }

  remover(item) {
    let _index = this.listaSKUs.indexOf(item, 0);
    this.listaSKUs.splice(_index, 1);

    if (this.listaSKUs.length == 0) {
      this.btnAdicionarSkuDisabled = true;
      this.btnProcessarDesabilitado = true;
    }
  }

  processar() {
    /*
    60304913, 67000812,67000814,67000815,
    67000824,67000835,67000850,67000851,
    67000861,67000872,67000874
    */
    this.btnProcessarProcessando = true;
    this.dataService.enviarAPI(this.listaSKUs).subscribe(
      response => {
        this.toastr.success('SKUs atualizado com sucesso!', 'Sucesso');
        this.listaSKUs = [];
        this.btnProcessarProcessando = false;
      }, err => {
        this.toastr.error('Verifique se o SKU está correto!', 'ERRO');
      //  this.btnProcessarProcessando = false;
      });

    this.btnAdicionarSkuDisabled = true;
    this.btnProcessarDesabilitado = true;
  }
}
