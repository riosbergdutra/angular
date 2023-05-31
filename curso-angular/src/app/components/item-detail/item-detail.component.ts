import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Animal } from 'src/app/animal';
import { ListService } from 'src/app/services/list.service';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {
animal?: Animal // colocando uma interrogação "?" você diz para o typescript que o "Animal" a vinda dele seja opcional
// pelo fato dele estar em interrogação ele n passa somente usando um {{}} ele precisa colocar no *ngIF 

constructor (private listSevice: ListService, private route: ActivatedRoute ) {
  this.getAnimal()
}
getAnimal() {
  const id = Number(this.route.snapshot.paramMap.get("id"))
  this.listSevice.getItem(id).subscribe((animal) => (this.animal = animal))
}
}
