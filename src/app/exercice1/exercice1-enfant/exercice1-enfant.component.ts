import { Component, OnInit,Input ,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input( ) result:number;
  @Output() returnResult :EventEmitter<number> = new EventEmitter<number>();
  add() :void{
    this.result++;
    this.getValeurCompteur();
  }

  minus(): void{
    this.result--;
    this.getValeurCompteur();
  }

  getValeurCompteur() :void{    
    this.returnResult.emit(this.result);
  }
  constructor() { }

  ngOnInit() {
  }

}
