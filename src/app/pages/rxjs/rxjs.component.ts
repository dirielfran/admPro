import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { retry, take, map, filter } from "rxjs/operators";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {

  public obsSubs: Subscription;

  constructor() {

    /*this.retornaObservable().pipe(
      retry(2)
    ).subscribe(
      valor => console.log('Subs: ', valor),
      error => console.warn('Error', error),
      () => console.info('Observable termino.')
    )*/

    this.obsSubs = this.retornaIntervalo().subscribe( valor => {console.log(valor)})

  }
  ngOnDestroy(): void {
    this.obsSubs.unsubscribe();
  }

  ngOnInit(): void {
  }

  retornaObservable(): Observable<number>{
    let i = -1;

    return new Observable<number>( observer => {

      const interval =   setInterval( () => {
        i++;
        observer.next(i);
        if( i === 4 ){
          clearInterval( interval );
          observer.complete();
        }

        if( i === 2 ){
          i= 0;
          observer.error('i llego al valor 2');
        }
      }, 1000)
    });
  }

  retornaIntervalo(): Observable<number>{
    return interval(1000).pipe(
      map( valor => valor + 1),
      filter( valor => (valor%2) == 0 ),
      //take(10),
      );
  }
}
