import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  public name: string = 'ironman';
  public age: number = 45;
  get capitalizeName():string{
    return this.name.toUpperCase();
  }
  public getHeroeDescription():string{
    return `${this.name}- ${this.age}`;
  }
  changeHeroe():void{
    this.name = 'Spiderman';
  }
  changeAge():void{
    this.age = 25;
  }
  resetForm():void{
    this.name = 'iroman';
    this.age = 45;
    /*document.querySelectorAll('h1')!.forEach(element => {
      element.innerHTML = '<h1>Desde Angular</h1>';
    });*/
  }
}
