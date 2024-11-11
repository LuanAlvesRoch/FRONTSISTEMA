import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionariosService } from '../services/funcionarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  senha: string = '';

  constructor(private funcionariosService: FuncionariosService, private router: Router) {}

  login() {
    this.funcionariosService.getFuncionarios().subscribe(
      (funcionarios) => {
        const funcionario = funcionarios.find((f: any) => f.email === this.email && f.senha === this.senha);
        
        if (funcionario) {
          // Armazena um sinal de autenticação (pode ser um token, ou uma variável no localStorage)
          localStorage.setItem('auth', 'true');
          alert('Login bem-sucedido!');
          this.router.navigate(['/produtos']); 
        } else {
          alert('Credenciais inválidas. Tente novamente.');
        }
      },
      (error) => {
        console.error('Erro ao buscar funcionários:', error);
        alert('Erro ao fazer login. Tente novamente mais tarde.');
      }
    );
  }
}
