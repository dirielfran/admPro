import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css']
})
export class ProgressComponent  {

  progreso1: number = 15;
  progreso2: number = 40;

  get getProgress1(){
    return `${this.progreso1}%`
  }

  get getProgress2(){
    return `${this.progreso2}%`
  }

}
