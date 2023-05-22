import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  sometext = "TESTANDO O PIPE OPERATOR";
  today = new Date();
  // new Date() se refere a data atual que é Mon May 22 2023 15:12:56 GMT-0300 (Horário Padrão de Brasília)
}
