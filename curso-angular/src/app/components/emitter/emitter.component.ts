import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent {
  myNumber = 0

  onChangeNumber() {  
    this.myNumber = Math.floor (Math.random() *10)
  }
  // this. é usado para se referir a variavel no typeScript
  //  Math, você pode realizar diversas operações matemáticas complexas de forma simples e eficiente. Ele é frequentemente usado para cálculos numéricos, geração de números aleatórios e manipulação de valores matemáticos em geral.
  //math.floor é numeros inteiros
  // math.random é numeros aleatorios
  // *10 quer dizer que n vai ser um número maior que 10
}
