import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name:string = 'Pedro';
  age:number = 35;
  job = 'Dev';
  hobbies = ['Correr', 'Jogar', 'Estudar'];
  car = {
    name: 'Polo',
    year: 2020
  }
  constructor() { }

  ngOnInit(): void {
  }

}
