import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../shared/tarefa';
import { TarefaService } from '../shared/tarefa.service';

@Component({
  selector: 'app-tarefas-list',
  templateUrl: './tarefas-list.component.html',
  styleUrls: ['./tarefas-list.component.css']
})
export class TarefasListComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.tarefaService.getAll().subscribe(resp => {
      this.tarefas = resp;
    })
  }

  remove(tarefa: Tarefa){
    this.tarefaService.remove(tarefa.id).subscribe(() => {

      this.tarefas = this.tarefas.filter(p => p !== tarefa);

    });
  }
}

