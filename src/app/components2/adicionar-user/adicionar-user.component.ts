import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from '../../services/funcionarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-user',
  templateUrl: './adicionar-user.component.html',
  styleUrl: './adicionar-user.component.css'
})
export class AdicionarUserComponent implements OnInit {
  funcionario: any={
    nome: '',
    email: '',
    senha: ''
  };

  constructor(
    private funcionariosService: FuncionariosService,
    private router: Router
  ){}

  ngOnInit(): void {}

  adicionarFuncionario(): void {
    // Validar se todos os campos estão preenchidos
    if (!this.funcionario.nome ||!this.funcionario.email ||!this.funcionario.senha) {
      alert('Todos os campos são obrigatórios');
      return;
    }

    this.funcionariosService.addFuncionario(this.funcionario).subscribe( {
      next: () => {
        alert('funcionario adicionado com sucesso!');
        this.router.navigate(['/funcionarios']); // Redireciona para a página principal
      },
      error: (err) => {
        console.error('Erro ao adicionar o funcionario:', err);
        alert('Erro ao adicionar o funcionario. Tente novamente.');
      }
      
    });
  }
}
