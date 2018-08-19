import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  //public compteur: number = 0; 
  public result: number;

  constructor() { }

  GetValue(r :number):void {
    this.result=r;
  }
  ngOnInit() {
    this.result=0;  
  }

}
