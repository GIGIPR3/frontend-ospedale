import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class fetchService {

  pazienti: any;
  medici: any;
  prestazioni: any;

  /* GET */

  getPaziente(){
    return fetch('http://localhost:8080/ospedale/v1/getPazienti',{
      method:'GET',
    }).then(response =>response.json())/* .then(data =>{return data}) *//* .then(data => {this.pazienti = data; console.log(this.pazienti);}) */
  }


  getMedico(){
    return fetch('http://localhost:8080/ospedale/v1/getMedico',{
      method:'GET',
    }).then(response =>response.json())/* .then(data => {this.medici = data; console.log(this.medici);
    }) */

  }

  getPrestazioni(){
    return fetch('http://localhost:8080/ospedale/v1/getPrestazioni',{
      method:'GET',
    }).then(response =>response.json())/* .then(data => {this.prestazioni = data; console.log(this.prestazioni);
    }) */

  }

  /* POST */

  submitPaziente(data:object){
    return fetch('http://localhost:8080/ospedale/v1/postPaziente',{
      method:'POST',
      body:JSON.stringify(data),
      headers:{
        "Content-Type":'application/json;charset=utf-8'
      }
    }).then(response =>response.json()) /* .then(data => console.log(data) */
  }


  submitMedico(data:object){
    return fetch('http://localhost:8080/ospedale/v1/postMedico',{
      method:'POST',
      body:JSON.stringify(data),
      headers:{
        "Content-Type":'application/json;charset=utf-8'
      }
    }).then(response =>response.json())/* .then(data => console.log(data)) */
  }


  submitPrestazione(data:object){
    console.log("post prestazione", data);

    return fetch('http://localhost:8080/ospedale/v1/postPrestazione',{
      method:'POST',
      body:JSON.stringify(data),
      headers:{
        "Content-Type":'application/json;charset=utf-8'
      }
    }).then(response =>response.json())/* .then(data => console.log(data)) */
  }

  /* DELETE */

  deletePaziente(id:number){
    return fetch(`http://localhost:8080/ospedale/v1/deletePaziente${id}`,{
      method:"DELETE"
    })
  }

  deleteMedico(id:number){
    return fetch(`http://localhost:8080/ospedale/v1/deleteMedico/${id}`,{
      method:"DELETE"
    })
  }

  deletePrestazione(id:number){
    return fetch(`http://localhost:8080/ospedale/v1/deletePrestazione${id}`,{
      method:"DELETE"
    })
  }
}
