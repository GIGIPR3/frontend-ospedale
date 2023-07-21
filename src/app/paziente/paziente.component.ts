import { Component } from '@angular/core';
import { Prestazione } from '../interfaces/prestazione';
import { fetchService } from '../services/fetch.service'


@Component({
  selector: 'app-paziente',
  templateUrl: './paziente.component.html',
  styleUrls: ['./paziente.component.css']
})
export class PazienteComponent {

  prestazioni:Prestazione[]=[];

  ngOnInit(): void {
    this.returnPrestazioni();
  }

  constructor(private fetchservice : fetchService){}

  returnPrestazioni(){
    this.fetchservice.getPrestazioni().then(data =>{this.prestazioni = data})
  }

  bottoneDeletePrestazione(id:number){
    this.fetchservice.deletePrestazione(id)
  }

}
