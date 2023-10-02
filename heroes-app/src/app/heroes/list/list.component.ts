import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroeNames: string[]=[
    'Spiderma','Iroman','Hulk','She-Hulk','Thor'
  ]
  public deletedHero?: string;
  public removeLastHero():void{
    this.deletedHero = this.heroeNames.pop();
  }
}