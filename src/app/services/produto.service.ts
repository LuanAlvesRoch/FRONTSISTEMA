// src/app/produto.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private apiUrl = 'http://127.0.0.1:5000/produtos'; // URL do backend

  constructor(private http: HttpClient) { }

  // Método para deletar um produto
  deleteProduto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Método para obter todos os produtos
  getProdutos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Método para obter um produto por ID
  getProdutoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Método para atualizar um produto
  updateProduto(id: number, produto: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(`${this.apiUrl}/${id}`, produto, { headers });
  }

  addProduto(produto: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, produto);
  }
  
}
