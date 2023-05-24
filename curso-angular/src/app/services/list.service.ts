import { Injectable } from '@angular/core';
import { Animal } from '../animal';
//importa o animal

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }
  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a) => animal.name !== a.name) 
  } // o !== é para diferenciar pq se n tiver o ! vai apagar todos os animais e n o animal especifico clicado

  //"=>" é uma arrow function que serve como um critério de filtro para a função filter. Ela verifica se o nome do animal passado como argumento é diferente do nome de cada elemento a do array animals, e retorna true se a condição for verdadeira, indicando que o elemento deve ser mantido no novo array filtrado.

  //filter é usada para criar um novo array com elementos que atendem a um critério específico. Ela filtra os elementos com base em uma função que determina se um elemento deve ser incluído ou não no novo array. É uma forma de selecionar apenas os elementos desejados de um array original.
}
