import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
name = 'Matheus';
age = 30;
job = 'Programador';
hobbies = ['Correr', 'Jogar', 'Estudar'];
car = {
 name: 'polo',
 year: 2019,
};
// aqui são postas as variaveis e codigos typeScript
}
