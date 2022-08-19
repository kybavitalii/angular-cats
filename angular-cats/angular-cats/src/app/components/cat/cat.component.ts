import { Component, Input } from '@angular/core';
import { ICat } from '../../models/cat.model';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['/cat.component.css'],
})
export class CatComponent {
  src: string;
  @Input() cat: ICat;

  ngOnInit(): void {
    this.src = 'https://cdn2.thecatapi.com/images/';
    // console.log(this.cat);
  }

  getSrc(): string {
    return this.src + `${this.cat.reference_image_id}.jpg`;
  }
}
//https://cdn2.thecatapi.com/images/O3btzLlsO.jpg  Bengal?
