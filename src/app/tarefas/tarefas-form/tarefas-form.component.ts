import { TarefaService } from './../shared/tarefa.service';
import { Tarefa } from './../shared/tarefa';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tarefas-form',
  templateUrl: './tarefas-form.component.html',
  styleUrls: ['./tarefas-form.component.css']
})
export class TarefasFormComponent implements OnInit {

  tarefa: Tarefa;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private tarefaService: TarefaService) { }

  ngOnInit(): void {

    this.tarefa = new Tarefa();

    const id = this.route.snapshot.paramMap.get('id');
    //console.log(id);

    if(id){
      this.tarefaService.getById(parseInt(id)).subscribe(resp =>{
        this.tarefa = resp;
      });
    }
  }

  onSubmit(){
    //console.log(this.tarefa);
    let observable: Observable<Tarefa>;

    if (this.tarefa.id){
      observable = this.tarefaService.update(this.tarefa);
    }else{
      observable = this.tarefaService.insert(this.tarefa);
    }

    observable.subscribe(() =>{
      this.router.navigate(['/home']);
    });

    //this.router.navigate(['/produtos']);

  }

}
