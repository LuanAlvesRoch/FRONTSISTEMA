import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';
import { CategoriaService } from '../../services/categoria.service'; // Importando o serviço de categoria
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  produtoId: number = 0;
  produto: any = {};
  categorias: any[] = []; // Declarando a propriedade categorias

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService, // Adicionando o serviço de categoria
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID capturado:', id);
    if (id !== null && !isNaN(Number(id))) {
      this.produtoId = +id;
      this.carregarProduto(this.produtoId);
      this.obterCategorias(); // Carregando categorias
    } else {
      console.error('ID inválido:', id);
    }
  }

  carregarProduto(id: number): void {
    this.produtoService.getProdutoById(id).subscribe(
      data => {
        this.produto = {
          ...data,
          preco: parseFloat(data.preco.replace('R$', '').replace(',', '.')),
          preco_final: parseFloat(data.preco_final.replace('R$', '').replace(',', '.'))
        };
      },
      error => {
        console.error('Erro ao carregar o produto:', error);
      }
    );
  }

  obterCategorias(): void {
    this.categoriaService.getCategorias().subscribe(
      data => {
        this.categorias = data; // Armazenando a lista de categorias
      },
      error => {
        console.error('Erro ao carregar categorias:', error);
      }
    );
  }

  salvarAlteracoes(): void {
    if (this.produtoId) {
        console.log('Produto a ser enviado:', this.produto);

        // Verificação dos campos
        console.log('Verificando campos obrigatórios...');
        console.log('Nome:', this.produto.nome);
        console.log('Preço:', this.produto.preco);
        console.log('Imposto:', this.produto.imposto);
        console.log('Categoria ID:', this.produto.categoria_id);
        console.log('Quantidade em Estoque:', this.produto.quantidade_em_estoque);

        if (!this.produto.nome || !this.produto.preco || !this.produto.imposto || !this.produto.categoria_id) {
            alert('Os campos nome, preco, imposto e categoria_id são obrigatórios.');
            return;
        }

        // Convertendo o preço unitário e o preço final
        this.produto.preco = parseFloat(this.produto.preco.toString().replace(',', '.'));

        // Atualiza o preço final com base na nova quantidade
        

        this.produtoService.updateProduto(this.produtoId, this.produto).subscribe({
            next: () => {
                alert('Produto atualizado com sucesso!');
                this.router.navigate(['/produtos']);
            },
            error: (err) => {
                console.error('Erro ao atualizar o produto:', err);
                alert('Erro ao atualizar o produto. Tente novamente.');
            }
        });
    }
  }

}
