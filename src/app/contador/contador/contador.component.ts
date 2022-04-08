import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template:`    
        <span>{{ base }}</span>
        <button (click)="acumular(base)">+</button>
        <span>{{numero}}</span>
        <button (click)="acumular(-base)">-</button>
    `
})
export class ContadorComponent {
    title:string = 'bases';
    numero:number = 0;
    base:number = 5; 
    
    acumular( valor:number){
      this.numero += valor;
    }
}