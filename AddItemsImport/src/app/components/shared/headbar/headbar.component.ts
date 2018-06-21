import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html'
})
export class HeadbarComponent implements OnInit {

  @Output() importacaoSku: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ImportacaoArquivoSku(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.readAsText(event.srcElement.files[0]);
      let me = this;
      reader.onload = function () {
        me.importacaoSku.emit(reader.result);
      }
    }
  }

  sair() {
    localStorage.removeItem('usuario.logado');
    this.router.navigateByUrl('/');
  }
}
