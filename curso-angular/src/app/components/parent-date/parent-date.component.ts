import { Component, Input } from '@angular/core';
// precisa ter o input tanto aqui quanto lá em baixo para receber as variaveis que são os dados
@Component({
  selector: 'app-parent-date',
  templateUrl: './parent-date.component.html',
  styleUrls: ['./parent-date.component.css']
})
export class ParentDateComponent {
  @Input() userName = '';
  @Input() userData!: {email: string , role: string };
  // o @input() serve justamente para receber os dados de userName e UserData
  // o ! do userData é para iniciar o dado, garantindo para o typescript que eu vou utilizar 
}
