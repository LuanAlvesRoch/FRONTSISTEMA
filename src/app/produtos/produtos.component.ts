import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: any[] = []; // Lista de produtos que será carregada do servidor
  searchTerm: string = ''; // Termo de pesquisa digitado pelo usuário
  faEdit = faEdit;

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.loadProdutos(); // Carrega os produtos quando o componente é inicializado
  }

  // Método para buscar produtos do serviço
  loadProdutos() {
    this.produtoService.getProdutos().subscribe((data: any[]) => {
      this.produtos = data;  // Armazena os produtos recebidos na lista
    });
  }

  // Método para deletar um produto
  deleteProduto(id: number) {
    if (confirm('Tem certeza que deseja deletar este produto?')) {
      this.produtoService.deleteProduto(id).subscribe(() => {
        this.produtos = this.produtos.filter(produto => produto.id !== id); // Remove o produto da lista local
      });
    }
  }
  

  // Método para filtrar produtos com base no termo de pesquisa
  get filteredProdutos() {
    return this.produtos.filter(produto => 
      produto.produto_nome.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      produto.categoria_nome.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
