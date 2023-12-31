import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PazienteComponent } from './paziente/paziente.component';
import { PazientePrenotatoComponent } from './paziente/paziente-prenotato/paziente-prenotato.component';
import { MedicoComponent } from './medico/medico.component';
import { DirigenteComponent } from './dirigente/dirigente.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    PazienteComponent,
    PazientePrenotatoComponent,
    MedicoComponent,
    DirigenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
