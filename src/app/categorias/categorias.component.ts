// src/app/categorias/categorias.component.ts
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categorias: any[] = [];
  searchTerm: string = '';

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(data => {
      this.categorias = data;
    });
  }
}
