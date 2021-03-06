import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @Input() progress: number = 40;
  @Input() valorClase: string = 'btn-info';

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.valorClase = `btn ${ this.valorClase }`
  }

  cambiarPorcentaje( valor: number ){
    if( this.progress >= 100 && valor >= 0 ){
      this.valorSalida.emit(100);
      return this.progress = 100;
    }
    if( this.progress <= 0 && valor < 0 ){
      this.valorSalida.emit(0);
      return this.progress = 0;
    }
    this.valorSalida.emit(this.progress + valor);
    return this.progress = this.progress + valor;
  }

  onChange( newValor:  number){
    if(newValor > 100){
      this.progress = 100;
    }else if(newValor < 0 ){
      this.progress = 0;
    }else{
      this.progress = newValor;
    }
    this.valorSalida.emit(this.progress);
  }

}
