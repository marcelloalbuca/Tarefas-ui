import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TarefasListComponent } from './tarefas/tarefas-list/tarefas-list.component';
import { TarefasFormComponent } from './tarefas/tarefas-form/tarefas-form.component';

const  appRoutes: Routes = [
  { path: 'home', component: TarefasListComponent },
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
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
