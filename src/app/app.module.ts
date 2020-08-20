
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TarefasListComponent } from './tarefas/tarefas-list/tarefas-list.component';
import { TarefasFormComponent } from './tarefas/tarefas-form/tarefas-form.component';

const  appRoutes: Routes = [
  { path: 'home', component: TarefasListComponent },
  { path: 'tarefa/nova', component: TarefasFormComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TarefasListComponent,
    TarefasFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
