import { Component, Input } from '@angular/core';
import { ICat } from '../../models/cat';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatNativeDateModule } from '@angular/material/core';
// import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['/cat.component.css'],
})
export class CatComponent {
  @Input() cat: ICat;
}

//

// import {Component} from '@angular/core';

/**
 * @title Card with media size
 */
// @Component({
//   selector: 'card-media-size-example',
//   templateUrl: 'card-media-size-example.html',
//   styleUrls: ['card-media-size-example.css'],
// })
// export class CardMediaSizeExample {
//   longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
//   from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
//   originally bred for hunting.`;
// }
