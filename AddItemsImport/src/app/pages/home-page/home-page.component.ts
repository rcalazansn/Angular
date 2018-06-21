import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {

  skuImportados: string;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(' ------------------');
    console.log('|@Calazans | @2018 |');
    console.log(' ------------------');

    if (localStorage.getItem('usuario.logado') == null) {
      this.router.navigateByUrl('/');
    }
  }

  OnImportacaoSku(skus) {
    this.skuImportados = skus;
  }
}
