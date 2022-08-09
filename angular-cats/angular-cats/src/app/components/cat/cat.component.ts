import { Component, Input } from '@angular/core';
import { ICat } from '../../models/cat.model';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['/cat.component.css'],
})
export class CatComponent {
  @Input() cat: ICat;
}
