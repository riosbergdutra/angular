import { Injectable } from '@angular/core';
import { Animal } from '../animal';
//importa o animal
import { HttpClient, HttpHeaders } from '@angular/common/http';
// HttpClient para fazer requisições
// HttpHeaders para cofigurar o cabeçalho
import { Observable } from 'rxjs';
//ele faz com que a requisição ocorra da melhor maneira possivel
@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals'
  constructor(private http: HttpClient) { } // para ter acesso direto da importação precisa passar pelo constructor igual ao service
  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a) => animal.name !== a.name) 
  } // o !== é para diferenciar pq se n tiver o ! vai apagar todos os animais e n o animal especifico clicado

  //"=>" é uma arrow function que serve como um critério de filtro para a função filter. Ela verifica se o nome do animal passado como argumento é diferente do nome de cada elemento a do array animals, e retorna true se a condição for verdadeira, indicando que o elemento deve ser mantido no novo array filtrado.

  //filter é usada para criar um novo array com elementos que atendem a um critério específico. Ela filtra os elementos com base em uma função que determina se um elemento deve ser incluído ou não no novo array. É uma forma de selecionar apenas os elementos desejados de um array original.

  getAll():Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl)
    //precisa passar o generic do animal array assim como o Observable
    //isso é um padrão do angular
  }
}
