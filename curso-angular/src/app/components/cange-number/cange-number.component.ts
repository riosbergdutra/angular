import { Component, Output, EventEmitter } from '@angular/core';
// output serve para criar evento personalizado em um componente filho, permitindo que ele emita informações para o componente pai.
// eventEmitter é emitir o evento
@Component({
  selector: 'app-cange-number',
  templateUrl: './cange-number.component.html',
  styleUrls: ['./cange-number.component.css']
})
export class CangeNumberComponent {
  @Output() changeNumber = new EventEmitter()  
  //A expressão changeNumber é o nome do evento que está sendo criado.

  //EventEmitter é uma classe do Angular que permite a criação, emissão e escuta de eventos. Ao utilizar new EventEmitter(), estamos instanciando um objeto do tipo EventEmitter para ser usado como o emissor do evento.

  handleclick(){
    this.changeNumber.emit();
    }
    // emit() serve justamente para emitir o evento no changeNumber
}
