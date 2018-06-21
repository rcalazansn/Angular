import { Usuario } from './../../Services/data.service';
import { Component, OnInit } from '@angular/core';
import { Validator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../Services/data.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private dataService: DataService,
    private fb: FormBuilder) {
    this.form = this.fb.group({
      usuario: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(100),
        Validators.required
      ])],
      senha: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
  }

  ngOnInit() {
  }

  entrar() {
    let result = this.dataService.login(this.form.value);

    if (result) {
      localStorage.setItem('usuario.logado', this.form.controls['usuario'].value);
      this.router.navigateByUrl('/home');
    } else {
      localStorage.removeItem('usuario.logado');
      this.toastr.error('Usuário e/ou Senha inválidos!', 'ERRO');
    }
  }
}
