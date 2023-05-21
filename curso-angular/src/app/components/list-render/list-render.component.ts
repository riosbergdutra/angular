import { Component } from '@angular/core';

import { Animal } from 'src/app/animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal [] = [
    {name: "Turca", type: "Dog", age: 4},
    {name: "Tom", type: 'Cat', age: 10},
    {name: 'Frida', type: 'Dog', age: 5},   
    {name: 'Bob', type: 'Horse', age: 1},
    // este [] é para ARRAYS
  ]

  eletronico = [
    'Telefone', 'celular', 'computador',
  ]

    animal: Animal =  {
    name: 'Teste',
    type: 'Alguma coisa',
    age: 2
  } // este animal: Animal significa que ele recebe o Animal assim como se eu colocasse object, number, string etc...

  animalDetails = '' // serve para ser uma variavel para oque estiver escrito ali em baixo deverá ser exibida aqui

  showage(animal: Animal) {
  this.animalDetails =  `O pet ${animal.name} tem ${animal.age} anos`
  } // o "animal.name" e o "animal.age" serve para dizer que me refiro a array name do animal
}
