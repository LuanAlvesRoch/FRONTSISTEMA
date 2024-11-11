import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { CategoriaService } from '../../services/categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {
  produto: any = {
    nome: '',
    descricao: '',
    preco: 0,
    imposto: 0,
    quantidade_em_estoque: 0,
    categoria_id: null
  };
  categorias: any[] = [];

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obterCategorias();
  }

  obterCategorias(): void {
    this.categoriaService.getCategorias().subscribe(
      (data) => {
        this.categorias = data;
      },
      (error) => {
        console.error('Erro ao carregar categorias:', error);
      }
    );
  }

  adicionarProduto(): void {
    // Validação simples
    if (!this.produto.nome || !this.produto.preco || !this.produto.imposto || !this.produto.categoria_id) {
      alert('Preencha todos os campos obrigatórios.');
      return;
    }

    // Chamada ao serviço para adicionar o produto
    this.produtoService.addProduto(this.produto).subscribe({
      next: () => {
        alert('Produto adicionado com sucesso!');
        this.router.navigate(['/produtos']); // Redireciona para a página principal
      },
      error: (err) => {
        console.error('Erro ao adicionar o produto:', err);
        alert('Erro ao adicionar o produto. Tente novamente.');
      }
    });
  }
}
