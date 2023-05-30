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
  private apiUrl = 'http://localhost:3000/animals'//A declaração private apiUrl = 'http://localhost:3000/animals' cria uma variável de classe chamada apiUrl que armazena o URL de uma API ou endpoint específico. O valor atribuído a essa variável é 'http://localhost:3000/animals', que representa o endereço da API que contém os dados dos animais. Essa variável é marcada como private

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
    // O HttpClientModule é um módulo do Angular que permite fazer requisições HTTP em um aplicativo. Ele fornece uma classe chamada HttpClient para realizar chamadas HTTP, como GET, POST, PUT, DELETE, etc.
    //Em resumo, o GET é para obter dados, o POST é para enviar dados, o PUT é para atualizar dados e o DELETE é para excluir dados.

    /*objetos do tipo Animal[].

Dentro da função, é feita uma solicitação GET para o servidor utilizando o serviço http fornecido pelo Angular. O URL da solicitação é especificado como this.apiUrl, que é o endereço do servidor onde os dados dos animais estão armazenados.

O servidor irá processar a solicitação GET e retornar a lista de animais. A função http.get<Animal[]>(this.apiUrl) indica que estamos esperando receber uma resposta do servidor contendo um array de objetos do tipo Animal.

O Observable é retornado para permitir que o componente que chama essa função se inscreva no objeto Observable e receba a lista de animais assim que a resposta do servidor estiver disponível. Dessa forma, o componente pode atualizar sua exibição com os dados recebidos do servidor.*/
  }
}
