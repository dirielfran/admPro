import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesa',
  templateUrl: './promesa.component.html',
  styleUrls: ['./promesa.component.css']
})
export class PromesaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuario().then( resp => console.log( resp ) );

    const promesa = new Promise( (resolve, reject) => {
      if(true){
        resolve('Hola Mundo');
      }else{
        reject('Algo salio mal');
      }
    });

    promesa.then( (mensaje) => {
      console.log(mensaje);
    }).catch((error) => {
      console.log( 'Error de la promesa', error );
    })

    console.log('Fin de la promesa')
  }

  getUsuario(){
    return new Promise( (resolve) => {
      fetch( 'https://reqres.in/api/users' )
        .then( resp => resp.json() )
        .then( body => resolve( body.data ) );
    } )
  }

}
