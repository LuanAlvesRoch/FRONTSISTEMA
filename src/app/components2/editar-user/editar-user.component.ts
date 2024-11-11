import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from '../../services/funcionarios.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-user',
  templateUrl: './editar-user.component.html',
  styleUrl: './editar-user.component.css'
})
export class EditarUserComponent implements OnInit {
  funcionarioId: number = 0;
  funcionario: any = {};

  constructor(
    private funcionariosService: FuncionariosService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID capturado:', id);
    if (id !== null && !isNaN(Number(id))) {
      this.funcionarioId = +id;
      this.carregarFuncionario(this.funcionarioId);
      
    } else {
      console.error('ID inválido:', id);
    }
  }

  carregarFuncionario(id: number): void {
    this.funcionariosService.getFuncionarioById(id).subscribe(
      data => {
        this.funcionario = data; // Atribui os dados retornados ao objeto funcionario
      },
      error => {
        console.error('Erro ao carregar o produto:', error);
      }
    );
  }

  salvarAlteracoes(): void {
    if (this.funcionarioId) {
        console.log('Produto a ser enviado:', this.funcionario);

        // Verificação dos campos
        console.log('Verificando campos obrigatórios...');
        console.log('Nome:', this.funcionario.nome);
        console.log('Email:', this.funcionario.email);
        console.log('Senha:', this.funcionario.senha);
        

        if (!this.funcionario.nome || !this.funcionario.email || !this.funcionario.senha) {
            alert('Os campos nome, email e senha são obrigatórios.');
            return;
        }
        

        this.funcionariosService.updateFuncionario(this.funcionarioId, this.funcionario).subscribe({
            next: () => {
                alert('funcionario atualizado com sucesso!');
                this.router.navigate(['/funcionarios']);
            },
            error: (err) => {
                console.error('Erro ao atualizar o funcionario:', err);
                alert('Erro ao atualizar o funcionario. Tente novamente.');
            }
        });
    }
  }
}
