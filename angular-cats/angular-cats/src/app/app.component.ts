import { Component, OnInit } from '@angular/core';
import { Observable, tap, pipe } from 'rxjs';
import { ICat } from './models/cat.model';
import { CatsService } from './services/cats.services';
import { OptionsService } from './services/options.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-cats';
  loading: boolean = false;
  responseToAPI$: Observable<ICat[]>;

  constructor(
    private catsService: CatsService,
    private options: OptionsService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    // this.getLimitedList();
    this.responseToAPI$ = this.catsService
      .getAll(this.catsService.search, this.catsService.options)
      .pipe(tap(() => (this.loading = false)));
  }

  getId(): void {
    let id = this.options.getId();

    this.responseToAPI$ = this.catsService
      .getBreed(this.catsService.options, id)
      .pipe();
  }

  getLimitedList(): void {
    //
    this.catsService.options.limit = this.options.limit;
    this.catsService.options.page = this.options.page;
    this.responseToAPI$ = this.catsService.getLimitedList(
      this.catsService.search,
      this.catsService.options
    );
  }
}
