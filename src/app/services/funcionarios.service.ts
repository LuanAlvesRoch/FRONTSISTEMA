import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  private apiUrl = 'http://127.0.0.1:5000/funcionarios'; // URL do backend

  constructor(private http: HttpClient) { }

   // Método para listar todos os funcionários
   getFuncionarios(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  // Método para buscar um funcionário pelo ID
  getFuncionarioById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Método para adicionar um novo funcionário
  addFuncionario(funcionario: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, funcionario);
  }

  // Método para atualizar um funcionário existente
  updateFuncionario(id: number, funcionario: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, funcionario);
  }

  // Método para deletar um funcionário pelo ID
  deleteFuncionario(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
