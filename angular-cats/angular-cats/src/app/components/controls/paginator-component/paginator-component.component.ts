import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { ICat } from '../../../models/cat.model';
import { CatsService } from '../../../services/cats.services';

@Component({
  selector: 'app-paginator-component',
  templateUrl: './paginator-component.component.html',
  styleUrls: ['./paginator-component.component.css'],
})
export class PaginatorComponentComponent implements OnInit {
  cats$: Observable<ICat[]>;
  breed$: Observable<ICat[]>;
  id: string;
  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(',')
        .map((str) => +str);
    }
  }

  constructor(private catsService: CatsService) {}
  @Input() cat: ICat;

  ngOnInit(): void {
    this.cats$ = this.catsService.getAll().pipe();
    this.breed$ = this.catsService.getBreed(this.id);
  }
}
