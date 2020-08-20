import { Tarefa } from './tarefa';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private URL = 'http://localhost:8080/tarefas'

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Tarefa[]>(this.URL);
  }

  getById(id: number){

    const url = `${this.URL}/${id}`;
    return this.http.get<Tarefa>(url);
  }

  insert(tarefa: Tarefa){

    return this.http.post<Tarefa>(this.URL, tarefa);

  }

  update(tarefa: Tarefa){

    return this.http.put<Tarefa>(this.URL, tarefa);

  }

  remove(id: number){
    const url = `${this.URL}/${id}`;
    return this.http.delete<Tarefa>(url);

  }

}
