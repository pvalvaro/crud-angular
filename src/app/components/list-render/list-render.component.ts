import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals:Animal[] = [
    {name:'Kambua', type:'Dog', age:10},
    {name:'Laika', type:'Dog', age:5},
    {name:'Ngulo', type:'Pig', age:2},
    {name:'Niao', type:'Cat', age:30}
  ];

  animalDetails:string = '';

  constructor() { }

  ngOnInit(): void {
  }
  showAge(animal:Animal){
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`;
  }
}
