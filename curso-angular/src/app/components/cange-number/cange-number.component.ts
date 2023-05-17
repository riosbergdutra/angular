import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cange-number',
  templateUrl: './cange-number.component.html',
  styleUrls: ['./cange-number.component.css']
})
export class CangeNumberComponent {
  @Output() changeNumber = new EventEmitter()  

  handleclick(){
    this.changeNumber.emit();
    }
}
