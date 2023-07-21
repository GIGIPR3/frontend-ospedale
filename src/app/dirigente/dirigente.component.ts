import { Component, OnInit } from '@angular/core';
import { Paziente } from '../interfaces/paziente';
import { Medico } from '../interfaces/medico';
import { Prestazione } from '../interfaces/prestazione';
import { fetchService } from '../services/fetch.service';

@Component({
  selector: 'app-dirigente',
  templateUrl: './dirigente.component.html',
  styleUrls: ['./dirigente.component.css']
})

export class DirigenteComponent implements OnInit {

  pazienti:Paziente[]=[];
  medici:Medico[]=[];
  prestazioni:Prestazione[]=[];


  ngOnInit(): void {
    /* this.getPaziente(); */
    /* this.getMedico(); */
    /* this.getPrestazioni(); */
    this.returnPazienti();
    this.returnMedici();
    this.returnPrestazioni();
  }

  constructor(private fetchservice : fetchService){}

    /*
    !------GET------
    */

    returnPazienti(){
      this.fetchservice.getPaziente().then(data => {this.pazienti = data; console.log("get di pazienti",this.pazienti);
      })
    }

    returnMedici(){
        this.fetchservice.getMedico().then(data => {this.medici = data; console.log("get medici", this.medici);})
      }

    returnPrestazioni(){
        this.fetchservice.getPrestazioni().then(data =>{this.prestazioni = data})
      }

    medicoId = 0;
    firstName = '';
    lastName = '';
    codiceFiscale = '';
    active = '';
    email = '';
    medico = '';
    tipologia= '';




  /* getPaziente(){
    fetch('http://localhost:8080/ospedale/v1/getPazienti',{
      method:'GET',
    }).then(response =>response.json()).then(data => {this.pazienti = data; console.log(this.pazienti);
    })

  } */


  /* getMedico(){
    fetch('http://localhost:8080/ospedale/v1/getMedico',{
      method:'GET',
    }).then(response =>response.json()).then(data => {this.medici = data; console.log(this.medici);
    })
  } */



  /* getPrestazioni(){

    fetch('http://localhost:8080/ospedale/v1/getPrestazioni',{
      method:'GET',
    }).then(response =>response.json()).then(data => {this.prestazioni = data; console.log(this.prestazioni);
    })

  } */





  /*
    !------POST------
  */


  bottonePaziente() {
    // Add your custom logic here to submit the data to the backend

    const data =
    {firstName: this.firstName,
    lastName: this.lastName,
    codiceFiscale: this.codiceFiscale,
    email: this.email}

    /* this.submitObject(data) */
    this.fetchservice.submitPaziente(data).then(data => console.log(data))
  }


  bottoneMedico() {
    // Add your custom logic here to submit the data to the backend

    const data =
    {firstName: this.firstName,
      lastName: this.lastName,
      active: this.active,
      email: this.email}

    /* this.submitObjectM(data) */
    this.fetchservice.submitMedico(data).then(data => console.log(data))
  }


  bottonePrestazione() {
    // Add your custom logic here to submit the data to the backend

    const data =
    {/* prestazioneId: this.prestazioneId, */
      tipologia: this.tipologia,
      medicoId: this.medicoId,}

    this.fetchservice.submitPrestazione(data).then(data => console.log(data))
  }



  /*
    !------DELETE------
    */

    /* deletePaziente(id:number){
      fetch(`http://localhost:8080/ospedale/v1/deletePaziente${id}`,{
        method:"DELETE"
      })
    }

    deleteMedico(id:number){
      fetch(`http://localhost:8080/ospedale/v1/deleteMedico/${id}`,{
        method:"DELETE"
      })
    }

    deletePrestazione(id:number){
      fetch(`http://localhost:8080/ospedale/v1/deletePrestazione${id}`,{
        method:"DELETE"
      })
    } */

    bottoneDeletePaziente(id:number){
      this.fetchservice.deletePaziente(id)
    }

    bottoneDeleteMedico(id:number){
      this.fetchservice.deleteMedico(id)
    }

    bottoneDeletePrestazione(id:number){
      this.fetchservice.deletePrestazione(id)
    }

}

