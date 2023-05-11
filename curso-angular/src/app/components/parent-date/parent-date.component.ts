import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-date',
  templateUrl: './parent-date.component.html',
  styleUrls: ['./parent-date.component.css']
})
export class ParentDateComponent {
  @Input() userName = '';
  @Input() userData!: {email: string , role: string };
}
