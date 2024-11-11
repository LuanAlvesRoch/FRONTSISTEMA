import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from '../services/funcionarios.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {
  funcionarios: any[] = [];
  pesquisa: string = '';

  constructor(private funcionariosService: FuncionariosService) {}

  ngOnInit(): void {
    this.loadFuncionarios();
  }

  loadFuncionarios() {
    this.funcionariosService.getFuncionarios().subscribe(
      (data) => {
        this.funcionarios = data;
      },
      (error) => {
        console.error('Erro ao carregar funcionários', error);
      }
    );
  }

  deleteFuncionario(id: number) {
    if (confirm('Tem certeza que deseja deletar este produto?')) {
      this.funcionariosService.deleteFuncionario(id).subscribe(() => {
        this.funcionarios = this.funcionarios.filter(funcionario => funcionario.id !== id); // Remove o produto da lista local
      });
    }
  }

  get filteredFuncionarios() {
    return this.funcionarios.filter(funcionarios => 
      funcionarios.nome.toLowerCase().includes(this.pesquisa.toLowerCase())
    );
  }
}
