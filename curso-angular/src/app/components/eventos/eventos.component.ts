import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  show = false;
  showMessage(){
    this.show = !this.show // Toggle serve para mudar de falso para verdadeiro de verdadeiro para falso
    // o sinal de ! serve para negação ou diferente
  }
}
