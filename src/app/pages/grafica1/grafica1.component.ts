import { Component, OnInit } from '@angular/core';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {
  public labels1: Label[] = ['Download Sales1', 'In-Store Sales1', 'Mail-Order Sales1'];
  public labels2: Label[] = ['Download Sales2', 'In-Store Sales2', 'Mail-Order Sales2'];
  public labels3: Label[] = ['Download Sales3', 'In-Store Sales3', 'Mail-Order Sales3'];
  public labels4: Label[] = ['Download Sales4', 'In-Store Sales4', 'Mail-Order Sales4'];

  public data1 = [[350, 450, 100],];
  public data2 = [[150, 250, 400],];
  public data3 = [[450, 250, 500],];
  public data4 = [[450, 350, 300],];

  constructor() { }

  ngOnInit(): void {
  }
}
