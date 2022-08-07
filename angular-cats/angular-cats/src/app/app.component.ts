import { Component, OnInit } from '@angular/core';
import { Observable, tap, pipe } from 'rxjs';
import { ICat } from './models/cat';
import { CatsService } from './services/cats.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-cats';
  // cats: ICat[] = [];
  loading: boolean = false;
  cats$: Observable<ICat[]>;

  constructor(private catsService: CatsService) {}

  ngOnInit(): void {
    this.loading = true;
    this.cats$ = this.catsService
      .getAll()
      .pipe(tap(() => (this.loading = false)));
    // this.catsService.getAll().subscribe((cats) => {
    //   this.cats = cats;
    //   this.loading = false;
    // });
  }
}
