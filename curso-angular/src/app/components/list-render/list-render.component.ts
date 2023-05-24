import { Component } from '@angular/core';

import { Animal } from 'src/app/animal';
// interface

import { ListService } from 'src/app/services/list.service';
//este é o service chamado list-service

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

 constructor (private listService: ListService) {}
 // coloque em privado
 // precisa criar um constructor () {} para dar certo o services
 // o angular vai entender que eu automaticamente que eu criei um novo serviço que vai se chamar listService e ele vem de ListService
 // crie com um começo minusculo para diferenciar da classe da inportação
 //O constructor é um método especial em uma classe que é usado para inicializar propriedades e executar lógica de inicialização. Ele é chamado automaticamente quando um objeto da classe é criado e é útil para definir valores padrão para as propriedades e realizar outras tarefas de configuração necessárias.


 removeAnimal (animal: Animal){
  console.log('removendo animal...')
  this.animals = this.listService.remove(this.animals, animal);
  //this.animals array completo;
  //animal parametro "animal especifico";
}
}
