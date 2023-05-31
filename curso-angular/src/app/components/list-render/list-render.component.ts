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
  animals: Animal [] = []

  eletronico = [
    'Telefone', 'celular', 'computador',
  ]

   // este animal: Animal significa que ele recebe o Animal assim como se eu colocasse object, number, string etc...

  animalDetails = "" // serve para ser uma variavel para oque estiver escrito ali em baixo deverá ser exibida aqui

  showAge(animal: Animal) {
  this.animalDetails =  `O pet ${animal.name} tem ${animal.age}`
  } // o "animal.name" e o "animal.age" serve para dizer que me refiro a array name do animal

 constructor (private listService: ListService) {
  this.getAnimals() // para puxar os dados da API é assim
 }
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

  getAnimals(): void{
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
    //subscribe serve para o evento ser concretizado como se tivesse esperando o evento para realizar alguma coisa
    // no subscribe tem como fazer algumas coisas com as propriedades do meu componente
    //estou chamando ele do que eu quero "coloquei animals" e na função faço a atribuição para esssa propriedade 
  } // quando o elemento é observavel não pode colocar this.animals =
  //ele acessa o metodo do service

  //"void" indica que uma função não retorna nenhum valor

  /* Nesse código, estamos chamando a função getAll() do serviço listService, que retorna um objeto do tipo Observable contendo a lista de animais. Em seguida, nos inscrevemos nesse Observable usando o método subscribe().

Dentro da função subscribe(), definimos uma função de retorno que será executada quando os dados dos animais estiverem disponíveis. Essa função recebe a lista de animais como parâmetro e a atribui à propriedade this.animals do componente.

Dessa forma, quando a solicitação para obter todos os animais for concluída com sucesso, a função de retorno será chamada e a lista de animais será atribuída à propriedade this.animals. Isso permite que o componente atualize sua exibição com os dados mais recentes recebidos do servidor.*/
}
