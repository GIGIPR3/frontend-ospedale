import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PazienteComponent } from './paziente/paziente.component';
import { MedicoComponent } from './medico/medico.component';
import { DirigenteComponent } from './dirigente/dirigente.component';

const routes: Routes = [
  {path: '', component: UserComponent},
  {path: 'paziente', component: PazienteComponent},
  {path: 'medico', component: MedicoComponent},
  {path:'dirigente', component: DirigenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
